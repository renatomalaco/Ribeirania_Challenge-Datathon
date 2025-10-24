import React from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

// 1. Configuração da mola (de image_23a407.png)
// Traduzido para o formato do Framer Motion
const cardSpringConfig = {
  type: 'spring',
  damping: 100,
  stiffness: 90,
  mass: 0.5,
};

// Limite em pixels para considerar um "swipe"
const swipeThreshold = 100;

export const SwipeableCard = ({
  cardData,
  onSwipe,
  onReset,
  feedbackData,
  onContinue,
}) => {
  // 2. Valores reativos (de image_239cc5.png)
  // Substitui `useSharedValue` por `useMotionValue`
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // 3. Estilo animado (de image_23a40f.png)
  // Substitui `useAnimatedStyle` e `interpolate` por `useTransform`
  const rotateZ = useTransform(
    x,
    [-150, 150], // Intervalo de entrada (pixels)
    [-10, 10], // Intervalo de saída (graus) - ajustado para ser mais visível
  );

  // Bônus: Anima a opacidade dos textos "leftText" e "rightText"
  const leftTextOpacity = useTransform(x, [0, swipeThreshold * 0.8], [0, 1]); // Mostra quando arrasta para a direita
  const rightTextOpacity = useTransform(x, [0, -swipeThreshold * 0.8], [0, 1]); // Mostra quando arrasta para a esquerda

  // 4. Manipulador de Gestos (de image_23a126.png)
  // Substitui `useAnimatedGestureHandler` pela prop `onDragEnd`
  const handleDragEnd = (event, info) => {
    // `info.offset.x` é o delta (mudança) do arraste
    const { offset } = info;

    if (offset.x > swipeThreshold) {
      // Swipe para a direita
      // Anima para fora da tela
      animate(x, 500, { ...cardSpringConfig, damping: 50 }); // Sai mais rápido
      onSwipe('right');
    } else if (offset.x < -swipeThreshold) {
      // Swipe para a esquerda
      animate(x, -500, { ...cardSpringConfig, damping: 50 });
      onSwipe('left');
    } else {
      // 5. Retorno com Mola (de image_23a126.png - onEnd)
      // Substitui `withSpring` por `animate`
      animate(x, 0, cardSpringConfig);
      animate(y, 0, cardSpringConfig);
    }
  };

  // Se houver dados de feedback, renderiza o FeedbackCard
  if (feedbackData) {
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
            className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold shadow-lg"
          >
            Continuar
          </button>
        </div>
      </motion.div>
    );
  }

  // Lógica para o card final
  if (cardData.isEndCard) {
    return (
      <motion.div
        className="swipe-card"
        style={{ backgroundColor: cardData.background }}
        // Animação de entrada para o card final
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
            className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold shadow-lg"
          >
            {cardData.leftText}
          </button>
          {cardData.rightText && (
            <button
              onClick={onReset} // Por enquanto, apenas reseta
              className="bg-secondary text-secondary-foreground px-6 py-2 rounded-lg font-semibold shadow-lg mt-4"
            >
              {cardData.rightText}
            </button>
          )}
        </div>
      </motion.div>
    );
  }

  // 6. Renderização (de image_239ce3.png)
  // Substitui <PanGestureHandler> e <Animated.View> por <motion.div>
  return (
    <motion.div
      className="swipe-card"
      // Mapeia os motion values para o CSS
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
      exit={{ x: 300, opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <div className="card-content">
        <p className="text-lg font-semibold text-center px-4">
          {cardData.question}
        </p>
        <img
          src={cardData.image}
          alt={cardData.question}
          className="w-full h-48 object-contain mt-4 rounded-lg pointer-events-none select-none"
        />

        {/* Textos que aparecem durante o swipe */}
        <motion.div
          style={{ opacity: leftTextOpacity }}
          className="absolute top-10 left-10 text-2xl font-bold text-green-600 border-4 border-green-600 px-4 py-2 rounded-lg rotate-[-15deg]"
        >
          {cardData.rightText}
        </motion.div>
        <motion.div
          style={{ opacity: rightTextOpacity }}
          className="absolute top-10 right-10 text-2xl font-bold text-red-600 border-4 border-red-600 px-4 py-2 rounded-lg rotate-[15deg]"
        >
          {cardData.leftText}
        </motion.div>
      </div>
    </motion.div>
  );
};