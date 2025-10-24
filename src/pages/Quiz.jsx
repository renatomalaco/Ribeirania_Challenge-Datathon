import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useGeneratedCards } from '@/lib/QuizData'; // Usando o alias @/
import { SwipeableCard } from '@/components/SwipeableCard'; // Usando o alias @/

function Quiz() {
  // 1. Lógica de estado (de image_2399a2.png)
  const { getCardByIndex, totalCards } = useGeneratedCards();
  const [cardIndex, setCardIndex] = useState(0);
  const [currentCard, setCurrentCard] = useState(getCardByIndex(0));

  // Função para avançar o card
  const getNextCard = () => {
    const nextIndex = cardIndex + 1;
    setCurrentCard(getCardByIndex(nextIndex));
    setCardIndex(nextIndex);
  };

  // 2. Callbacks (de image_2399a2.png - onChoose...Answer)
  const handleSwipe = (direction) => {
    console.log(`Swiped ${direction}`);
    // Ação de swipe -> avança para o próximo card
    getNextCard();
  };

  // Função para reiniciar o quiz (usada pelo card final)
  const handleReset = () => {
    setCurrentCard(getCardByIndex(0));
    setCardIndex(0);
  };

  return (
    // Wrapper para centralizar o deck de cards
    <div className="w-full flex flex-col items-center justify-center overflow-hidden p-4">
      {/* O AnimatePresence é essencial para que a animação de "exit" 
        do SwipeableCard funcione corretamente.
      */}
      <div className="swipe-card-wrapper">
        <AnimatePresence>
          <SwipeableCard
            key={currentCard.id} // A 'key' é VITAL para o AnimatePresence
            cardData={currentCard}
            onSwipe={handleSwipe}
            onReset={handleReset}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Quiz;