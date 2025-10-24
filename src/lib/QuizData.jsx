const cardData = [
  {
    id: 1,
    question: 'O Prefeito de Ribeirania anuncia que vai regular a RiberCoin (RBC) para "proteger os cidadãos". O mercado entra em pânico.',
    leftText: 'Vender tudo (FUD)',
    onLeft: { money: -30, happy: [], sad: [] },
    leftExplanation: 'Você vendeu no fundo! A regulação era positiva e trouxe investidores institucionais. FUD (Fear, Uncertainty, and Doubt) custou caro.',
    rightText: 'Analisar a regulação',
    onRight: { money: 25, happy: [], sad: [] },
    rightExplanation: 'Sábio! Você leu a proposta e viu que ela trazia segurança. A RBC disparou. DYOR (Do Your Own Research) é essencial.',
    image: '/Prefeito.png',
    background: '#D4A373',
  },
  {
    id: 2,
    question: 'O Malandro oferece uma "dica quente": a CapivaraCash (CAP) vai "para a lua" 1000% amanhã. Ele só quer uma pequena taxa pela informação.',
    leftText: 'Recusar a "dica"',
    onLeft: { money: 15, happy: [], sad: ['malandro'] },
    leftExplanation: 'Correto! Era um golpe de "Pump & Dump". Se parece bom demais para ser verdade, provavelmente é. Você evitou uma perda certa.',
    rightText: 'Comprar tudo que pode',
    onRight: { money: -40, happy: ['malandro'], sad: [] },
    rightExplanation: 'Você caiu num golpe! O Malandro usou seu dinheiro para inflar o preço e vendeu tudo. Você perdeu todo o investimento.',
    image: '/Malandro.png',
    background: '#FFCDB2',
  },
  {
    id: 3,
    question: 'O Advogado pergunta: O que é uma "Wallet" (Carteira) de criptomoedas?',
    leftText: 'Uma conta na Corretora',
    onLeft: { money: -10, happy: [], sad: [] },
    leftExplanation: 'Incorreto. A corretora (Exchange) guarda suas moedas, mas você não controla as chaves. "Not your keys, not your coins".',
    rightText: 'Um app para chaves privadas',
    onRight: { money: 20, happy: [], sad: [] },
    rightExplanation: 'Exato! Uma carteira (Wallet) armazena suas chaves privadas, que provam sua posse e permitem assinar transações. A auto-custódia é fundamental.',
    image: '/Advogado.png',
    background: '#BDB2FF',
  },
  {
    id: 4,
    question: 'O Padeiro agora aceita CaféChain (CFE) pelo pãozinho. Isso é um bom sinal para o token?',
    leftText: 'Sim! É adoção no mundo real.',
    onLeft: { money: 20, happy: ['padeiro'], sad: [] },
    leftExplanation: 'Perfeito! Quando uma criptomoeda ganha utilidade no dia-a-dia (adoção em massa), seu valor fundamental tende a aumentar.',
    rightText: 'Não, é muito volátil para pão.',
    onRight: { money: -15, happy: [], sad: ['padeiro'] },
    rightExplanation: 'Incorreto. Embora a volatilidade seja um desafio, a adoção real por comércios é um dos sinais mais fortes de que um projeto tem futuro.',
    image: '/Padeiro.png',
    background: '#FFE5D9',
  },
  {
    id: 5,
    question: 'A Médica está preocupada. "O preço da SolDourado (SOLDO) caiu 30% hoje!" O que é "Volatilidade"?',
    leftText: 'A medida da variação de preço.',
    onLeft: { money: 20, happy: [], sad: [] },
    leftExplanation: 'Correto! Volatilidade é a frequência e intensidade das mudanças de preço. O mercado cripto é famoso por sua alta volatilidade.',
    rightText: 'Significa que a moeda quebrou.',
    onRight: { money: -20, happy: [], sad: [] },
    rightExplanation: 'Incorreto. Quedas drásticas são comuns. Volatilidade não significa falha, mas sim um alto risco (e potencial retorno).',
    image: '/Médica.png',
    background: '#CAF0F8',
  },
  {
    id: 6,
    question: 'Dona Clotilde recebeu um e-mail pedindo sua "frase de recuperação" (seed phrase) da carteira para "validar sua conta".',
    leftText: 'Ajudá-la a enviar a frase.',
    onLeft: { money: -50, happy: [], sad: ['clotilde'] },
    leftExplanation: 'DESASTRE! Você NUNCA deve compartilhar sua frase de recuperação (seed) com ninguém. A carteira dela foi zerada. Isso é Phishing!',
    rightText: 'Alertá-la que é um golpe.',
    onRight: { money: 30, happy: ['clotilde'], sad: [] },
    rightExplanation: 'UFA! Você a salvou. A frase de recuperação é a chave mestra da carteira. Quem a tem, tem os fundos. Segurança em primeiro lugar!',
    image: '/Clotilde.png',
    background: '#CED4DA',
  },
  {
    id: 7,
    question: 'O mercado todo está em queda livre. Seu amigo Joe grita: "O que vamos fazer!?"',
    leftText: '"HODL!" (Manter a posição).',
    onLeft: { money: 25, happy: ['joe'], sad: [] },
    leftExplanation: '"HODL" (derivado de "Hold") é a estratégia de segurar ativos a longo prazo, ignorando a volatilidade. Você confia nos fundamentos.',
    rightText: 'Vender tudo agora!',
    onRight: { money: -25, happy: [], sad: ['joe'] },
    rightExplanation: 'Vender no fundo do poço (Panic Sell) é a forma mais fácil de perder dinheiro. O pânico raramente é um bom conselheiro.',
    image: '/Joe.png',
    background: '#E9D8A6',
  },
  {
    id: 8,
    question: 'A Confeiteira quer vender suas receitas como "arte digital única" usando o RioPardo Protocol (RPP). O que é um "NFT"?',
    leftText: 'Um tipo de criptomoeda.',
    onLeft: { money: -15, happy: [], sad: [] },
    leftExplanation: 'Quase lá. Criptomoedas (como Bitcoin) são fungíveis (uma é igual a outra). NFTs são o oposto.',
    rightText: 'Um token digital único.',
    onRight: { money: 20, happy: ['confeiteira'], sad: [] },
    rightExplanation: 'Exato! NFT (Token Não Fungível) é um certificado digital de propriedade de um item único (arte, música, receita).',
    image: '/Confeiteira.png',
    background: '#FFC0D9',
  }
];

// Hook para gerenciar os cards
// Valor inicial do dinheiro (10%)
export const INITIAL_MONEY = 10;

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