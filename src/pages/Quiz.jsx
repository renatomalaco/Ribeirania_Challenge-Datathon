import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useGeneratedCards, INITIAL_MONEY } from '@/lib/QuizData';
// Importando os componentes necessários do SwipeableCard.jsx
import { SwipeableCard, FeedbackCard, EndCard } from '@/components/SwipeableCard'; 
import MoneyMeter from '@/components/MoneyMeter'; // Importa o componente atualizado
import { Smile, Frown } from 'lucide-react'; // Ícones para sentimento

function Quiz() {
  const { getCardByIndex, getSpecialCard, totalCards } = useGeneratedCards(); // Adicionado totalCards
  const [cardIndex, setCardIndex] = useState(0);
  const [currentCard, setCurrentCard] = useState(getCardByIndex(0));
  const [feedbackData, setFeedbackData] = useState(null);
  const [money, setMoney] = useState(INITIAL_MONEY); // Começa com 0
  const [sentiment, setSentiment] = useState({ happy: [], sad: [] }); // Mantido

  // Função para avançar o card
  const getNextCard = () => {
    const nextIndex = cardIndex + 1;
    // Não busca card especial se o próximo índice for o final neutro
    if (nextIndex < totalCards) { 
        setCurrentCard(getCardByIndex(nextIndex));
    } else {
        // Se chegou ao fim sem ganhar/perder, mostra o card neutro
        setCurrentCard(getCardByIndex(nextIndex)); 
    }
    setCardIndex(nextIndex);
  };

  // Verificação de vitória/derrota (0-100)
  useEffect(() => {
    // Não faz nada se já estiver mostrando feedback ou se já for um card final
    if (feedbackData || currentCard.isEndCard) return;

    // Condição de vitória: Atingiu 100%
    if (money >= 100) {
      setCurrentCard(getSpecialCard('win'));
    } 
    // Condição de derrota: Chegou a 0% ou menos
    else if (money <= 0 && cardIndex > 0) { // Evita derrota imediata no início
         setCurrentCard(getSpecialCard('loss'));
    }
    // Condição de fim neutro (chegou ao fim dos cards sem ganhar/perder)
    else if (cardIndex >= totalCards) {
        setCurrentCard(getCardByIndex(totalCards)); // Mostra o card 'end-card-neutral'
    }

  // Adicionadas dependências que faltavam
  }, [money, cardIndex, totalCards, getCardByIndex, getSpecialCard, currentCard.isEndCard, feedbackData]);

  const handleSwipe = (direction) => {
    if (feedbackData || currentCard.isEndCard) return;

    const choice = direction === 'right' ? currentCard.onRight : currentCard.onLeft;
    const explanation = direction === 'right' ? currentCard.rightExplanation : currentCard.leftExplanation;
    // Título mais neutro ou baseado no ganho/perda
    let title = 'Decisão tomada!';
    if (choice?.money > 0) title = 'Boa escolha!';
    if (choice?.money < 0) title = 'Má escolha!';


    // Atualiza o dinheiro (garantindo entre 0 e 100)
    if (choice && choice.money) {
      setMoney((prevMoney) => Math.max(0, Math.min(100, prevMoney + choice.money)));
    }
    
    // Atualiza o sentimento (mantido)
    setSentiment({ happy: choice?.happy || [], sad: choice?.sad || [] });

    // Prepara os dados para o card de feedback
    setFeedbackData({
      id: `feedback-${currentCard.id}-${direction}`,
      explanation: explanation || 'Sua jornada continua...',
      title: title,
      background: currentCard.background,
    });
  };

  // Função para continuar após ver o feedback
  const handleFeedbackContinue = () => {
    setFeedbackData(null); // Esconde o card de feedback
    // Verifica se o dinheiro atingiu 0 ou 100 *antes* de pegar o próximo card
     if (money >= 100) {
       setCurrentCard(getSpecialCard('win'));
     } else if (money <= 0) {
       setCurrentCard(getSpecialCard('loss'));
     } else {
       getNextCard(); // Avança para o próximo card de pergunta
     }
  };

  // Reseta para o estado inicial (dinheiro 0)
  const handleReset = () => {
    setCurrentCard(getCardByIndex(0));
    setCardIndex(0);
    setMoney(INITIAL_MONEY); // Reseta para 0
    setSentiment({ happy: [], sad: [] }); // Limpa sentimento
    setFeedbackData(null);
  };

  return (
    // Wrapper para centralizar
    <div className="w-full flex flex-col items-center justify-start pt-8 sm:pt-4 overflow-hidden p-4 h-full">
      <MoneyMeter value={money} /> {/* Usa o componente atualizado */}
      <div className="swipe-card-wrapper">
        <AnimatePresence mode="wait">
          {/* Lógica de renderização com componentes separados */}
          {feedbackData ? (
            <FeedbackCard
              key={feedbackData.id}
              feedbackData={feedbackData}
              onContinue={handleFeedbackContinue}
            />
          ) : currentCard.isEndCard ? (
            <EndCard 
              key={currentCard.id} 
              cardData={currentCard} 
              onReset={handleReset} 
            />
          ) : (
            <SwipeableCard
              key={currentCard.id}
              cardData={currentCard}
              onSwipe={handleSwipe}
            />
          )}
        </AnimatePresence>
      </div>
       {/* Seção de Sentimento (mantida) */}
      {!currentCard.isEndCard && !feedbackData && ( // Só mostra durante o jogo
        <div className="mt-8 w-full max-w-md p-4 bg-gray-100 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-2 text-center">Sentimento da População</h3>
          <div className="flex justify-around items-center">
             <div className="flex items-center space-x-2 text-green-600">
               <Smile size={20} />
               {sentiment.happy.length > 0 ? (
                 <span className="font-medium">{sentiment.happy.join(', ')}</span>
               ) : (
                 <span className="text-gray-500 italic">Ninguém feliz</span>
               )}
             </div>
             <div className="flex items-center space-x-2 text-red-600">
                <Frown size={20} />
               {sentiment.sad.length > 0 ? (
                 <span className="font-medium">{sentiment.sad.join(', ')}</span>
               ) : (
                  <span className="text-gray-500 italic">Ninguém triste</span>
               )}
             </div>
          </div>
           {sentiment.happy.length > 0 && sentiment.sad.length === 0 && (
                <p className="text-xs text-center text-green-700 mt-2">O otimismo está no ar!</p>
            )}
             {sentiment.sad.length > 0 && sentiment.happy.length === 0 && (
                <p className="text-xs text-center text-red-700 mt-2">O pessimismo prevalece.</p>
            )}
             {sentiment.happy.length === 0 && sentiment.sad.length === 0 && (
                 <p className="text-xs text-center text-gray-500 mt-2">A população está neutra.</p>
             )}
        </div>
      )}
    </div>
  );
}

export default Quiz;