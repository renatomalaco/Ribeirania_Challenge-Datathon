import React from 'react';
import { DollarSign } from 'lucide-react';

// Componente para o medidor de dinheiro (0-100)
const MoneyMeter = ({ value }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  // Garante que o valor esteja entre 0 e 100
  const clampedValue = Math.max(0, Math.min(100, value));
  // Calcula o offset (quanto da linha *não* será mostrado)
  const strokeDashoffset = circumference - (clampedValue / 100) * circumference;

  // Lógica para determinar a cor
  let strokeColor = '#4ADE80'; // Verde (green-400) - Padrão > 60
  if (clampedValue <= 25) {
    strokeColor = '#F87171'; // Vermelho (red-400) <= 25
  } else if (clampedValue <= 60) {
    strokeColor = '#FACC15'; // Amarelo (yellow-400) <= 60
  }

  return (
    <div className="relative w-24 h-24 mb-4">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* Círculo de fundo */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#E5E7EB" // gray-200
          strokeWidth="10"
          fill="transparent"
        />
        {/* Círculo de progresso */}
        {clampedValue > 0 && ( // Só renderiza se > 0
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke={strokeColor} // Cor dinâmica
            strokeWidth="10"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
            className="transition-all duration-500" // Mantém a transição suave
            style={{ transitionProperty: 'stroke-dashoffset, stroke' }} // Anima também a cor
          />
        )}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center flex-col">
         {/* Ícone muda de cor se estiver zerado */}
        <DollarSign
          size={32}
          className={clampedValue <= 0 ? "text-gray-400" : "text-gray-700"}
        />
        {/* Mostra o valor percentual */}
        <span className="text-sm font-semibold mt-1">
          {Math.round(clampedValue)}% 
        </span>
      </div>
    </div>
  );
};

export default MoneyMeter;