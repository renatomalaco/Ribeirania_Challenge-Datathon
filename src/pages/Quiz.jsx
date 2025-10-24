import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useGeneratedCards, INITIAL_MONEY } from '@/lib/QuizData'; // Usando o alias @/
import { SwipeableCard, FeedbackCard, EndCard } from '@/components/SwipeableCard'; // Usando o alias @/
import { DollarSign } from 'lucide-react';

// Componente para o medidor de dinheiro
const MoneyMeter = ({ value }) => {
  const circumference = 2 * Math.PI * 45; // Raio = 45
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="relative w-24 h-24 mb-4">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* Círculo de fundo */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="#E5E7EB" // gray-200
          strokeWidth="10"
          fill="transparent"
        />
        {/* Círculo de progresso */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="#4ADE80" // green-400
          strokeWidth="10"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
          className="transition-all duration-500"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <DollarSign size={32} className="text-gray-700" />
      </div>
    </div>
  );
};

function Quiz() {
  // 1. Lógica de estado (de image_2399a2.png)
  const { getCardByIndex, getSpecialCard } = useGeneratedCards();
  const [cardIndex, setCardIndex] = useState(0);
  const [currentCard, setCurrentCard] = useState(getCardByIndex(0));
  const [feedbackData, setFeedbackData] = useState(null); // Estado para controlar o feedback
  // 2. Adicione o estado para o dinheiro
  const [money, setMoney] = useState(INITIAL_MONEY);

  // Função para avançar o card
  const getNextCard = () => {
    const nextIndex = cardIndex + 1;
    setCurrentCard(getCardByIndex(nextIndex));
    setCardIndex(nextIndex);
  };

  // 3. Verificação de vitória/derrota
  useEffect(() => {
    if (currentCard.isEndCard || feedbackData) return; // Não verifica se já está no fim ou mostrando feedback

    if (money >= 100) {
      setCurrentCard(getSpecialCard('win'));
    } else if (money <= 0) {
      setCurrentCard(getSpecialCard('loss'));
    }
  }, [money, getSpecialCard, currentCard.isEndCard]);

  // 2. Callbacks (de image_2399a2.png - onChoose...Answer)
  const handleSwipe = (direction) => {
    // Previne múltiplos swipes enquanto o feedback está sendo preparado
    if (feedbackData || currentCard.isEndCard) return;

    const choice = direction === 'right' ? currentCard.onRight : currentCard.onLeft;
    const explanation = direction === 'right' ? currentCard.rightExplanation : currentCard.leftExplanation;
    const title = direction === 'right' ? 'Boa escolha!' : 'Má escolha!';

    // Atualiza o dinheiro
    if (choice && choice.money) {
      setMoney((prevMoney) => {
        return Math.max(0, Math.min(100, prevMoney + choice.money));
      });
    }

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
    getNextCard(); // Avança para o próximo card de pergunta
  };

  // 4. Modifique o handleReset
  const handleReset = () => {
    setCurrentCard(getCardByIndex(0));
    setCardIndex(0);
    setMoney(INITIAL_MONEY); // Reseta o dinheiro
    setFeedbackData(null); // Garante que o feedback seja limpo
  };

  return (
    // Wrapper para centralizar o deck de cards
    <div className="w-full flex flex-col items-center justify-start pt-8 sm:pt-4 overflow-hidden p-4 h-full">
      <MoneyMeter value={money} />
      <div className="swipe-card-wrapper">
        <AnimatePresence mode="wait">
          {feedbackData ? (
            <FeedbackCard
              key={feedbackData.id}
              feedbackData={feedbackData}
              onContinue={handleFeedbackContinue}
            />
          ) : currentCard.isEndCard ? (
            <EndCard key={currentCard.id} cardData={currentCard} onReset={handleReset} />
          ) : (
            <SwipeableCard
              key={currentCard.id}
              cardData={currentCard}
              onSwipe={handleSwipe}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Quiz;