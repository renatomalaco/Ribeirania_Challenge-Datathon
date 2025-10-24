const cardData = [
  {
    id: 1,
    question: 'Um jovem com aparência rica pede para dar uma festa em seu reino.',
    leftText: 'Negar a oferta',
    onLeft: { money: -15, happy: [], sad: ['joker'] },
    leftExplanation: 'Você perdeu uma grande oportunidade de fazer um aliado poderoso. A cautela excessiva pode custar caro.',
    rightText: 'Vamos festejar!',
    onRight: { money: 15, happy: ['joker'], sad: [] },
    rightExplanation: 'Sua ousadia foi recompensada! O jovem era um príncipe disfarçado e agora é seu aliado. Riscos calculados valem a pena.',
    image: 'https://img.icons8.com/color/480/joker.png',
    background: '#E0BBE4',
  },
  {
    id: 2,
    question: 'O que é "Blockchain"?',
    leftText: 'Um tipo de jogo',
    onLeft: { money: -20, happy: [], sad: [] },
    leftExplanation: 'Incorreto. Blockchain não é um jogo, mas a tecnologia por trás de muitas criptomoedas. Você precisa estudar mais!',
    rightText: 'Um registro digital',
    onRight: { money: 20, happy: [], sad: [] },
    rightExplanation: 'Correto! Blockchain é como um livro-caixa público e imutável que registra transações de forma segura. Excelente!',
    image: 'https://img.icons8.com/fluency/480/blockchain.png',
    background: '#A2D2FF',
  },
  {
    id: 3,
    question: 'O que é "Criptomoeda"?',
    leftText: 'Dinheiro de brinquedo',
    onLeft: { money: -25, happy: [], sad: [] },
    leftExplanation: 'Incorreto. Embora digitais, as criptomoedas têm valor real e são usadas em transações financeiras. Não subestime o futuro!',
    rightText: 'Moeda digital',
    onRight: { money: 25, happy: [], sad: [] },
    rightExplanation: 'Exato! É uma moeda digital ou virtual protegida por criptografia, o que a torna quase impossível de falsificar. Você está no caminho certo!',
    image: 'https://img.freepik.com/vetores-premium/simbolo-de-criptomoeda-bitcoin-bitcoin-de-moeda-de-ouro-isolado-em-fundo-transparente_279501-2311.jpg',
    background: '#BDE0FE',
  },
  // Adicione mais cards aqui...
];

// Hook para gerenciar os cards
// Valor inicial do dinheiro (50%)
export const INITIAL_MONEY = 50;

export const useGeneratedCards = () => {
  const getCardByIndex = (index) => {
    // Verifica se o índice está dentro dos limites dos dados
    if (index >= cardData.length) {
      // Card de final "neutro" (chegou ao fim sem quebrar ou enriquecer)
      return {
        id: 'end-card-neutral',
        question: 'Você chegou ao fim da jornada!',
        leftText: 'Recomeçar',
        image: 'https://img.icons8.com/fluency/480/finish-flag.png',
        background: '#A7C957',
        isEndCard: true,
      };
    }
    // Retorna o card normal
    return cardData[index];
  };

  // Função para obter cards especiais de vitória/derrota
  const getSpecialCard = (type) => {
    if (type === 'win') {
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
    if (type === 'loss') {
      return {
        id: 'end-card-loss',
        question: 'Você foi à falência!',
        leftText: 'Tentar Novamente',
        image: 'https://img.icons8.com/fluency/480/sad.png',
        background: '#FF6B6B',
        isEndCard: true,
      };
    }
    return null;
  };

  // Retorna a função e o número total de cards (excluindo o card final)
  return { getCardByIndex, getSpecialCard, totalCards: cardData.length };
};