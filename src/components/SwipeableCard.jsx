import React from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

// Configuração da mola
const cardSpringConfig = {
  type: 'spring',
  damping: 100,
  stiffness: 90,
  mass: 0.5,
};

// Limite em pixels para considerar um "swipe"
const swipeThreshold = 100;

// -- Componente Principal do Card de Pergunta --
export const SwipeableCard = ({ cardData, onSwipe }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0); // Mantido caso queira adicionar arraste vertical no futuro

  const rotateZ = useTransform(
    x,
    [-150, 150], // Intervalo de entrada (pixels)
    [-10, 10], // Intervalo de saída (graus)
  );

  // Opacidade dos textos "Sim/Não" durante o swipe
  const leftTextOpacity = useTransform(x, [0, swipeThreshold * 0.8], [0, 1]); // Mostra quando arrasta para a direita
  const rightTextOpacity = useTransform(x, [0, -swipeThreshold * 0.8], [0, 1]); // Mostra quando arrasta para a esquerda

  // Manipulador de Gestos
  const handleDragEnd = (event, info) => {
    const { offset } = info;

    if (offset.x > swipeThreshold) { // Swipe para a direita
      animate(x, 500, { ...cardSpringConfig, damping: 50 }); // Sai mais rápido
      onSwipe('right');
    } else if (offset.x < -swipeThreshold) { // Swipe para a esquerda
      animate(x, -500, { ...cardSpringConfig, damping: 50 });
      onSwipe('left');
    } else { // Retorno com Mola
      animate(x, 0, cardSpringConfig);
      animate(y, 0, cardSpringConfig);
    }
  };

  return (
    <motion.div
      className="swipe-card" // Estilo definido em index.css
      style={{
        x,
        y,
        rotate: rotateZ,
        backgroundColor: cardData.background,
      }}
      drag="x" // Permite arrastar apenas horizontalmente
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} // Limites de arraste
      onDragEnd={handleDragEnd}
      // Animações de entrada e saída para a pilha
      initial={{ scale: 0.95, y: -20, opacity: 0.8 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      exit={{ x: x.get() > 0 ? 300 : -300, opacity: 0, scale: 0.9 }} // Saída na direção do swipe
      transition={{ duration: 0.3 }}
    >
      <div className="card-content">
        {/* Ordem: Pergunta primeiro, depois Imagem */}
        <p className="text-lg font-semibold text-center px-4 mb-4">
          {cardData.question}
        </p>
        <img
          src={cardData.image}
          alt={cardData.question}
          // Ajustado para object-contain e altura fixa
          className="w-full h-48 object-contain rounded-lg pointer-events-none select-none" 
        />

        {/* Textos que aparecem durante o swipe */}
        <motion.div
          style={{ opacity: leftTextOpacity }}
          className="absolute top-10 left-10 text-xl font-bold text-green-600 border-2 border-green-600 px-3 py-1 rounded-lg rotate-[-15deg] bg-white bg-opacity-70"
        >
          {cardData.rightText}
        </motion.div>
        <motion.div
          style={{ opacity: rightTextOpacity }}
          className="absolute top-10 right-10 text-xl font-bold text-red-600 border-2 border-red-600 px-3 py-1 rounded-lg rotate-[15deg] bg-white bg-opacity-70"
        >
          {cardData.leftText}
        </motion.div>
      </div>
    </motion.div>
  );
};

// -- Componente para o Card de Feedback --
export const FeedbackCard = ({ feedbackData, onContinue }) => {
  return (
    <motion.div
      className="swipe-card" // Reutiliza os estilos base
      style={{ backgroundColor: feedbackData.background }}
      initial={{ scale: 0.8, opacity: 0, rotateY: 90 }} // Animação de entrada
      animate={{ scale: 1, opacity: 1, rotateY: 0 }}
      exit={{ scale: 0.8, opacity: 0, rotateY: -90 }} // Animação de saída
      transition={{ duration: 0.4, type: 'spring', damping: 15, stiffness: 100 }}
    >
      <div className="card-content text-center">
        <h2 className="text-2xl font-bold mb-4">{feedbackData.title}</h2>
        <p className="text-md mb-6 px-4">{feedbackData.explanation}</p>
        <button
          onClick={onContinue}
          // Usando cores primárias definidas no seu index.css (se houver) ou Tailwind padrão
          className="bg-primary hover:bg-primary/80 text-primary-foreground px-6 py-2 rounded-lg font-semibold shadow-lg transition-colors"
        >
          Continuar
        </button>
      </div>
    </motion.div>
  );
};

// -- Componente para o Card de Fim de Jogo --
export const EndCard = ({ cardData, onReset }) => {
  return (
    <motion.div
      className="swipe-card"
      style={{ backgroundColor: cardData.background }}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="card-content text-center">
        <img
          src={cardData.image}
          alt="End Card"
          className="w-32 h-32 mx-auto mb-4 pointer-events-none select-none"
        />
        <h2 className="text-2xl font-bold mb-6">{cardData.question}</h2>
        <button
          onClick={onReset}
           // Usando cores primárias definidas no seu index.css ou Tailwind padrão
          className="bg-primary hover:bg-primary/80 text-primary-foreground px-6 py-2 rounded-lg font-semibold shadow-lg transition-colors"
        >
          {cardData.leftText}
        </button>
      </div>
    </motion.div>
  );
};