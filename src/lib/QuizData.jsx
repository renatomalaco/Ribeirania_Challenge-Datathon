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
    question: 'O Malcon oferece uma "dica quente": a CapivaraCash (CAP) vai "para a lua" 1000% amanhã. Ele só quer uma pequena taxa pela informação.',
    leftText: 'Recusar a "dica"',
    // O Malandro fica triste se você recusa o golpe
    onLeft: { money: 15, happy: [], sad: ['malandro'] }, 
    leftExplanation: 'Correto! Era um golpe de "Pump & Dump". Se parece bom demais para ser verdade, provavelmente é. Você evitou uma perda certa.',
    rightText: 'Comprar tudo que pode',
    // O Malandro fica feliz se você cai no golpe
    onRight: { money: -40, happy: ['malandro'], sad: [] }, 
    rightExplanation: 'Você caiu num golpe! O Malcon usou seu dinheiro para inflar o preço e vendeu tudo. Você perdeu todo o investimento.',
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
  },
  {
    id: 9,
    question: 'A SOLANA subiu 40% em 2 dias após rumores de parceria com o governo de Ribeirânia. Todos estão comprando! Você entra também?',
    leftText: 'Comprar agora (FOMO total)',
    onLeft: { money: -35, happy: [], sad: ['guru'] },
    leftExplanation: 'A parceria nunca existiu e a SOLANA despencou 35%. Você comprou no topo e ficou preso. LIÇÃO: Comprar por euforia e boatos leva a prejuízo.',
    rightText: 'Esperar confirmação oficial',
    onRight: { money: 10, happy: ['guru'], sad: [] },
    rightExplanation: 'A notícia foi falsa, e a SOLANA caiu. Você economizou e agora pode comprar com desconto. LIÇÃO: Paciência e pesquisa valem mais que impulso.',
    image: '/Guru.png',
    background: '#F4A261', // Cor tema "Guru"
  },
  {
    id: 10,
    question: 'Um influenciador postou que a ZEPHYR foi "hackeada" e está prestes a cair para zero. O pânico toma conta do mercado. O que fazer?',
    leftText: 'Vender tudo imediatamente',
    onLeft: { money: -45, happy: [], sad: ['guru'] },
    leftExplanation: 'Você vendeu com prejuízo de 45%. Horas depois, descobriu que era um boato falso. LIÇÃO: O medo (FUD) é tão perigoso quanto a euforia.',
    rightText: 'Checar fontes oficiais antes de agir',
    onRight: { money: 30, happy: ['guru'], sad: [] },
    rightExplanation: 'Você esperou, o time da ZEPHYR se pronunciou e tudo era mentira. A moeda se recuperou 30%. LIÇÃO: Verifique antes de vender.',
    image: '/Guru.png',
    background: '#E76F51', // Cor tema "Guru"
  },
  {
    id: 11,
    question: 'A NEURON caiu 60% após meses de alta constante. Seu portfólio está no vermelho. Você decide?',
    leftText: 'Vender tudo e sair do projeto',
    onLeft: { money: -20, happy: [], sad: ['guru'] }, // Perdeu ao vender no fundo
    leftExplanation: 'Você vendeu no fundo. Duas semanas depois, a NEURON se recuperou e valorizou 70%. LIÇÃO: Realizar prejuízo no pânico impede que você aproveite a recuperação.',
    rightText: 'Manter posição e reavaliar fundamentos',
    onRight: { money: 20, happy: ['guru'], sad: [] }, // Ganhou por esperar
    rightExplanation: 'Você analisou com calma, viu que os fundamentos eram sólidos e segurou. A recuperação veio. LIÇÃO: Drawdowns são normais. Invista com paciência.',
    image: '/Guru.png',
    background: '#F4A261', // Cor tema "Guru"
  },
  {
    id: 12,
    question: 'A SOLANA e a ZEPHYR estão alternando subidas e quedas de 20% por dia. A indecisão toma conta. Qual sua estratégia?',
    leftText: 'Fazer trade diário para tentar aproveitar tudo',
    onLeft: { money: -15, happy: [], sad: ['guru'] },
    leftExplanation: 'Você perdeu mais em taxas e erros do que ganhou. O stress te dominou. LIÇÃO: Volatilidade não é sinônimo de oportunidade. Evite operar no caos.',
    rightText: 'Manter posição sem se desesperar',
    onRight: { money: 40, happy: ['guru'], sad: [] },
    rightExplanation: 'Você ficou tranquilo e manteve foco no longo prazo. A ZEPHYR valorizou 40% em uma semana. LIÇÃO: A volatilidade é o preço da oportunidade.',
    image: '/Guru.png',
    background: '#E76F51', // Cor tema "Guru"
  },
  {
    id: 13,
    question: 'Você tem R$ 5.000 para investir. Colocar tudo em NEURON, ou dividir entre SOLANA, ZEPHYR e NEURON?',
    leftText: 'Apostar tudo na NEURON (All-in)',
    onLeft: { money: -50, happy: [], sad: ['guru'] }, // Risco máximo
    leftExplanation: 'Um bug no contrato da NEURON derrubou o preço 80%. Você perdeu quase tudo. LIÇÃO: All-in em um ativo é apostar na sorte.',
    rightText: 'Diversificar entre as três moedas',
    onRight: { money: 15, happy: ['guru'], sad: [] }, // Risco gerenciado
    rightExplanation: 'Enquanto a NEURON caiu, a ZEPHYR subiu e a SOLANA manteve estabilidade. Seu portfólio se equilibrou. LIÇÃO: Diversificar protege seu patrimônio.',
    image: '/Guru.png',
    background: '#F4A261', // Cor tema "Guru"
  }
];

// Hook para gerenciar os cards
// Valor inicial do dinheiro (50% para a barra de 0-100)
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