const cardData = [
  {
    id: 1,
    question: 'Um jovem com aparência rica pede para dar uma festa em seu reino.',
    leftText: 'Negar a oferta',
    onLeft: { happy: [], sad: ['joker'] },
    rightText: 'Vamos festejar!',
    onRight: { happy: ['joker'], sad: [] },
    image: 'https://img.icons8.com/color/480/joker.png',
    background: '#E0BBE4',
  },
  {
    id: 2,
    question: 'O que é "Blockchain"?',
    leftText: 'Um tipo de jogo',
    onLeft: { happy: [], sad: [] },
    rightText: 'Um registro digital',
    onRight: { happy: [], sad: [] },
    image: 'https://img.icons8.com/fluency/480/blockchain.png',
    background: '#A2D2FF',
  },
  {
    id: 3,
    question: 'O que é "Criptomoeda"?',
    leftText: 'Dinheiro de brinquedo',
    onLeft: { happy: [], sad: [] },
    rightText: 'Moeda digital',
    onRight: { happy: [], sad: [] },
    image: 'https://img.freepik.com/vetores-premium/simbolo-de-criptomoeda-bitcoin-bitcoin-de-moeda-de-ouro-isolado-em-fundo-transparente_279501-2311.jpg',
    background: '#BDE0FE',
  },
  // Adicione mais cards aqui...
];

// Hook para gerenciar os cards
export const useGeneratedCards = () => {
  const getCardByIndex = (index) => {
    // Verifica se o índice está dentro dos limites dos dados
    if (index >= cardData.length) {
      // Se não estiver, retorna o card especial de "Fim de Jogo"
      return {
        id: 'end-card',
        question: 'Você completou o quiz!',
        leftText: 'Recomeçar',
        rightText: 'Ver Pontos',
        image: 'https://img.icons8.com/fluency/480/trophy.png',
        background: '#A7C957', // Um verde para indicar sucesso
        isEndCard: true,
      };
    }
    // Retorna o card normal
    return cardData[index];
  };

  // Retorna a função e o número total de cards (excluindo o card final)
  return { getCardByIndex, totalCards: cardData.length };
};