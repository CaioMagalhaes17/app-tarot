import { IconCalendar, IconCard, IconSearch, IconSend } from "@app/ui"

export const feedbacks = [
  {
    senderProfileImg: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/woman-MQU5ZC6-150x150.jpg',
    senderName: 'Caio magalhães',
    feedbackText: 'iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin aliquet maurisa volutpat lobortis erat libero condimentum metuseu',
    rating: 3
  },
  {
    senderProfileImg: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/woman-MQU5ZC6-150x150.jpg',
    senderName: 'Caio magalhães',
    feedbackText: 'iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin aliquet maurisa volutpat lobortis erat libero condimentum metuseu',
    rating: 5
  },
  {
    senderProfileImg: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/woman-MQU5ZC6-150x150.jpg',
    senderName: 'Caio magalhães',
    feedbackText: 'iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin aliquet maurisa volutpat lobortis erat libero condimentum metuseu',
    rating: 4
  },
  {
    senderProfileImg: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/woman-MQU5ZC6-150x150.jpg',
    senderName: 'Caio magalhães',
    feedbackText: 'iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin aliquet maurisa volutpat lobortis erat libero condimentum metuseu',
    rating: 5
  }
]
export const atendents = [
  {
    name: 'Caio Magalhães',
    profileImg: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/the-young-woman-in-fern-forest-5Y96P34.jpg',
    desc: 'Baralho do Trabalho'
  },
  {
    name: 'Caio Magalhães',
    profileImg: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/female-victim-and-death-in-black-hoodie-in-forest-CGJL3ZM.jpg',
    desc: 'Baralho do Trabalho'
  },
  {
    name: 'Caio Magalhães',
    profileImg: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/confident-woman-5QN9PW7.jpg',
    desc: 'Baralho do Trabalho'
  },
  {
    name: 'Caio Magalhães',
    profileImg: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/woman-in-witch-costume-holding-owl-8MPSLWH.jpg',
    desc: 'Baralho do Trabalho'
  },
]
export const services = [
  {
    name: 'Consulta de Tarot Online',
    desc: 'Leitura completa das cartas para responder perguntas sobre amor, carreira, saúde e futuro. Pode ser feita ao vivo ou via relatório.',
    img: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/service1.png'
  },
  {
    name: 'Tirada Rápida (3 cartas)',
    desc: 'Uma leitura breve com três cartas (passado, presente e futuro) — ideal para quem busca uma resposta direta e rápida.',
    img: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/service4.png'
  },
  {
    name: 'Tarot do Amor',
    desc: 'Foco em relacionamentos: sentimentos, reconciliações e novas oportunidades afetivas.',
    img: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/service6.png'
  },
  {
    name: 'Tarot da Semana / do Mês',
    desc: 'Previsão energética para o período, destacando desafios e oportunidades.',
    img: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/service5.png'
  },

]
export const steps = [
  {
    name: 'Escolha o atendente profissional',
    description: '',
    icon: <IconSearch className="relative top-[-15px] text-white" width={'24'} height={'24'} />
  },
  {
    name: 'Escolha o tipo de serviço',
    description: 'Cada atendente possui suas especialidades, escolha qual encaixa mais com o seu momento.',
    icon: <IconSend className="relative top-[-15px] text-white" width={'24'} height={'24'} />
  },
  {
    name: 'Agende o atendimento',
    description: 'Escolha o seu melhor horário compatível com a disponiblidade do atendente',
    icon: <IconCalendar className="relative top-[-15px] text-white" width={'24'} height={'24'} />
  },
  {
    name: 'Faça o pagamento',
    description: 'O pagamento pode ser feito por cartão de crédito ou PIX',
    icon: <IconCard className="relative top-[-15px] text-white" width={'24'} height={'24'} />
  }
]