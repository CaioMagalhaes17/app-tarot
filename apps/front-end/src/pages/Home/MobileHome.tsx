import { Button, IconQuote, IconSearch, IconSend, Panel } from "@app/ui";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function MobileHomePage() {
  // const signos = [
  //   {
  //     name: 'Aries',
  //     img: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/sign1-QM4ZKX2-e1632812862141.png',
  //     date: 'Março 21 - Abril 19'
  //   },
  //   {
  //     name: 'Aries',
  //     img: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/sign1-QM4ZKX2-e1632812862141.png',
  //     date: 'Março 21 - Abril 19'
  //   },
  //   {
  //     name: 'Aries',
  //     img: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/sign1-QM4ZKX2-e1632812862141.png',
  //     date: 'Março 21 - Abril 19'
  //   },
  //   {
  //     name: 'Aries',
  //     img: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/sign1-QM4ZKX2-e1632812862141.png',
  //     date: 'Março 21 - Abril 19'
  //   },
  //   {
  //     name: 'Aries',
  //     img: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/sign1-QM4ZKX2-e1632812862141.png',
  //     date: 'Março 21 - Abril 19'
  //   },
  //   {
  //     name: 'Aries',
  //     img: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/sign1-QM4ZKX2-e1632812862141.png',
  //     date: 'Março 21 - Abril 19'
  //   },
  //   {
  //     name: 'Aries',
  //     img: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/sign1-QM4ZKX2-e1632812862141.png',
  //     date: 'Março 21 - Abril 19'
  //   },
  //   {
  //     name: 'Aries',
  //     img: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/sign1-QM4ZKX2-e1632812862141.png',
  //     date: 'Março 21 - Abril 19'
  //   },
  //   {
  //     name: 'Aries',
  //     img: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/sign1-QM4ZKX2-e1632812862141.png',
  //     date: 'Março 21 - Abril 19'
  //   },
  //   {
  //     name: 'Aries',
  //     img: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/sign1-QM4ZKX2-e1632812862141.png',
  //     date: 'Março 21 - Abril 19'
  //   },
  //   {
  //     name: 'Aries',
  //     img: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/sign1-QM4ZKX2-e1632812862141.png',
  //     date: 'Março 21 - Abril 19'
  //   },
  //   {
  //     name: 'Aries',
  //     img: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/sign1-QM4ZKX2-e1632812862141.png',
  //     date: 'Março 21 - Abril 19'
  //   }
  // ]
  const feedbacks = [
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
  const atendents = [
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
  const services = [
    {
      name: 'Análise de Horoscópo',
      desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna',
      img: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/service1.png'
    },
    {
      name: 'Análise de Horoscópo',
      desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna',
      img: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/service4.png'
    },
    {
      name: 'Análise de Horoscópo',
      desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna',
      img: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/service5.png'
    },
    {
      name: 'Análise de Horoscópo',
      desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna',
      img: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/service6.png'
    },
    {
      name: 'Análise de Horoscópo',
      desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna',
      img: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/service3.png'
    },
    {
      name: 'Análise de Horoscópo',
      desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna',
      img: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/service2.png'
    }
  ]
  const navigate = useNavigate()

  return (
    <>
      <Panel className="long-animate__animated long-animate__fadeIn flex min-h-screen flex-col items-center p-6 justify-center gap-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-white text-6xl font-smythe">Sua Estrela Determina A Jornada Da Sua Vida</h1>
          <span className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utelit tellusoi luctus nec ullamcorper mattis pulvinar dapibus leonec.</span>
          <div className="flex flex-row justify-center gap-5">
            <Button className="btn-lg btn-primary">Começar</Button>
            <Button className="btn-lg btn-outline-primary">Começar</Button>
          </div>
        </div>
        <img className="w-[400px]" src="https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/image4-4B8RTPH-e1632889056835.png" />
      </Panel>
      <Panel className="long-animate__animated long-animate__fadeIn border-t-[#6028dc1a] border-t-[4px] border-b-[#6028dc1a] border-b-[4px] p-6" style={{ backgroundImage: 'linear-gradient(360deg, #0A051C 0%, #08072B 60%)' }} >
        <div className="flex flex-col items-center justify-center gap-5">
          <img className="w-[300px]" src="https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/41-e1632812760720.png" />
          <div className="flex flex-col max-w-[500px]">
            <h1 className="text-white mb-5 text-5xl  font-smythe">Nós Podemos Te Ajudar A Entender O Seu Futuro Com Astrologia</h1>
            <span className="text-lg">Converse com ciganos e astrologos a qualquer momento de qualquer lugar </span>
            <div className="text-white font-extrabold mt-5 flex flex-col text-left">
              <li>TAROT DO TRABALHO</li>
              <li>TAROT DO AMOR</li>
              <li>BARALHO CIGANO</li>
              <li>VIDÊNCIA</li>
              <li>JOGO DE BUZIOS</li>
              <li>CARTOMANCIA</li>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-10">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="text-white font-smythe text-4xl whitespace-nowrap ">
            Serviços mais solicitados
          </span>
          <div className="flex-1 border-t border-white"></div>
        </div>
        <div className="flex mr-auto ml-auto flex-wrap gap-5 mt-5">
          {services.map((item) => (
            <div className="hover:bg-primary/20 cursor-pointer flex flex-col items-center p-6 border max-w-[350px] border-dark">
              <img className="w-[75px]" src={item.img} />
              <h1 className="text-white font-smythe text-2xl">{item.name}</h1>
              <span>{item.desc}</span>
            </div>
          ))}
          <div className="flex flex-row gap-5 mt-10 w-full justify-center">
            <Button className="btn-primary"><IconSend /><span className="ml-2">Solicitar Trabalho</span></Button>
            <Button className="btn-outline-primary"><IconSearch className="mr-2" />Procurar Por Especialidades</Button>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-10 mt-[100px] mb-5">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="text-white font-smythe text-4xl whitespace-nowrap ">
            Nossos Atendentes
          </span>
          <div className="flex-1 border-t border-white"></div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 ">
          <div className="flex flex-wrap gap-10 items-center justify-center">
            {atendents.map((item) => (
              <div className="flex flex-col">
                <img className="rounded-2xl w-[250px] h-[350px]" src={item.profileImg} />
                <span className="text-white text-xl font-extrabold mt-5">{item.name}</span>
                <span className="text-lg">{item.desc}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-row gap-5 mt-10">
            <Button className="btn-primary">Ver todos</Button>
            <Button className="btn-outline-primary">Seja um atendente</Button>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-[100px] mb-20">
          <div className="flex-1 border-t border-gray-300"></div>
          <h1 className="text-white text-4xl whitespace-nowrap px-2 font-smythe">Como Funciona</h1>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>
        <div className="flex flex-col gap-5 mr-auto ml-auto">
          {[...Array(4)].map((_, index) => (
            <div className="hover:bg-primary/20 cursor-pointer border border-dark p-4 flex flex-col items-center">
              <span className="bg-primary text-3xl font-smythe w-[50px] text-white font-bold relative top-[-35px]">0{index + 1}</span>
              <IconSearch className="relative top-[-15px] text-white" width={'24'} height={'24'} />
              <h1 className="relative top-[-15px] text-white text-3xl font-smythe">Escolha o tipo de serviço</h1>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utelit tellusoi luctus nec ullamcorper mattis pulvinar dapibus leonec.</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Button onClick={() => navigate('/minutes')} className="btn-lg btn-primary">Ver Planos</Button>
        </div>
      </Panel>
      {/* <div className="flex items-center gap-4 mt-10  p-2">
        <div className="flex-1 border-t border-gray-300"></div>
        <span className="text-white font-smythe text-4xl whitespace-nowrap ">
          Se encontre pelo seu Signo
        </span>
        <div className="flex-1 border-t border-white"></div>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 mb-[50px] p-3">
        <div className="flex flex-wrap gap-10  justify-center">
          {signos.map((item) => (
            <div className="border border-dark flex flex-col p-4">
              <img className="w-[120px]" src={item.img} />
              <span className="text-lg text-white mt-5" >{item.name}</span>
              <span>{item.date}</span>
            </div>
          ))}
        </div>
      </div> */}
      <div className="border-t-[#6028dc1a] border-t-[4px] border-b-[#6028dc1a] border-b-[4px] p-6" style={{ backgroundImage: 'linear-gradient(360deg, #0A051C 0%, #08072B 60%)' }} >
        <div className="flex items-center gap-4 mb-5 ">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="text-white font-smythe text-4xl whitespace-nowrap ">
            Depoimento de usuários
          </span>
          <div className="flex-1 border-t border-white"></div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 w-full">
          <div className="flex flex-wrap gap-10">
            {feedbacks.map((item) => (
              <div className="border border-dark flex items-center flex-col p-4">
                <img className="w-20 rounded-full" src={item.senderProfileImg} />
                <span className="text-white text-lg">{item.senderName}</span>
                <div className="flex flex-row mb-2">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className={index < item.rating ? "fill-yellow-500 text-yellow-500" : "fill-none text-gray-300"}
                      size={12}
                    />
                  ))}
                </div>
                <IconQuote width="34" height="34" />
                <span className="">{item.feedbackText}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}