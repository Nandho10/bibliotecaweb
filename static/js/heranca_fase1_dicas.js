/**
 * Biblioteca Herança — Fase I (120 Obras)
 * Ordem de Prioridade de Compra, Dicas Editoriais e Sugestões de Editoras
 * Fonte: "Biblioteca Herança dicas.docx" / Curadoria Familiar
 */

const HERANCA_FASE1_DICAS = [
  {
    "prioridade": 1,
    "titulo": "Bíblia",
    "autor": "",
    "grupo": "Os pilares da biblioteca",
    "dica": "Bíblia de Jerusalém, Paulus. Para a edição de família, prefira capa dura ou grande formato, com notas e referências. A Paulus mantém diferentes formatos em catálogo.",
    "editoras_sugeridas": [
      "Paulus"
    ],
    "candidato_luxo": true,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 2,
    "titulo": "Odisseia",
    "autor": "Homero",
    "grupo": "Os pilares da biblioteca",
    "dica": "Homero. Companhia das Letras, tradução de Frederico Lourenço, edição comentada em capa dura; alternativa: Editora 34, tradução de Trajano Vieira, bilíngue. A edição comentada da Companhia aparece no catálogo oficial.",
    "editoras_sugeridas": [
      "Companhia das Letras",
      "Editora 34"
    ],
    "candidato_luxo": true,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 3,
    "titulo": "Ilíada",
    "autor": "Homero",
    "grupo": "Os pilares da biblioteca",
    "dica": "Homero. Procure tradução direta do grego, com notas. Editora 34, tradução de Trajano Vieira, é uma opção a comparar; se escolher outra tradução, priorize legibilidade e aparato crítico.",
    "editoras_sugeridas": [
      "Editora 34"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 4,
    "titulo": "Inferno",
    "autor": "Dante Alighieri",
    "grupo": "Os pilares da biblioteca",
    "dica": "Dante Alighieri. Editora 34, tradução de Ítalo Eugenio Mauro, edição bilíngue quando disponível.",
    "editoras_sugeridas": [
      "Editora 34"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 5,
    "titulo": "Purgatório",
    "autor": "Dante Alighieri",
    "grupo": "Os pilares da biblioteca",
    "dica": "Dante Alighieri. Mesma tradução e coleção do Inferno, para manter unidade.",
    "editoras_sugeridas": [],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 6,
    "titulo": "Paraíso",
    "autor": "Dante Alighieri",
    "grupo": "Os pilares da biblioteca",
    "dica": "Dante Alighieri. Mesma linha dos dois volumes anteriores. Considere uma edição ilustrada da Divina Comédia para o conjunto.",
    "editoras_sugeridas": [],
    "candidato_luxo": true,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 7,
    "titulo": "Dom Quixote",
    "autor": "Miguel de Cervantes",
    "grupo": "Os pilares da biblioteca",
    "dica": "Miguel de Cervantes. Já está a caminho pelo clube de leitura. Fique com esse volume se for integral e tiver uma tradução adequada; não compre outro sem comparar a edição.",
    "editoras_sugeridas": [],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": true,
    "integral": true
  },
  {
    "prioridade": 8,
    "titulo": "Memórias Póstumas de Brás Cubas",
    "autor": "Machado de Assis",
    "grupo": "Os pilares da biblioteca",
    "dica": "Machado de Assis. Antofágica, se houver edição comentada disponível; alternativa econômica: edição integral com notas.",
    "editoras_sugeridas": [
      "Antofágica"
    ],
    "candidato_luxo": true,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 9,
    "titulo": "Dom Casmurro",
    "autor": "Machado de Assis",
    "grupo": "Os pilares da biblioteca",
    "dica": "Machado de Assis. Mesma linha editorial de Memórias Póstumas, para criar um pequeno núcleo de Machado.",
    "editoras_sugeridas": [],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 10,
    "titulo": "Hamlet",
    "autor": "William Shakespeare",
    "grupo": "Os pilares da biblioteca",
    "dica": "William Shakespeare. Penguin-Companhia ou edição com tradução de Bárbara Heliodora, com notas e apresentação.",
    "editoras_sugeridas": [
      "Penguin-Companhia"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 11,
    "titulo": "Macbeth",
    "autor": "William Shakespeare",
    "grupo": "Os pilares da biblioteca",
    "dica": "William Shakespeare. Mesma linha de Hamlet, de preferência com notas sobre contexto e linguagem.",
    "editoras_sugeridas": [],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 12,
    "titulo": "Rei Lear",
    "autor": "William Shakespeare",
    "grupo": "Os pilares da biblioteca",
    "dica": "William Shakespeare. Mesma coleção dos outros Shakespeare.",
    "editoras_sugeridas": [],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 13,
    "titulo": "O Conde de Monte Cristo",
    "autor": "Alexandre Dumas",
    "grupo": "Os pilares da biblioteca",
    "dica": "Alexandre Dumas. Zahar ou Penguin-Companhia; integral, não uma adaptação juvenil.",
    "editoras_sugeridas": [
      "Zahar",
      "Penguin-Companhia"
    ],
    "candidato_luxo": true,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 14,
    "titulo": "1984",
    "autor": "George Orwell",
    "grupo": "Os pilares da biblioteca",
    "dica": "George Orwell. Companhia das Letras, edição integral.",
    "editoras_sugeridas": [
      "Companhia das Letras"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 15,
    "titulo": "Cem Anos de Solidão",
    "autor": "Gabriel García Márquez",
    "grupo": "Os pilares da biblioteca",
    "dica": "Gabriel García Márquez. Record, edição integral; vale escolher uma edição bem acabada para permanecer na estante.",
    "editoras_sugeridas": [
      "Record"
    ],
    "candidato_luxo": true,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 16,
    "titulo": "O Silmarillion",
    "autor": "J",
    "grupo": "Os pilares da biblioteca",
    "dica": "J. R. R. Tolkien. HarperCollins Brasil, combinando com a coleção Tolkien que você já tem. É uma das aquisições prioritárias para completar a história da Terra-média.",
    "editoras_sugeridas": [
      "HarperCollins Brasil"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 17,
    "titulo": "Orgulho e Preconceito",
    "autor": "Jane Austen",
    "grupo": "Os pilares da biblioteca",
    "dica": "Jane Austen. Zahar, se encontrar uma edição comentada; alternativa: Penguin-Companhia. Prefira tradução fluida, com notas quando disponíveis.",
    "editoras_sugeridas": [
      "Zahar",
      "Penguin-Companhia"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 18,
    "titulo": "Crime e Castigo",
    "autor": "Fiódor Dostoiévski",
    "grupo": "Os pilares da biblioteca",
    "dica": "Fiódor Dostoiévski. Editora 34, tradução de Paulo Bezerra. Como você já tem O Jogador, é uma boa ampliação do núcleo russo, não uma repetição.",
    "editoras_sugeridas": [
      "Editora 34"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 19,
    "titulo": "Os Irmãos Karamázov",
    "autor": "Fiódor Dostoiévski",
    "grupo": "Os pilares da biblioteca",
    "dica": "Fiódor Dostoiévski. Editora 34, tradução de Paulo Bezerra; reserve para quando estiver com vontade de um romance longo e denso.",
    "editoras_sugeridas": [
      "Editora 34"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 20,
    "titulo": "Guerra e Paz",
    "autor": "Liev Tolstói",
    "grupo": "Os pilares da biblioteca",
    "dica": "Liev Tolstói. Companhia das Letras, tradução de Rubens Figueiredo. Se possível, adquira os volumes de uma mesma edição.",
    "editoras_sugeridas": [
      "Companhia das Letras"
    ],
    "candidato_luxo": true,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 21,
    "titulo": "Anna Kariênina",
    "autor": "Liev Tolstói",
    "grupo": "Grandes romances e literatura em português",
    "dica": "Liev Tolstói. Companhia das Letras, tradução de Rubens Figueiredo; edição integral.",
    "editoras_sugeridas": [
      "Companhia das Letras"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 22,
    "titulo": "Os Miseráveis",
    "autor": "Victor Hugo",
    "grupo": "Grandes romances e literatura em português",
    "dica": "Victor Hugo. Edição integral, sem cortes; procure uma tradução legível e notas. Evite versões resumidas vendidas como se fossem o romance completo.",
    "editoras_sugeridas": [],
    "candidato_luxo": true,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 23,
    "titulo": "Grande Sertão: Veredas",
    "autor": "João Guimarães Rosa",
    "grupo": "Grandes romances e literatura em português",
    "dica": "João Guimarães Rosa. Nova Fronteira ou edição crítica confiável. Leia sem pressa: é uma obra para revisitar.",
    "editoras_sugeridas": [
      "Nova Fronteira"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 24,
    "titulo": "A Paixão Segundo G.H.",
    "autor": "Clarice Lispector",
    "grupo": "Grandes romances e literatura em português",
    "dica": "Clarice Lispector. Rocco; confira se já está no seu acervo antes de comprar.",
    "editoras_sugeridas": [
      "Rocco"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": true,
    "integral": false
  },
  {
    "prioridade": 25,
    "titulo": "Os Lusíadas",
    "autor": "Luís de Camões",
    "grupo": "Grandes romances e literatura em português",
    "dica": "Luís de Camões. Edição integral com notas, glossário e explicação dos episódios mitológicos.",
    "editoras_sugeridas": [],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 26,
    "titulo": "Livro do Desassossego",
    "autor": "Fernando Pessoa",
    "grupo": "Grandes romances e literatura em português",
    "dica": "Fernando Pessoa. Companhia das Letras, organização de Richard Zenith; confira qual edição e organização está comprando, pois o livro possui diferentes arranjos editoriais.",
    "editoras_sugeridas": [
      "Companhia das Letras"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 27,
    "titulo": "Ensaio sobre a Cegueira",
    "autor": "José Saramago",
    "grupo": "Grandes romances e literatura em português",
    "dica": "José Saramago. Companhia das Letras, edição integral.",
    "editoras_sugeridas": [
      "Companhia das Letras"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 28,
    "titulo": "Os Maias",
    "autor": "Eça de Queirós",
    "grupo": "Grandes romances e literatura em português",
    "dica": "Eça de Queirós. Edição integral e anotada; uma edição de obras completas pode valer a pena se quiser reunir outros títulos do autor.",
    "editoras_sugeridas": [],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 29,
    "titulo": "Quincas Borba",
    "autor": "Machado de Assis",
    "grupo": "Grandes romances e literatura em português",
    "dica": "Machado de Assis. Mesma linha de edição de Memórias Póstumas de Brás Cubas e Dom Casmurro.",
    "editoras_sugeridas": [],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 30,
    "titulo": "Contos (com O Alienista)",
    "autor": "Machado de Assis",
    "grupo": "Grandes romances e literatura em português",
    "dica": "Machado de Assis. Procure coletânea ampla, com textos integrais e organização clara; uma edição de contos comentada é especialmente útil.",
    "editoras_sugeridas": [],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 31,
    "titulo": "Laços de Família",
    "autor": "Clarice Lispector",
    "grupo": "Grandes romances e literatura em português",
    "dica": "Clarice Lispector. Rocco; confira o acervo atual antes da compra.",
    "editoras_sugeridas": [
      "Rocco"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": true,
    "integral": false
  },
  {
    "prioridade": 32,
    "titulo": "Sagarana",
    "autor": "João Guimarães Rosa",
    "grupo": "Grandes romances e literatura em português",
    "dica": "João Guimarães Rosa. Nova Fronteira, edição integral.",
    "editoras_sugeridas": [
      "Nova Fronteira"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 33,
    "titulo": "Antologia Poética",
    "autor": "Carlos Drummond de Andrade",
    "grupo": "Grandes romances e literatura em português",
    "dica": "Carlos Drummond de Andrade. Companhia das Letras ou edição de antologia organizada com critério e informações sobre os poemas.",
    "editoras_sugeridas": [
      "Companhia das Letras"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 34,
    "titulo": "Os Sertões",
    "autor": "Euclides da Cunha",
    "grupo": "Grandes romances e literatura em português",
    "dica": "Euclides da Cunha. Edição anotada e integral; procure uma edição crítica, com introdução histórica.",
    "editoras_sugeridas": [],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 35,
    "titulo": "Macunaíma",
    "autor": "Mário de Andrade",
    "grupo": "Grandes romances e literatura em português",
    "dica": "Mário de Andrade. Edição com notas explicativas sobre referências culturais e linguagem.",
    "editoras_sugeridas": [],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 36,
    "titulo": "São Bernardo",
    "autor": "Graciliano Ramos",
    "grupo": "Grandes romances e literatura em português",
    "dica": "Graciliano Ramos. Record ou edição integral bem estabelecida. Como você já possui obras de Graciliano, confira se este título específico já está na estante.",
    "editoras_sugeridas": [
      "Record"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": true,
    "integral": true
  },
  {
    "prioridade": 37,
    "titulo": "Capitães da Areia",
    "autor": "Jorge Amado",
    "grupo": "Grandes romances e literatura em português",
    "dica": "Jorge Amado. Companhia das Letras, edição integral.",
    "editoras_sugeridas": [
      "Companhia das Letras"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 38,
    "titulo": "Triste Fim de Policarpo Quaresma",
    "autor": "Lima Barreto",
    "grupo": "Grandes romances e literatura em português",
    "dica": "Lima Barreto. Edição integral com notas; uma edição comentada ajuda a situar a crítica social e política do romance.",
    "editoras_sugeridas": [],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 39,
    "titulo": "Gabriela, Cravo e Canela",
    "autor": "Jorge Amado",
    "grupo": "Grandes romances e literatura em português",
    "dica": "Jorge Amado. Companhia das Letras ou edição integral de boa qualidade.",
    "editoras_sugeridas": [
      "Companhia das Letras"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 40,
    "titulo": "O Tempo e o Vento: O Continente I",
    "autor": "Érico Veríssimo",
    "grupo": "Grandes romances e literatura em português",
    "dica": "Érico Veríssimo. Companhia das Letras, se a edição estiver disponível; procure manter a mesma editora e o mesmo projeto gráfico para os demais volumes da série.",
    "editoras_sugeridas": [
      "Companhia das Letras"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 41,
    "titulo": "Poesia",
    "autor": "Fernando Pessoa",
    "grupo": "Antiguidade, teatro e romance clássico",
    "dica": "Fernando Pessoa. Nova Aguilar ou edição ampla que reúna os heterônimos e a poesia ortônima; confira o conteúdo, porque antologias variam muito.",
    "editoras_sugeridas": [
      "Nova Aguilar"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 42,
    "titulo": "Memorial do Convento",
    "autor": "José Saramago",
    "grupo": "Antiguidade, teatro e romance clássico",
    "dica": "José Saramago. Companhia das Letras, edição integral.",
    "editoras_sugeridas": [
      "Companhia das Letras"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 43,
    "titulo": "O Primo Basílio",
    "autor": "Eça de Queirós",
    "grupo": "Antiguidade, teatro e romance clássico",
    "dica": "Eça de Queirós. Edição integral e anotada, de preferência combinando com Os Maias.",
    "editoras_sugeridas": [],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 44,
    "titulo": "Eneida",
    "autor": "Virgílio",
    "grupo": "Antiguidade, teatro e romance clássico",
    "dica": "Virgílio. Editora 34, tradução direta do latim e notas.",
    "editoras_sugeridas": [
      "Editora 34"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 45,
    "titulo": "Metamorfoses",
    "autor": "Ovídio",
    "grupo": "Antiguidade, teatro e romance clássico",
    "dica": "Ovídio. Editora 34, tradução integral; edição bilíngue se o orçamento e a disponibilidade permitirem.",
    "editoras_sugeridas": [
      "Editora 34"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 46,
    "titulo": "Trilogia Tebana",
    "autor": "Sófocles",
    "grupo": "Antiguidade, teatro e romance clássico",
    "dica": "Sófocles. Zahar, tradução de Mário da Gama Kury, se disponível; procure o conjunto que reúne Édipo Rei, Édipo em Colono e Antígona.",
    "editoras_sugeridas": [
      "Zahar"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 47,
    "titulo": "Oresteia",
    "autor": "Ésquilo",
    "grupo": "Antiguidade, teatro e romance clássico",
    "dica": "Ésquilo. Zahar, tradução de Mário da Gama Kury, ou outra edição integral com notas.",
    "editoras_sugeridas": [
      "Zahar"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 48,
    "titulo": "Fausto",
    "autor": "Johann Wolfgang von Goethe",
    "grupo": "Antiguidade, teatro e romance clássico",
    "dica": "Johann Wolfgang von Goethe. Editora 34, tradução de Jenny Klabin Segall; prefira uma edição com introdução e notas.",
    "editoras_sugeridas": [
      "Editora 34"
    ],
    "candidato_luxo": true,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 49,
    "titulo": "Paraíso Perdido",
    "autor": "John Milton",
    "grupo": "Antiguidade, teatro e romance clássico",
    "dica": "John Milton. Editora 34 ou edição integral com notas que ajudem a acompanhar as referências bíblicas e clássicas.",
    "editoras_sugeridas": [
      "Editora 34"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 50,
    "titulo": "Fábulas",
    "autor": "Esopo",
    "grupo": "Antiguidade, teatro e romance clássico",
    "dica": "Esopo. Edição ampla e bem organizada; para o caráter familiar da biblioteca, uma versão ilustrada pode ser especialmente interessante.",
    "editoras_sugeridas": [],
    "candidato_luxo": true,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 51,
    "titulo": "Otelo",
    "autor": "William Shakespeare",
    "grupo": "Antiguidade, teatro e romance clássico",
    "dica": "William Shakespeare. Mesma coleção e tradutor escolhidos para Hamlet e Macbeth.",
    "editoras_sugeridas": [],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 52,
    "titulo": "Romeu e Julieta",
    "autor": "William Shakespeare",
    "grupo": "Antiguidade, teatro e romance clássico",
    "dica": "William Shakespeare. Edição com notas; excelente título para manter acessível aos leitores mais jovens, quando tiverem maturidade para o texto.",
    "editoras_sugeridas": [],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 53,
    "titulo": "Sonho de uma Noite de Verão",
    "autor": "William Shakespeare",
    "grupo": "Antiguidade, teatro e romance clássico",
    "dica": "William Shakespeare. Mesma coleção dos outros Shakespeare; pode funcionar como leitura mais leve entre tragédias.",
    "editoras_sugeridas": [],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 54,
    "titulo": "A Tempestade",
    "autor": "William Shakespeare",
    "grupo": "Antiguidade, teatro e romance clássico",
    "dica": "William Shakespeare. Mesma coleção, com notas sobre as ambiguidades da peça.",
    "editoras_sugeridas": [],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 55,
    "titulo": "Grandes Esperanças",
    "autor": "Charles Dickens",
    "grupo": "Antiguidade, teatro e romance clássico",
    "dica": "Charles Dickens. Penguin-Companhia ou Zahar, integral.",
    "editoras_sugeridas": [
      "Zahar",
      "Penguin-Companhia"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 56,
    "titulo": "Oliver Twist",
    "autor": "Charles Dickens",
    "grupo": "Antiguidade, teatro e romance clássico",
    "dica": "Charles Dickens. Zahar ou Penguin-Companhia; prefira edição integral.",
    "editoras_sugeridas": [
      "Zahar",
      "Penguin-Companhia"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 57,
    "titulo": "David Copperfield",
    "autor": "Charles Dickens",
    "grupo": "Antiguidade, teatro e romance clássico",
    "dica": "Charles Dickens. Zahar ou Penguin-Companhia; romance extenso, ideal para compra planejada.",
    "editoras_sugeridas": [
      "Zahar",
      "Penguin-Companhia"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 58,
    "titulo": "O Morro dos Ventos Uivantes",
    "autor": "Emily Brontë",
    "grupo": "Antiguidade, teatro e romance clássico",
    "dica": "Emily Brontë. Zahar ou DarkSide Classic Edition, conforme a tradução e o acabamento.",
    "editoras_sugeridas": [
      "Zahar",
      "DarkSide Classic Edition"
    ],
    "candidato_luxo": true,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 59,
    "titulo": "Jane Eyre",
    "autor": "Charlotte Brontë",
    "grupo": "Antiguidade, teatro e romance clássico",
    "dica": "Charlotte Brontë. Zahar ou Penguin-Companhia, edição integral.",
    "editoras_sugeridas": [
      "Zahar",
      "Penguin-Companhia"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 60,
    "titulo": "Razão e Sensibilidade",
    "autor": "Jane Austen",
    "grupo": "Antiguidade, teatro e romance clássico",
    "dica": "Jane Austen. Zahar, de preferência na mesma linha de Orgulho e Preconceito.",
    "editoras_sugeridas": [
      "Zahar"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 61,
    "titulo": "Tess dos D'Urbervilles",
    "autor": "Thomas Hardy",
    "grupo": "Do século XIX à literatura moderna",
    "dica": "Thomas Hardy. Penguin-Companhia ou edição integral anotada.",
    "editoras_sugeridas": [
      "Penguin-Companhia"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 62,
    "titulo": "Madame Bovary",
    "autor": "Gustave Flaubert",
    "grupo": "Do século XIX à literatura moderna",
    "dica": "Gustave Flaubert. Penguin-Companhia, tradução de Mario Laranjeira, se disponível nessa edição.",
    "editoras_sugeridas": [
      "Penguin-Companhia"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 63,
    "titulo": "O Corcunda de Notre-Dame",
    "autor": "Victor Hugo",
    "grupo": "Do século XIX à literatura moderna",
    "dica": "Victor Hugo. Edição integral; confira se o título é o romance completo, não uma adaptação.",
    "editoras_sugeridas": [],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 64,
    "titulo": "Os Três Mosqueteiros",
    "autor": "Alexandre Dumas",
    "grupo": "Do século XIX à literatura moderna",
    "dica": "Alexandre Dumas. Zahar ou Penguin-Companhia, integral. Boa companhia para O Conde de Monte Cristo.",
    "editoras_sugeridas": [
      "Zahar",
      "Penguin-Companhia"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 65,
    "titulo": "Huckleberry Finn",
    "autor": "Mark Twain",
    "grupo": "Do século XIX à literatura moderna",
    "dica": "Mark Twain. Zahar ou Penguin-Companhia, com notas sobre contexto histórico e linguagem.",
    "editoras_sugeridas": [
      "Zahar",
      "Penguin-Companhia"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 66,
    "titulo": "Moby Dick",
    "autor": "Herman Melville",
    "grupo": "Do século XIX à literatura moderna",
    "dica": "Herman Melville. Edição integral e anotada; uma edição ilustrada especial pode valer o investimento.",
    "editoras_sugeridas": [],
    "candidato_luxo": true,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 67,
    "titulo": "O Grande Gatsby",
    "autor": "F",
    "grupo": "Do século XIX à literatura moderna",
    "dica": "F. Scott Fitzgerald. Companhia das Letras ou edição integral com notas.",
    "editoras_sugeridas": [
      "Companhia das Letras"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 68,
    "titulo": "O Velho e o Mar",
    "autor": "Ernest Hemingway",
    "grupo": "Do século XIX à literatura moderna",
    "dica": "Ernest Hemingway. Bertrand Brasil ou edição integral de boa qualidade; volume curto, acessível e ótimo para alternar com romances longos.",
    "editoras_sugeridas": [
      "Bertrand Brasil"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 69,
    "titulo": "As Vinhas da Ira",
    "autor": "John Steinbeck",
    "grupo": "Do século XIX à literatura moderna",
    "dica": "John Steinbeck. Record, edição integral.",
    "editoras_sugeridas": [
      "Record"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 70,
    "titulo": "O Sol é para Todos",
    "autor": "Harper Lee",
    "grupo": "Do século XIX à literatura moderna",
    "dica": "Harper Lee. José Olympio ou edição integral atual; confira a edição e o acabamento antes de comprar.",
    "editoras_sugeridas": [
      "José Olympio"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 71,
    "titulo": "O Apanhador no Campo de Centeio",
    "autor": "J",
    "grupo": "Do século XIX à literatura moderna",
    "dica": "J. D. Salinger. Todavia ou edição integral equivalente.",
    "editoras_sugeridas": [
      "Todavia"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 72,
    "titulo": "O Processo",
    "autor": "Franz Kafka",
    "grupo": "Do século XIX à literatura moderna",
    "dica": "Franz Kafka. Companhia das Letras, tradução de Modesto Carone, referência importante para preservar a precisão do texto.",
    "editoras_sugeridas": [
      "Companhia das Letras"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 73,
    "titulo": "O Estrangeiro",
    "autor": "Albert Camus",
    "grupo": "Do século XIX à literatura moderna",
    "dica": "Albert Camus. Record ou edição integral de tradução confiável.",
    "editoras_sugeridas": [
      "Record"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 74,
    "titulo": "A Peste",
    "autor": "Albert Camus",
    "grupo": "Do século XIX à literatura moderna",
    "dica": "Albert Camus. Record ou edição integral; vale manter o mesmo padrão editorial de O Estrangeiro.",
    "editoras_sugeridas": [
      "Record"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 75,
    "titulo": "Ficções",
    "autor": "Jorge Luis Borges",
    "grupo": "Do século XIX à literatura moderna",
    "dica": "Jorge Luis Borges. Companhia das Letras ou edição integral da coletânea, com apresentação crítica.",
    "editoras_sugeridas": [
      "Companhia das Letras"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 76,
    "titulo": "Sidarta",
    "autor": "Hermann Hesse",
    "grupo": "Do século XIX à literatura moderna",
    "dica": "Hermann Hesse. Record ou edição integral bem estabelecida.",
    "editoras_sugeridas": [
      "Record"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 77,
    "titulo": "Mrs. Dalloway",
    "autor": "Virginia Woolf",
    "grupo": "Do século XIX à literatura moderna",
    "dica": "Virginia Woolf. Autêntica ou Companhia das Letras; escolha tradução que preserve o fluxo de consciência sem tornar a leitura desnecessariamente opaca.",
    "editoras_sugeridas": [
      "Companhia das Letras",
      "Autêntica"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 78,
    "titulo": "O Amor nos Tempos do Cólera",
    "autor": "Gabriel García Márquez",
    "grupo": "Do século XIX à literatura moderna",
    "dica": "Gabriel García Márquez. Record, edição integral.",
    "editoras_sugeridas": [
      "Record"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 79,
    "titulo": "A Montanha Mágica",
    "autor": "Thomas Mann",
    "grupo": "Do século XIX à literatura moderna",
    "dica": "Thomas Mann. Companhia das Letras, tradução de Herbert Caro, se disponível na edição escolhida.",
    "editoras_sugeridas": [
      "Companhia das Letras"
    ],
    "candidato_luxo": true,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 80,
    "titulo": "Um Conto de Natal",
    "autor": "Charles Dickens",
    "grupo": "Do século XIX à literatura moderna",
    "dica": "Charles Dickens. DarkSide Classic Edition ou edição ilustrada integral. É uma ótima candidata a presente de fim de ano e leitura compartilhada.",
    "editoras_sugeridas": [
      "DarkSide Classic Edition"
    ],
    "candidato_luxo": true,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 81,
    "titulo": "Um Estudo em Vermelho",
    "autor": "Arthur Conan Doyle",
    "grupo": "Mistério, suspense e terror",
    "dica": "Arthur Conan Doyle. Zahar, edição comentada de Sherlock Holmes, se disponível. Confira antes se já tem esse título em alguma coletânea.",
    "editoras_sugeridas": [
      "Zahar"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 82,
    "titulo": "O Cão dos Baskervilles",
    "autor": "Arthur Conan Doyle",
    "grupo": "Mistério, suspense e terror",
    "dica": "Arthur Conan Doyle. Zahar ou edição integral da mesma coleção de Sherlock Holmes.",
    "editoras_sugeridas": [
      "Zahar"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 83,
    "titulo": "O Signo dos Quatro",
    "autor": "Arthur Conan Doyle",
    "grupo": "Mistério, suspense e terror",
    "dica": "Arthur Conan Doyle. Mesma coleção de Sherlock Holmes, para manter a unidade visual.",
    "editoras_sugeridas": [],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 84,
    "titulo": "O Assassinato de Roger Ackroyd",
    "autor": "Agatha Christie",
    "grupo": "Mistério, suspense e terror",
    "dica": "Agatha Christie. HarperCollins Brasil; confira o acervo antes de comprar.",
    "editoras_sugeridas": [
      "HarperCollins Brasil"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": true,
    "integral": false
  },
  {
    "prioridade": 85,
    "titulo": "Cartas na Mesa",
    "autor": "Agatha Christie",
    "grupo": "Mistério, suspense e terror",
    "dica": "Agatha Christie. HarperCollins Brasil; compre apenas se ainda não fizer parte da sua coleção.",
    "editoras_sugeridas": [
      "HarperCollins Brasil"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 86,
    "titulo": "Convite para um Homicídio",
    "autor": "Agatha Christie",
    "grupo": "Mistério, suspense e terror",
    "dica": "Agatha Christie. HarperCollins Brasil; mesma recomendação de conferir a estante primeiro.",
    "editoras_sugeridas": [
      "HarperCollins Brasil"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 87,
    "titulo": "Contos de Imaginação e Mistério",
    "autor": "Edgar Allan Poe",
    "grupo": "Mistério, suspense e terror",
    "dica": "Edgar Allan Poe. DarkSide, coleção Medo Clássico, se a edição e a tradução forem adequadas.",
    "editoras_sugeridas": [
      "DarkSide"
    ],
    "candidato_luxo": true,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 88,
    "titulo": "O Sono Eterno",
    "autor": "Raymond Chandler",
    "grupo": "Mistério, suspense e terror",
    "dica": "Raymond Chandler. Companhia das Letras ou edição integral de tradução confiável.",
    "editoras_sugeridas": [
      "Companhia das Letras"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 89,
    "titulo": "O Talentoso Ripley",
    "autor": "Patricia Highsmith",
    "grupo": "Mistério, suspense e terror",
    "dica": "Patricia Highsmith. Intrínseca, se disponível em edição atual; confira tradução e integridade do texto.",
    "editoras_sugeridas": [
      "Intrínseca"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 90,
    "titulo": "Rebecca",
    "autor": "Daphne du Maurier",
    "grupo": "Mistério, suspense e terror",
    "dica": "Daphne du Maurier. Companhia das Letras ou edição integral de boa qualidade.",
    "editoras_sugeridas": [
      "Companhia das Letras"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 91,
    "titulo": "O Iluminado",
    "autor": "Stephen King",
    "grupo": "Mistério, suspense e terror",
    "dica": "Stephen King. Suma, mantendo a mesma linha editorial dos demais livros do autor.",
    "editoras_sugeridas": [
      "Suma"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 92,
    "titulo": "It: A Coisa",
    "autor": "Stephen King",
    "grupo": "Mistério, suspense e terror",
    "dica": "Stephen King. Suma, edição integral; é um volume longo, então pode esperar uma oportunidade de compra.",
    "editoras_sugeridas": [
      "Suma"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 93,
    "titulo": "Cemitério Maldito",
    "autor": "Stephen King",
    "grupo": "Mistério, suspense e terror",
    "dica": "Stephen King. Suma, mesma coleção dos outros King.",
    "editoras_sugeridas": [
      "Suma"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 94,
    "titulo": "A Assombração da Casa da Colina",
    "autor": "Shirley Jackson",
    "grupo": "Mistério, suspense e terror",
    "dica": "Shirley Jackson. Suma ou edição integral equivalente.",
    "editoras_sugeridas": [
      "Suma"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 95,
    "titulo": "Medo Clássico",
    "autor": "H",
    "grupo": "Mistério, suspense e terror",
    "dica": "H. P. Lovecraft. DarkSide; confira quais contos estão incluídos no volume específico, porque a seleção pode variar.",
    "editoras_sugeridas": [
      "DarkSide"
    ],
    "candidato_luxo": true,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 96,
    "titulo": "O Bebê de Rosemary",
    "autor": "Ira Levin",
    "grupo": "Mistério, suspense e terror",
    "dica": "Ira Levin. DarkSide, se houver edição atual adequada; alternativa: edição integral de outra editora.",
    "editoras_sugeridas": [
      "DarkSide"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 97,
    "titulo": "O Espião que Saiu do Frio",
    "autor": "John le Carré",
    "grupo": "Mistério, suspense e terror",
    "dica": "John le Carré. Record ou Companhia das Letras, edição integral.",
    "editoras_sugeridas": [
      "Companhia das Letras",
      "Record"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 98,
    "titulo": "O Homem que Era Quinta-Feira",
    "autor": "G",
    "grupo": "Mistério, suspense e terror",
    "dica": "G. K. Chesterton. Ecclesiae ou edição integral equivalente; confira tradução e revisão.",
    "editoras_sugeridas": [
      "Ecclesiae"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 99,
    "titulo": "O Nome da Rosa",
    "autor": "Umberto Eco",
    "grupo": "Mistério, suspense e terror",
    "dica": "Umberto Eco. Record, edição integral.",
    "editoras_sugeridas": [
      "Record"
    ],
    "candidato_luxo": true,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 100,
    "titulo": "O Médico e o Monstro",
    "autor": "Robert Louis Stevenson",
    "grupo": "Mistério, suspense e terror",
    "dica": "Robert Louis Stevenson. DarkSide Classic Edition ou outra edição integral com introdução e notas.",
    "editoras_sugeridas": [
      "DarkSide Classic Edition"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 101,
    "titulo": "Contos Inacabados",
    "autor": "J",
    "grupo": "Fantasia, ficção científica, mitologia e ideias",
    "dica": "J. R. R. Tolkien. HarperCollins Brasil, combinando com os volumes Tolkien que você já possui. Compra prioritária depois de O Silmarillion.",
    "editoras_sugeridas": [
      "HarperCollins Brasil"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": true,
    "integral": false
  },
  {
    "prioridade": 102,
    "titulo": "Um Mago de Terramar",
    "autor": "Ursula K",
    "grupo": "Fantasia, ficção científica, mitologia e ideias",
    "dica": "Ursula K. Le Guin. Aleph ou Arqueiro; escolha a edição cuja disponibilidade permita continuar a série com a mesma editora.",
    "editoras_sugeridas": [
      "Aleph",
      "Arqueiro"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 103,
    "titulo": "Deuses Americanos",
    "autor": "Neil Gaiman",
    "grupo": "Fantasia, ficção científica, mitologia e ideias",
    "dica": "Neil Gaiman. Intrínseca, edição integral.",
    "editoras_sugeridas": [
      "Intrínseca"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 104,
    "titulo": "Guardas! Guardas!",
    "autor": "Terry Pratchett",
    "grupo": "Fantasia, ficção científica, mitologia e ideias",
    "dica": "Terry Pratchett. Procure edição integral e, se possível, mantenha a mesma editora nos demais livros do universo Discworld.",
    "editoras_sugeridas": [],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 105,
    "titulo": "Fundação",
    "autor": "Isaac Asimov",
    "grupo": "Fantasia, ficção científica, mitologia e ideias",
    "dica": "Isaac Asimov. Aleph, preferindo uma edição que permita dar continuidade à série com lombadas compatíveis.",
    "editoras_sugeridas": [
      "Aleph"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 106,
    "titulo": "Duna",
    "autor": "Frank Herbert",
    "grupo": "Fantasia, ficção científica, mitologia e ideias",
    "dica": "Frank Herbert. Aleph, edição integral; vale escolher uma linha que mantenha a uniformidade dos volumes seguintes.",
    "editoras_sugeridas": [
      "Aleph"
    ],
    "candidato_luxo": true,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 107,
    "titulo": "Eu, Robô",
    "autor": "Isaac Asimov",
    "grupo": "Fantasia, ficção científica, mitologia e ideias",
    "dica": "Isaac Asimov. Aleph, de preferência na mesma linha editorial de Fundação.",
    "editoras_sugeridas": [
      "Aleph"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 108,
    "titulo": "O Homem do Castelo Alto",
    "autor": "Philip K",
    "grupo": "Fantasia, ficção científica, mitologia e ideias",
    "dica": "Philip K. Dick. Aleph, edição integral.",
    "editoras_sugeridas": [
      "Aleph"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 109,
    "titulo": "Admirável Mundo Novo",
    "autor": "Aldous Huxley",
    "grupo": "Fantasia, ficção científica, mitologia e ideias",
    "dica": "Aldous Huxley. Biblioteca Azul ou Aleph; compare tradução e acabamento.",
    "editoras_sugeridas": [
      "Biblioteca Azul",
      "Aleph"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 110,
    "titulo": "Fahrenheit 451",
    "autor": "Ray Bradbury",
    "grupo": "Fantasia, ficção científica, mitologia e ideias",
    "dica": "Ray Bradbury. Biblioteca Azul ou edição integral equivalente.",
    "editoras_sugeridas": [
      "Biblioteca Azul"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 111,
    "titulo": "A História Sem Fim",
    "autor": "Michael Ende",
    "grupo": "Fantasia, ficção científica, mitologia e ideias",
    "dica": "Michael Ende. Martins Fontes ou edição integral atual; uma edição bem cuidada é ótima para a dimensão familiar da biblioteca.",
    "editoras_sugeridas": [
      "Martins Fontes"
    ],
    "candidato_luxo": true,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 112,
    "titulo": "A Bússola de Ouro",
    "autor": "Philip Pullman",
    "grupo": "Fantasia, ficção científica, mitologia e ideias",
    "dica": "Philip Pullman. Procure a edição disponível de Fronteiras do Universo e planeje os volumes seguintes com a mesma editora, para evitar uma série incompleta.",
    "editoras_sugeridas": [],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 113,
    "titulo": "Mitologia",
    "autor": "Edith Hamilton",
    "grupo": "Fantasia, ficção científica, mitologia e ideias",
    "dica": "Edith Hamilton. Edição integral com notas; uma edição de capa dura é um bom investimento para consulta recorrente.",
    "editoras_sugeridas": [],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 114,
    "titulo": "O Livro de Ouro da Mitologia",
    "autor": "Thomas Bulfinch",
    "grupo": "Fantasia, ficção científica, mitologia e ideias",
    "dica": "Thomas Bulfinch. Procure edição integral, com boa revisão e, se possível, ilustrações.",
    "editoras_sugeridas": [],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 115,
    "titulo": "Os Mitos Gregos",
    "autor": "Robert Graves",
    "grupo": "Fantasia, ficção científica, mitologia e ideias",
    "dica": "Robert Graves. Edição integral; confira a tradução, a organização e se o volume não é uma seleção abreviada.",
    "editoras_sugeridas": [],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 116,
    "titulo": "O Herói de Mil Faces",
    "autor": "Joseph Campbell",
    "grupo": "Fantasia, ficção científica, mitologia e ideias",
    "dica": "Joseph Campbell. Pensamento ou edição integral equivalente; vale buscar uma edição com apresentação e notas.",
    "editoras_sugeridas": [
      "Pensamento"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 117,
    "titulo": "Cartas de um Diabo a Seu Aprendiz",
    "autor": "C",
    "grupo": "Fantasia, ficção científica, mitologia e ideias",
    "dica": "C. S. Lewis. Thomas Nelson ou Martins Fontes; compare tradução e acabamento.",
    "editoras_sugeridas": [
      "Martins Fontes",
      "Thomas Nelson"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 118,
    "titulo": "Em Busca de Sentido",
    "autor": "Viktor Frankl",
    "grupo": "Fantasia, ficção científica, mitologia e ideias",
    "dica": "Viktor Frankl. Vozes ou edição integral atual. Um livro que pode ganhar significado diferente em cada etapa da vida.",
    "editoras_sugeridas": [
      "Vozes"
    ],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": true
  },
  {
    "prioridade": 119,
    "titulo": "Reinações de Narizinho",
    "autor": "Monteiro Lobato",
    "grupo": "Fantasia, ficção científica, mitologia e ideias",
    "dica": "Monteiro Lobato. Procure edição ampla, ilustrada e bem revisada, verificando se reúne o texto pretendido. Para uma biblioteca de família, é uma boa oportunidade de escolher uma edição que convide à leitura em voz alta.",
    "editoras_sugeridas": [],
    "candidato_luxo": true,
    "ja_possui_ou_verificar": false,
    "integral": false
  },
  {
    "prioridade": 120,
    "titulo": "Vaga livre",
    "autor": "",
    "grupo": "Fantasia, ficção científica, mitologia e ideias",
    "dica": "mantenha sem preencher por enquanto. A vaga é parte do projeto: pode receber um livro escolhido pelo seu filho, uma obra que venha a marcar a família ou um título que se revele indispensável no futuro.",
    "editoras_sugeridas": [],
    "candidato_luxo": false,
    "ja_possui_ou_verificar": false,
    "integral": false
  }
];

const HERANCA_FASE1_GRUPOS = [
  { range: [1, 20], nome: "Os pilares da biblioteca", icone: "🏛️" },
  { range: [21, 40], nome: "Grandes romances e literatura em português", icone: "📜" },
  { range: [41, 60], nome: "Antiguidade, teatro e romance clássico", icone: "🎭" },
  { range: [61, 80], nome: "Do século XIX à literatura moderna", icone: "⏳" },
  { range: [81, 100], nome: "Mistério, suspense e terror", icone: "🕯️" },
  { range: [101, 120], nome: "Fantasia, ficção científica, mitologia e ideias", icone: "✨" }
];

const HERANCA_REGRAS_COMPRA = [
  { titulo: "Compre em pares", texto: "Alterne um livro-pilar mais denso com outro de leitura mais fluida e convidativa." },
  { titulo: "Uma edição especial por ano", texto: "Priorize edições de luxo (★) para os grandes pilares permanentes da família." },
  { titulo: "Complete os conjuntos", texto: "Mantenha a mesma editora e padrão gráfico para coleções (Tolkien, Shakespeare, Sherlock)." },
  { titulo: "Confira o acervo existente", texto: "Verifique a estante antes de comprar obras marcadas com (✓)." },
  { titulo: "Priorize o conteúdo", texto: "Tradução confiável, texto integral sem cortes e bom aparato crítico superam apenas uma capa bonita." }
];

function normalizeHerancaText(s) {
    return (s || '')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]/g, '');
}

/**
 * Busca a dica de curadoria e prioridade de compra para uma obra da Fase I
 * @param {string} title Título da obra
 * @param {string} authors Autor da obra
 * @returns {object|null} Dados da dica ou null
 */
function getHerancaFase1Dica(title, authors) {
    if (!title) return null;
    const normT = normalizeHerancaText(title);
    const normA = normalizeHerancaText(authors || '');

    // 1. Mapeamento direto e casos específicos
    for (const item of HERANCA_FASE1_DICAS) {
        const normItemT = normalizeHerancaText(item.titulo);
        if (normT === normItemT) return item;

        if (normItemT === 'biblia' && normT.includes('biblia')) return item;
        if (normItemT === 'inferno' && normT.includes('inferno')) return item;
        if (normItemT === 'purgatorio' && normT.includes('purgatorio')) return item;
        if (normItemT === 'paraiso' && normT.includes('paraiso')) return item;
        if (normItemT === 'domquixote' && normT.includes('domquixote')) return item;
        if (normItemT.includes('alienista') && normT.includes('alienista')) return item;
        if (normItemT.includes('continente') && normT.includes('continente')) return item;
        if (normItemT.includes('huckleberryfinn') && normT.includes('huckleberryfinn')) return item;
        if (normItemT.includes('trilogiatebana') && normT.includes('trilogiatebana')) return item;
        if (normItemT.includes('medoclassico') && normT.includes('medoclassico')) return item;
        if (normItemT === 'poesia' && normT.includes('poesia') && (normA.includes('pessoa') || normT.includes('pessoa'))) return item;
    }

    // 2. Mapeamento por substring
    for (const item of HERANCA_FASE1_DICAS) {
        const normItemT = normalizeHerancaText(item.titulo);
        if (normItemT.length >= 5 && (normT.includes(normItemT) || normItemT.includes(normT))) {
            return item;
        }
    }

    return null;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        HERANCA_FASE1_DICAS,
        HERANCA_FASE1_GRUPOS,
        HERANCA_REGRAS_COMPRA,
        getHerancaFase1Dica
    };
}
