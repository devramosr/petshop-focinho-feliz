// Troque estes dados para adaptar o site a outro cliente.
// O site tem duas versões: português (endereço /) e inglês (endereço /en/).
//  - Dados iguais nos dois idiomas: `negocio`, `site` e os preços.
//  - Textos: dentro de `pt:` e `en:` (em cada porte, serviço, diferencial e depoimento) e em `conteudo.pt` / `conteudo.en`.

export const negocio = {
  nome: 'Focinho Feliz',
  cidade: 'Tatuapé, São Paulo',
  endereco: 'Rua Tuiuti, 1234 – Tatuapé, São Paulo – SP',
  whatsapp: '5511999999999', // DDI + DDD + número, só dígitos
  whatsappTexto: '(11) 99999-9999',
  instagram: '@focinhofeliz',
}

// Endereço final do site (ex.: 'https://focinho-feliz.vercel.app'), sem barra no fim.
// Com ele preenchido, o build inclui link canônico, hreflang, imagem de prévia e sitemap.
export const site = { url: '' }

// Portes: o preço de cada serviço muda conforme o porte do pet (p = pequeno, m = médio, g = grande).
export const portes = [
  { id: 'p', pt: { nome: 'Pequeno', faixa: 'até 10 kg' }, en: { nome: 'Small', faixa: 'up to 10 kg' } },
  { id: 'm', pt: { nome: 'Médio', faixa: '10 a 25 kg' }, en: { nome: 'Medium', faixa: '10 to 25 kg' } },
  { id: 'g', pt: { nome: 'Grande', faixa: 'acima de 25 kg' }, en: { nome: 'Large', faixa: 'over 25 kg' } },
]

export const servicos = [
  { id: 'banho', precos: { p: 45, m: 65, g: 90 }, pt: { nome: 'Banho', desc: 'Shampoo adequado ao pelo, secagem e perfume.', tempo: '1 h' }, en: { nome: 'Bath', desc: 'Coat-appropriate shampoo, drying and perfume.', tempo: '1 h' } },
  { id: 'tosa-higienica', precos: { p: 30, m: 40, g: 55 }, pt: { nome: 'Tosa higiênica', desc: 'Patinhas, barriga e região íntima, para mais conforto.', tempo: '30 min' }, en: { nome: 'Hygienic trim', desc: 'Paws, belly and private areas, for extra comfort.', tempo: '30 min' } },
  { id: 'combo', destaque: true, precos: { p: 80, m: 110, g: 150 }, pt: { nome: 'Banho + tosa', desc: 'O pacote completo, com tosa na máquina ou na tesoura.', tempo: '1 h 30' }, en: { nome: 'Bath + grooming', desc: 'The full package, with clipper or scissor trim.', tempo: '1 h 30 min' } },
  { id: 'hidratacao', precos: { p: 25, m: 35, g: 45 }, pt: { nome: 'Hidratação', desc: 'Pelo macio e brilhante, ideal para pelagens secas.', tempo: '20 min' }, en: { nome: 'Coat conditioning', desc: 'Soft, shiny coat, great for dry fur.', tempo: '20 min' } },
  { id: 'unhas', precos: { p: 15, m: 15, g: 20 }, pt: { nome: 'Corte de unhas', desc: 'Feito com carinho, com lixa no acabamento.', tempo: '10 min' }, en: { nome: 'Nail trim', desc: 'Done gently, finished with a file.', tempo: '10 min' } },
  { id: 'leva-e-traz', precos: { p: 20, m: 20, g: 20 }, pt: { nome: 'Leva e traz', desc: 'Buscamos e levamos seu pet em casa (Tatuapé e arredores).', tempo: 'no dia' }, en: { nome: 'Pick-up and drop-off', desc: 'We collect and return your pet at home (Tatuapé and nearby).', tempo: 'same day' } },
]

export const diferenciais = [
  { pt: { t: 'Atendimento individual', d: 'Um pet por vez, sem gaiolas e sem pressa.' }, en: { t: 'One-on-one care', d: 'One pet at a time, no cages and no rush.' } },
  { pt: { t: 'Produtos suaves', d: 'Shampoos hipoalergênicos e secagem em temperatura baixa.' }, en: { t: 'Gentle products', d: 'Hypoallergenic shampoos and low-heat drying.' } },
  { pt: { t: 'Foto no final', d: 'Você recebe no WhatsApp uma foto do seu pet pronto.' }, en: { t: 'A photo at the end', d: 'You get a photo of your freshly groomed pet on WhatsApp.' } },
]

export const depoimentos = [
  { nome: 'Marina, tutora da Pipoca', pt: 'A Pipoca sempre volta cheirosa e tranquila. Agendar pelo WhatsApp é muito prático.', en: 'Pipoca always comes back fresh and relaxed. Booking on WhatsApp is so easy.' },
  { nome: 'Carlos, tutor do Thor', pt: 'Meu cachorro é grande e nervoso, e aqui ele é tratado com paciência. Recomendo.', en: 'My dog is big and nervous, and here he is treated with patience. Highly recommend.' },
  { nome: 'Júlia, tutora da Mel', pt: 'A foto no final é o meu momento favorito. Equipe super carinhosa!', en: 'The photo at the end is my favorite part. A super caring team!' },
]

export const horarios = [
  { pt: { dia: 'Segunda a sexta', hora: '08h – 18h' }, en: { dia: 'Monday to Friday', hora: '8 am – 6 pm' } },
  { pt: { dia: 'Sábado', hora: '08h – 16h' }, en: { dia: 'Saturday', hora: '8 am – 4 pm' } },
  { pt: { dia: 'Domingo', hora: 'Fechado' }, en: { dia: 'Sunday', hora: 'Closed' } },
]

export const conteudo = {
  pt: {
    meta: {
      titulo: 'Focinho Feliz · Banho e tosa no Tatuapé, São Paulo',
      descricao: 'Banho, tosa e cuidados para cães e gatos no Tatuapé, São Paulo. Veja os preços por porte e agende pelo WhatsApp. Site de demonstração com dados fictícios.',
      descricaoCurta: 'Banho e tosa com carinho, no horário que combina com você. Site de demonstração.',
      locale: 'pt_BR',
      hreflang: 'pt-BR',
    },
    ui: {
      moeda: 'pt-BR',
      navAria: 'Principal',
      idiomaAria: 'Idioma',
      nav: { servicos: 'Serviços', agendar: 'Agendar', contato: 'Contato' },
      eyebrow: 'Banho e tosa em',
      titulo: 'Seu pet limpinho, feliz e bem cuidado.',
      lead: 'Banho, tosa e carinho de sobra, com hora marcada e atendimento individual. Veja os preços pelo porte do seu pet e agende em um toque pelo WhatsApp.',
      btnAgendar: 'Agendar banho',
      btnPrecos: 'Ver preços',
      servicosTitulo: 'Serviços e preços',
      porteTitulo: 'Qual é o porte do seu pet?',
      porteAria: 'Porte do pet',
      selo: 'Mais pedido',
      agendarTitulo: 'Monte o agendamento',
      agendarLead: 'Escolha os serviços e conte o nome do seu pet. A mensagem já sai pronta no WhatsApp.',
      servicosLegenda: 'Serviços',
      labelPet: 'Nome do pet',
      placeholderPet: 'Como ele se chama?',
      porteLabel: 'Porte',
      total: 'Total',
      btnWhats: 'Agendar pelo WhatsApp',
      depoimentosTitulo: 'Quem confia na gente',
      ondeTitulo: 'Onde estamos',
      horariosTitulo: 'Horários',
      msgComServicos: 'Olá! Quero agendar para {pet} (porte {porte}): {servicos} (total {total}). Quais horários vocês têm?',
      msgSemServicos: 'Olá! Quero agendar um horário para {pet} (porte {porte}). Quais horários vocês têm?',
      msgPetPadrao: 'o meu pet',
      msgOla: 'Olá!',
      demo: 'Site de demonstração com dados fictícios.',
    },
  },
  en: {
    meta: {
      titulo: 'Focinho Feliz · Pet grooming in Tatuapé, São Paulo',
      descricao: 'Bathing, grooming and care for dogs and cats in Tatuapé, São Paulo. See prices by pet size and book on WhatsApp. Demo site with fictional data.',
      descricaoCurta: 'Loving pet grooming, at a time that suits you. Demo site.',
      locale: 'en_US',
      hreflang: 'en',
    },
    ui: {
      moeda: 'en-US',
      navAria: 'Main',
      idiomaAria: 'Language',
      nav: { servicos: 'Services', agendar: 'Book', contato: 'Contact' },
      eyebrow: 'Pet grooming in',
      titulo: 'A clean, happy and well-cared-for pet.',
      lead: 'Bathing, grooming and plenty of love, by appointment and one-on-one. See prices by your pet’s size and book in one tap on WhatsApp.',
      btnAgendar: 'Book a bath',
      btnPrecos: 'See prices',
      servicosTitulo: 'Services and prices',
      porteTitulo: 'What size is your pet?',
      porteAria: 'Pet size',
      selo: 'Most popular',
      agendarTitulo: 'Build your booking',
      agendarLead: 'Pick the services and tell us your pet’s name. The WhatsApp message comes out ready to send.',
      servicosLegenda: 'Services',
      labelPet: 'Pet’s name',
      placeholderPet: 'What is their name?',
      porteLabel: 'Size',
      total: 'Total',
      btnWhats: 'Book on WhatsApp',
      depoimentosTitulo: 'Pet parents trust us',
      ondeTitulo: 'Find us',
      horariosTitulo: 'Opening hours',
      msgComServicos: 'Hi! I would like to book for {pet} ({porte} size): {servicos} (total {total}). Which times do you have?',
      msgSemServicos: 'Hi! I would like to book an appointment for {pet} ({porte} size). Which times do you have?',
      msgPetPadrao: 'my pet',
      msgOla: 'Hi!',
      demo: 'Demo site with fictional data.',
    },
  },
}
