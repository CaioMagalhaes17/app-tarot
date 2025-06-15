import { Button, HSeparator, IconQuote } from "@app/ui";
import { Star } from "lucide-react";
import useStore from "../../state";
import { MobileHomePage } from "./MobileHome";

export function HomePage() {
  const signos = [
    {
      name: 'Aries',
      img: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/sign1-QM4ZKX2-e1632812862141.png',
      date: 'Março 21 - Abril 19'
    },
    {
      name: 'Aries',
      img: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/sign1-QM4ZKX2-e1632812862141.png',
      date: 'Março 21 - Abril 19'
    },
    {
      name: 'Aries',
      img: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/sign1-QM4ZKX2-e1632812862141.png',
      date: 'Março 21 - Abril 19'
    },
    {
      name: 'Aries',
      img: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/sign1-QM4ZKX2-e1632812862141.png',
      date: 'Março 21 - Abril 19'
    },
    {
      name: 'Aries',
      img: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/sign1-QM4ZKX2-e1632812862141.png',
      date: 'Março 21 - Abril 19'
    },
    {
      name: 'Aries',
      img: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/sign1-QM4ZKX2-e1632812862141.png',
      date: 'Março 21 - Abril 19'
    },
    {
      name: 'Aries',
      img: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/sign1-QM4ZKX2-e1632812862141.png',
      date: 'Março 21 - Abril 19'
    },
    {
      name: 'Aries',
      img: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/sign1-QM4ZKX2-e1632812862141.png',
      date: 'Março 21 - Abril 19'
    },
    {
      name: 'Aries',
      img: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/sign1-QM4ZKX2-e1632812862141.png',
      date: 'Março 21 - Abril 19'
    },
    {
      name: 'Aries',
      img: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/sign1-QM4ZKX2-e1632812862141.png',
      date: 'Março 21 - Abril 19'
    },
    {
      name: 'Aries',
      img: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/sign1-QM4ZKX2-e1632812862141.png',
      date: 'Março 21 - Abril 19'
    },
    {
      name: 'Aries',
      img: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/sign1-QM4ZKX2-e1632812862141.png',
      date: 'Março 21 - Abril 19'
    }
  ]
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
  const { isMobile } = useStore()
  return (
    <>
      {isMobile ? <MobileHomePage /> : (
        <>
          <div className="flex min-h-screen flex-row items-center justify-center mt-[-190px]">
            <div className="flex flex-col max-w-[600px] gap-3">
              <h1 className="text-white text-7xl  font-smythe">Sua Estrela Determina</h1>
              <h1 className="text-white text-7xl  font-smythe">A Jornada Da Sua Vida</h1>
              <span className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utelit tellusoi luctus nec ullamcorper mattis pulvinar dapibus leonec.</span>
              <div className="flex flex-row justify-center gap-5">
                <Button className="btn-lg btn-primary">Começar</Button>
                <Button className="btn-lg btn-outline-primary">Começar</Button>
              </div>
            </div>
            <img className="w-[400px]" src="https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/image4-4B8RTPH-e1632889056835.png" />
          </div>
          <div className="border-t-[#6028dc1a] border-t-[4px] border-b-[#6028dc1a] border-b-[4px] p-[100px]" style={{ backgroundImage: 'linear-gradient(360deg, #0A051C 0%, #08072B 60%)' }} >
            <div className="flex flex-row items-center justify-center gap-5">
              <img className="w-[400px]" src="https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/41-e1632812760720.png" />
              <div className="flex flex-col max-w-[500px]">
                <h1 className="text-white mb-5 text-6xl  font-smythe">Nós Podemos Te Ajudar A Entender O Seu Futuro Com Astrologia</h1>
                <span className="text-lg">Converse com ciganos e astrologos a qualquer momento de qualquer lugar </span>
                <div className="flex flex-row justify-center items-center text-white text-lg font-extrabold gap-[50px] mt-5">
                  <div className="flex flex-col text-left">
                    <li>TAROT DO TRABALHO</li>
                    <li>TAROT DO AMOR</li>
                    <li>BARALHO CIGANO</li>
                  </div>
                  <div className="flex flex-col text-left">
                    <li>VIDÊNCIA</li>
                    <li>JOGO DE BUZIOS</li>
                    <li>CARTOMANCIA</li>
                  </div>
                </div>
                <div className="flex flex-row gap-5 mt-10 justify-center">
                  <Button className="btn-primary">Encontrar Serviços</Button>
                  <Button className="btn-outline-primary">Procurar Por Especialidades</Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gal-5 mt-[200px]">
              <h1 className="text-white text-7xl font-smythe">Nossos Atendentes</h1>
              <HSeparator className="mt-5 mb-10 w-[350px]" />
              <div className="flex flex-wrap gap-10 max-w-[1200px]">
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
          </div>
          <div className="flex flex-col items-center justify-center gap-5 mt-[100px] mb-[100px]">
            <h1 className="text-white text-7xl font-smythe">Se encontre pelo seu Signo</h1>
            <HSeparator className="mt-1 mb-5 w-[350px]" />
            <div className="flex flex-wrap gap-10 max-w-[1100px] justify-center">
              {signos.map((item) => (
                <div className="border border-dark flex flex-col p-10">
                  <img className="w-[120px]" src={item.img} />
                  <span className="text-lg text-white mt-5" >{item.name}</span>
                  <span>{item.date}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t-[#6028dc1a] border-t-[4px] border-b-[#6028dc1a] border-b-[4px] p-[50px]" style={{ backgroundImage: 'linear-gradient(360deg, #0A051C 0%, #08072B 60%)' }} >
            <div className="flex flex-col items-center justify-center gap-5 w-full">
              <h1 className="text-white text-7xl font-smythe">Depoimento de usuários</h1>
              <HSeparator className="mt-1 mb-5 w-[350px]" />
              <div className="flex flex-row gap-10">
                {feedbacks.map((item) => (
                  <div className="border border-dark flex items-center flex-col p-10">
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
                    <span>{item.feedbackText}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}