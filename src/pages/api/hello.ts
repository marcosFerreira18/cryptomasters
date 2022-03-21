// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Modulo = {
  titulo: string;
  descricao: string;
  img: string;
};

type Data = {
  topicos: Array<Modulo>;
  modulos: Array<Modulo>;
  faq: Array<Modulo>;
};

export const Api = {
  topicos: [
    {
      img: "alavancagem.png",
      titulo: "ALAVANCAGEM [SHORT E LONG]",
      descricao: `2022 promete ser um ano de fortes emoções em cripto, que seja também de fortes ganhos! Aprenda as ferramentas, e estratégias, que uso para lucrar mesmo com o mercado em queda!`,
    },
    {
      img: "ganhos.png",
      titulo: "GANHOS CONSISTENTES",
      descricao: `Use ferramentas de análise para encontrar os projetos mais promissores, conciliando análise gráfica e fundamentalista. Whitepaper - Metaverso | Defi | NFTs. Candles, Padrões Gráficos, Indicadores Gráficos e etc).`,
    },
    {
      img: "trade.png",
      titulo: "TRADE DE CRIPTOATIVOS",
      descricao: `Através do nosso método, aprenda a usar a fusão entre Análise Técnica e Fundamentalista a seu favor. Faremos operações usando os principais set-ups de entrada e saída com estratégias de moderadas a agressivas.`,
    },
    {
      img: "risco.png",
      titulo: "GERENCIAMENTO DE RISCO",
      descricao: `Entenda como o Stop pode ser seu alido para evitar maiores perdas. Vamos falar principalmente sobre Stop Financeiro e Stop Técnico e como eles podem evitar a sua ruína.`,
    },
    {
      img: "setup.png",
      titulo: "SET-UP PROFISSIONAL",
      descricao: `Configure o seu set-up como um profissional faz. Saiba quais indicadores usar a cada mudança do mercado. Aumente sua assertividade aplicando técnicas profissionais.`,
    },
  ],
  modulos: [
    {
      titulo: "Módulo 1 - O contexto",
      descricao:
        "A analisar e investir nas Criptos mais promissoras com alto poder de valorização, antes da sua explosão de preço.",
    },
    {
      titulo: "Módulo 2 - Ferramentas de Análise",
      descricao:
        "Como estar sempre um passo á frente: Ferramentas e Setup de como encontrar gemas mais promissoras e com potencial de explosão a curto prazo",
    },
    {
      titulo: "Módulo 3 - Binance na prática",
      descricao:
        "Imersão em Trading View, Binance e CoinMarketCap: Principais ferramentas para entrada, observação e acompanhamento do mercado",
    },
    {
      titulo: "Módulo 4 - Indicadores",
      descricao:
        "Tipos de análise: Uma fusão entre Análise Técnica e Fundamentalista (Método Exclusivo CoinExpet)",
    },
    {
      titulo: "Módulo 5 - Gerenciamento de Risco",
      descricao: "Tipos de Operações: Holder | Scalper | Day Trader e etc",
    },
    {
      titulo: "Módulo 6 - Setups de Operação",
      descricao: "Principais padrões de candles",
    },
    {
      titulo: "Módulo 7 - Metaverso",
      descricao:
        "Principais set-ups de Entrada e Saída de operações: Estratégias de operação moderada a agressiva.",
    },
    {
      titulo: "Módulo 8 - Staking",
      descricao: "Price Action aplicado aos movimentos dos CriptoAtivos",
    },
    {
      titulo: "Módulo 9 - Alavancagem [Short e Long]",
      descricao: "Principais formações gráficas",
    },
  ],
  faq: [
    {
      titulo: "O que é o Crypto Masters?",
      descricao: `O Crypto Masters é nosso curso completo sobre investimento em criptoativos. Nele
      mostramos desde o básico sobre o mercado ativos digitais, as possibilidades que existem e
      como extrair o máximo desse mercado, como alavancagem e short.
      Passaremos também por diversas estratégias de alocação, inclusive a que usamos na gestão
      dos investimentos de nossa carteira de criptos.`,
    },
    {
      titulo:
        "Qual o formato do curso e como terei acesso às aulas e aos conteúdos?",
      descricao: `O curso é 100% online.
      Você terá acesso a todas aulas e conteúdos através da nossa área de membros exclusiva do
      Crypto Masters na plataforma. `,
    },
    {
      titulo: "Quando terei acesso ao conteúdo?",
      descricao: `No momento que a sua compra for confirmada, você receberá os seus dados de acesso (login e
        senha) no e-mail informado no ato da compra.
        Com esses dados, você poderá entrar na nossa área de membros exclusiva do Crypto Masters,
        tendo acesso ao curso instantaneamente.`,
    },
    {
      titulo: "Quais são as formas de pagamento?",
      descricao: `Você poderá pagar o curso:
      À vista ou parcelado em até 12x via cartão de crédito. (Juros da plataforma)`,
    },
    {
      titulo: "Qual a garantia oferecida no curso?",
      descricao: `Sim, você terá um canal de e-mail direto para tirar todas as suas dúvidas com a equipe do
      Crypto Masters.
      Além disso, cada aula possui área de comentários onde você pode interagir com a nossa
      equipe.`,
    },
    {
      titulo: "Por quanto tempo terei acesso ao conteúdo do curso?",
      descricao: `Você terá acesso a todas aulas e conteúdos do Crypto Masters por 1 ano.`,
    },
    {
      titulo: "O curso oferece certificado de conclusão?",
      descricao: `Sim, disponibilizaremos certificado de conclusão.`,
    },
    {
      titulo: "E se eu não conseguir aplicar os ensinamentos do curso?",
      descricao: `Se você não estiver conseguindo aplicar ou ter resultados com os ensinamentos do Crypto
      Masters, entre em contato conosco através do e-mail para os alunos do curso. Assim que
      recebermos o seu e-mail, te responderemos com a nossa ajuda.`,
    },
    {
      titulo: "Preciso de algum conhecimento básico para participar do curso?",
      descricao: `Não é necessário nenhum conhecimento prévio para participar do curso pois iremos te
      conduzir do zero, desde as orientações de como abrir a conta, como escolher os ativos e etc.`,
    },
    {
      titulo: "Qual corretora usada durante o curso?",
      descricao: `Binance, a maior do mundo.`,
    },
    {
      titulo: "O que acontece se eu não comprar o curso agora?",
      descricao: `Se você chegou até aqui, ou você quer começar a investir ou você está insatisfeito com os seus
      investimentos. E eu garanto pra você uma coisa: é impossível ter resultados diferentes fazendo
      as mesmas coisas de sempre. Essa é a melhor oportunidade que você tem para virar a chave
      na sua vida financeira.
      Venha conosco para aprender um passo a passo simples para se tornar um investidor de
      sucesso com resultados consistentes no longo prazo!`,
    },
    {
      titulo:
        "Outra pessoa cuida dos meus investimentos. Devo fazer o curso mesmo assim?",
      descricao: `Sim. Mesmo se o profissional que te assessora for extremamente competente, ainda assim
      você precisa ter conhecimento sobre onde você está investindo. Afinal de contas, profissionais
      mudam, mas o conhecimento fica.
      Mesmo porque bancos não costumam ter vasto conhecimento sobre criptoativos.`,
    },
  ],
};
