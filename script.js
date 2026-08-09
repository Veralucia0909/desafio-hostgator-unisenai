// ============================================================
// 1. MENSAGENS
// ============================================================

const mensagens = [
  { id: 1, message: "Meu site ficou fora do ar depois que alterei o DNS e preciso resolver isso com urgência." },
  { id: 2, message: "Alguém já conseguiu criar uma automação de atendimento usando IA?" },
  { id: 3, message: "Tenho uma sugestão de tema para o próximo evento da comunidade." },
  { id: 4, message: "Estou com uma dúvida sobre como configurar o SMTP do meu e-mail." },
  { id: 5, message: "Meu WordPress mostra um erro depois que atualizei um plugin." },
  { id: 6, message: "Não consigo acessar minha VPS desde ontem e o serviço está parado." },
  { id: 7, message: "Quero compartilhar um projeto em Python que desenvolvi no fim de semana." },
  { id: 8, message: "O certificado SSL do meu domínio aparece como inválido. Como faço para corrigir?" },
  { id: 9, message: "Recebi muitos e-mails marcados como spam e preciso de ajuda para configurar o remetente." },
  { id: 10, message: "Gostei muito da última palestra sobre carreira e networking. Obrigado pela organização!" },
  { id: 11, message: "Meu banco de dados está indisponível e a aplicação não funciona." },
  { id: 12, message: "Alguém conhece uma boa ferramenta para testar prompts de chatbot?" },
  { id: 13, message: "Tenho uma ideia de melhoria para a página de inscrição do meetup." },
  { id: 14, message: "A URL do meu site redireciona para o endereço errado depois da troca de domínio." },
  { id: 15, message: "Meu servidor foi invadido e acredito que existem dados expostos. É urgente." },
  { id: 16, message: "Como faço para conectar uma API em uma aplicação JavaScript?" },
  { id: 17, message: "O tema do WooCommerce quebrou o layout da loja e preciso de suporte." },
  { id: 18, message: "Seria legal organizar um evento presencial sobre inteligência artificial." },
  { id: 19, message: "Perdi o acesso à caixa de entrada do e-mail da minha empresa." },
  { id: 20, message: "Qual VPS vocês recomendam para uma aplicação pequena com banco de dados?" },
  { id: 21, message: "Encontrei um bug no código Python ao consumir uma API e não consigo identificar a causa." },
  { id: 22, message: "Meu domínio venceu e o site está indisponível. Preciso recuperar o acesso com urgência." },
  { id: 23, message: "Quero deixar um feedback: o horário do último meetup poderia ser mais cedo." },
  { id: 24, message: "Depois de instalar um plugin de segurança, não consigo acessar o painel do WordPress." },
  { id: 25, message: "O chatbot está respondendo com informações erradas e preciso de ajuda para ajustar o prompt." },
  { id: 26, message: "Alguém vai participar da palestra de sábado?" },
  { id: 27, message: "O servidor está lento desde a migração da hospedagem." },
  { id: 28, message: "Minha conta parece ter sido hackeada e começaram a enviar spam pelo meu e-mail." },
  { id: 29, message: "Estou criando um agente de IA em Python e tenho uma dúvida sobre integração com API." },
  { id: 30, message: "Recomendo convidar uma pessoa especialista em WordPress para o próximo evento." },
  { id: 31, message: "O registro do domínio foi concluído, mas a URL ainda não funciona." },
  { id: 32, message: "Preciso de ajuda para restaurar o backup do banco de dados na hospedagem." },
  { id: 33, message: "Estou recebendo um erro 500 na aplicação e o site ficou fora do ar." },
  { id: 34, message: "Alguém conhece um plugin para melhorar o SEO no WordPress?" },
  { id: 35, message: "Quero compartilhar uma automação que organiza as inscrições dos eventos da comunidade." },
  { id: 36, message: "O certificado SSL foi renovado com sucesso e agora o site está funcionando." },
  { id: 37, message: "Não consigo configurar o banco de dados no servidor. Alguém pode me ajudar?" },
  { id: 38, message: "Tenho uma sugestão para melhorar a documentação da API." },
  { id: 39, message: "A página do evento está muito boa e o processo de inscrição foi simples." },
  { id: 40, message: "Bom dia, pessoal! Espero que todos tenham uma ótima semana." }
];


// ============================================================
// 2. CATEGORIAS
// ============================================================

const categorias = {
  "Sites e domínios": [
    "site",
    "dns",
    "domínio",
    "url",
    "ssl",
    "registro",
    "certificado"
  ],

  "Hospedagem e servidores": [
    "servidor",
    "vps",
    "hospedagem",
    "infraestrutura",
    "banco de dados",
    "backup",
    "aplicação"
  ],

  "E-mail": [
    "email",
    "e-mail",
    "smtp",
    "caixa de entrada",
    "spam",
    "remetente"
  ],

  "WordPress": [
    "wordpress",
    "plugin",
    "tema",
    "woocommerce",
    "seo"
  ],

  "IA e automação": [
    "ia",
    "inteligência artificial",
    "prompt",
    "automação",
    "agente",
    "chatbot"
  ],

  "Programação": [
    "código",
    "api",
    "javascript",
    "python",
    "bug"
  ],

  "Comunidade e eventos": [
    "comunidade",
    "evento",
    "meetup",
    "palestra",
    "networking",
    "inscrição"
  ],

  "Feedback e sugestões": [
    "feedback",
    "sugestão",
    "ideia",
    "melhoria",
    "recomendação"
  ]
};


// ============================================================
// 3. PRIORIDADES
// ============================================================

const palavrasAlta = [
  "urgente",
  "fora do ar",
  "indisponível",
  "invadido",
  "hackeado",
  "vazamento",
  "dados expostos",
  "perdi o acesso",
  "não consigo acessar",
  "serviço parado"
];

const palavrasMedia = [
  "erro",
  "problema",
  "ajuda",
  "dúvida",
  "não funciona",
  "não consigo configurar",
  "dificuldade",
  "preciso de suporte"
];


// ============================================================
// 4. NORMALIZAR TEXTO
// ============================================================

function normalizarTexto(texto) {
  return texto
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}


// ============================================================
// 5. ENCONTRAR PALAVRAS
// ============================================================

function encontrarPalavras(texto, listaPalavras) {

  const palavrasEncontradas = [];

  for (const palavra of listaPalavras) {

    const palavraNormalizada =
      normalizarTexto(palavra);

    if (texto.includes(palavraNormalizada)) {
      palavrasEncontradas.push(palavra);
    }
  }

  return palavrasEncontradas;
}


// ============================================================
// 6. ENCONTRAR CATEGORIA
// ============================================================

function encontrarCategoria(texto) {

  let categoriaEscolhida = "Outros";
  let maiorQuantidade = 0;
  let palavrasEncontradas = [];

  for (const categoria in categorias) {

    const palavras =
      encontrarPalavras(
        texto,
        categorias[categoria]
      );

    if (palavras.length > maiorQuantidade) {

      maiorQuantidade = palavras.length;
      categoriaEscolhida = categoria;
      palavrasEncontradas = palavras;
    }
  }

  return {
    categoria: categoriaEscolhida,
    palavrasEncontradas: palavrasEncontradas
  };
}


// ============================================================
// 7. ENCONTRAR PRIORIDADE
// ============================================================

function encontrarPrioridade(texto) {

  const palavrasAltaEncontradas =
    encontrarPalavras(
      texto,
      palavrasAlta
    );

  if (palavrasAltaEncontradas.length > 0) {

    return {
      prioridade: "Alta",
      palavrasPrioridade:
        palavrasAltaEncontradas
    };
  }

  const palavrasMediaEncontradas =
    encontrarPalavras(
      texto,
      palavrasMedia
    );

  if (palavrasMediaEncontradas.length > 0) {

    return {
      prioridade: "Média",
      palavrasPrioridade:
        palavrasMediaEncontradas
    };
  }

  return {
    prioridade: "Baixa",
    palavrasPrioridade: []
  };
}


// ============================================================
// 8. ANALISAR MENSAGEM
// ============================================================

function analisarMensagem(mensagem) {

  const texto =
    normalizarTexto(
      mensagem.message
    );

  const resultadoCategoria =
    encontrarCategoria(texto);

  const resultadoPrioridade =
    encontrarPrioridade(texto);

  return {
    id: mensagem.id,
    message: mensagem.message,

    category:
      resultadoCategoria.categoria,

    priority:
      resultadoPrioridade.prioridade,

    matchedKeywords:
      resultadoCategoria.palavrasEncontradas,

    priorityKeywords:
      resultadoPrioridade.palavrasPrioridade
  };
}


// ============================================================
// 9. CLASSIFICAR TODAS AS MENSAGENS
// ============================================================

const resultados = mensagens.map(
  analisarMensagem
);


// ============================================================
// 10. CRIAR ELEMENTOS DA PÁGINA
// ============================================================

const titulo =
  document.createElement("h1");

titulo.textContent =
  "Análise de mensagens";

document.body.appendChild(titulo);


// ---------- FILTRO DE PRIORIDADE ----------

const labelPrioridade =
  document.createElement("label");

labelPrioridade.textContent =
  "Prioridade: ";

document.body.appendChild(
  labelPrioridade
);


const inputPrioridade =
  document.createElement("input");

inputPrioridade.type = "text";

inputPrioridade.placeholder =
  "Alta, média ou baixa";

document.body.appendChild(
  inputPrioridade
);


// ---------- FILTRO DE PALAVRA-CHAVE ----------

const labelPalavra =
  document.createElement("label");

labelPalavra.textContent =
  " Palavra-chave: ";

document.body.appendChild(
  labelPalavra
);


const inputPalavra =
  document.createElement("input");

inputPalavra.type = "text";

inputPalavra.placeholder =
  "Ex: site, python, wordpress";

document.body.appendChild(
  inputPalavra
);


// ---------- BOTÃO ----------

const botao =
  document.createElement("button");

botao.textContent =
  "Filtrar";

document.body.appendChild(botao);


// ---------- RESULTADO ----------

const resultado =
  document.createElement("div");

resultado.id = "resultado";

document.body.appendChild(resultado);


// ============================================================
// 11. MOSTRAR RESULTADOS
// ============================================================

function mostrarResultados() {

  resultado.innerHTML = "";


  const prioridadeDigitada =
    normalizarTexto(
      inputPrioridade.value
    );

  const palavraDigitada =
    normalizarTexto(
      inputPalavra.value
    );


  // ==========================================================
  // FILTRAR AS MENSAGENS
  // ==========================================================

  const mensagensFiltradas =
    resultados.filter(function (mensagem) {

      const prioridadeCorreta =
        prioridadeDigitada === "" ||
        normalizarTexto(
          mensagem.priority
        ) === prioridadeDigitada;


      const palavraCorreta =
        palavraDigitada === "" ||
        normalizarTexto(
          mensagem.message
        ).includes(palavraDigitada);


      return (
        prioridadeCorreta &&
        palavraCorreta
      );
    });


  // ==========================================================
  // RESULTADO DA ANÁLISE
  // ==========================================================

  const tituloResultado =
    document.createElement("h2");

  tituloResultado.textContent =
    "Resultado da análise";

  resultado.appendChild(
    tituloResultado
  );


  const prioridade =
    document.createElement("p");

  prioridade.innerHTML =
    "<strong>Prioridade:</strong> " +
    (
      prioridadeDigitada === ""
        ? "Todas"
        : prioridadeDigitada
    );

  resultado.appendChild(prioridade);


  const palavra =
    document.createElement("p");

  palavra.innerHTML =
    "<strong>Palavra-chave:</strong> " +
    (
      palavraDigitada === ""
        ? "Todas"
        : palavraDigitada
    );

  resultado.appendChild(palavra);


  const total =
    document.createElement("p");

  total.innerHTML =
    "<strong>Total de mensagens encontradas:</strong> " +
    mensagensFiltradas.length;

  resultado.appendChild(total);


  // ==========================================================
  // MENSAGENS
  // ==========================================================

  const tituloMensagens =
    document.createElement("h2");

  tituloMensagens.textContent =
    "Mensagens encontradas";

  resultado.appendChild(
    tituloMensagens
  );


  if (
    mensagensFiltradas.length === 0
  ) {

    const nenhuma =
      document.createElement("p");

    nenhuma.textContent =
      "Nenhuma mensagem encontrada.";

    resultado.appendChild(
      nenhuma
    );

    return;
  }


  // ==========================================================
  // EXIBIR CADA MENSAGEM
  // ==========================================================

  for (
    const mensagem
    of mensagensFiltradas
  ) {

    const card =
      document.createElement("div");

    card.className =
      "mensagem";


    const tituloMensagem =
      document.createElement("h3");

    // tituloMensagem.textContent =
    //   "Mensagem " +
    //   mensagem.id;

    card.appendChild(
      tituloMensagem
    );


    const texto =
      document.createElement("p");

    texto.innerHTML =
      "<strong>Mensagem:</strong><br>" +
      mensagem.message;

    card.appendChild(texto);


    const categoria =
      document.createElement("p");

    categoria.innerHTML =
      "<strong>Categoria:</strong> " +
      mensagem.category;

    card.appendChild(categoria);


    const palavras =
      document.createElement("p");

    palavras.innerHTML =
      "<strong>Palavras-chave:</strong> " +
      (
        mensagem.matchedKeywords.length > 0
          ? mensagem.matchedKeywords.join(", ")
          : "Nenhuma"
      );

    card.appendChild(palavras);


    const prioridadeMensagem =
      document.createElement("p");

    prioridadeMensagem.innerHTML =
      "<strong>Prioridade:</strong> " +
      mensagem.priority;

    card.appendChild(
      prioridadeMensagem
    );


    resultado.appendChild(card);
  }
}


// ============================================================
// 12. BOTÃO
// ============================================================

botao.addEventListener(
  "click",
  mostrarResultados
);


// ============================================================
// 13. ENTER NOS FILTROS
// ============================================================

inputPrioridade.addEventListener(
  "keydown",
  function (evento) {

    if (evento.key === "Enter") {
      mostrarResultados();
    }
  }
);


inputPalavra.addEventListener(
  "keydown",
  function (evento) {

    if (evento.key === "Enter") {
      mostrarResultados();
    }
  }
);


// ============================================================
// 14. MOSTRAR TUDO INICIALMENTE
// ============================================================

mostrarResultados();