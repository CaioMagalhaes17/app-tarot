import { Button, HSeparator, IconQuote, IconSearch, IconSend, IconShinningStar, IconThreeDots, Panel } from "@app/ui";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { atendents, feedbacks, services, steps } from "./home-contents";

export function MobileHomePage() {


  const navigate = useNavigate()

  return (
    <>
      <Panel className="long-animate__animated long-animate__fadeIn  min-h-screen items-center p-6 ">
        <div className="flex flex-col gap-3 ">
          <h1 className="text-white text-5xl font-smythe">Sua Estrela Determina </h1>
          <h1 className="text-white text-5xl font-smythe">A Jornada Da Sua Vida</h1>
          <img className="w-[400px] mt-[30px]" src="https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/image4-4B8RTPH-e1632889056835.png" />
          <div className="flex flex-row justify-center gap-5 mt-[20px]">
            <Button onClick={() => navigate('atendents/list')} className="btn-lg btn-primary gap-2"><IconShinningStar /> Começar</Button>
            <Button className="btn-lg btn-outline-primary gap-2"><IconThreeDots /> Saiba mais</Button>
          </div>
        </div>
      </Panel>
      <Panel className="long-animate__animated long-animate__fadeIn p-6" style={{ backgroundImage: 'linear-gradient(360deg, #0A051C 0%, #08072B 60%)' }} >
        <div className="flex flex-col items-center justify-center gap-5">
          <img className="w-[300px]" src="https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/41-e1632812760720.png" />
          <div className="flex flex-col max-w-[500px]">
            <h1 className="text-white mb-3 text-4xl  font-smythe">Nós Podemos Lhe Ajudar A Entender o Seu Futuro Com </h1>
            <h1 className="text-white mb-5 text-6xl underline font-smythe">Astrologia</h1>
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
      </Panel>
      <Panel className="long-animate__animated long-animate__fadeIn  p-6" style={{ backgroundImage: 'linear-gradient(360deg, #0A051C 0%, #08072B 60%)' }} >
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 border-t border-gray-300"></div>
          <h1 className="text-white text-5xl whitespace-nowrap px-2 font-smythe">Serviços</h1>
          <div className="flex-1 border-t border-gray-300"></div>
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
            <Button onClick={() => navigate('/atendents/list')} className="btn-primary"><IconSend /><span className="ml-2">Solicitar Trabalho</span></Button>
          </div>
        </div>
      </Panel>
      <Panel className="long-animate__animated long-animate__fadeIn p-6" style={{ backgroundImage: 'linear-gradient(360deg, #0A051C 0%, #08072B 60%)' }} >
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="text-white font-smythe text-5xl whitespace-nowrap ">
            Nossos Atendentes
          </span>
          <div className="flex-1 border-t border-white"></div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 ">
          <div className="flex flex-wrap gap-10 items-center justify-center">
            {atendents.map((item) => (
              <div className="flex flex-col">
                <img className="rounded-2xl h-[350px]" src={item.profileImg} />
                <span className="text-white text-xl font-extrabold mt-5">{item.name}</span>
                <span className="text-lg">{item.desc}</span>
                <HSeparator />
              </div>
            ))}
          </div>
          <div className="flex flex-row gap-5 mt-10">
            <Button onClick={() => navigate('/atendents/list')} className="btn-primary">Ver todos</Button>
            <Button className="btn-outline-primary">Seja um atendente</Button>
          </div>
        </div>
      </Panel>
      <Panel id="steps" className="long-animate__animated long-animate__fadeIn p-6" style={{ backgroundImage: 'linear-gradient(360deg, #0A051C 0%, #08072B 60%)' }} >
        <div className="flex items-center gap-4 mb-20">
          <div className="flex-1 border-t border-gray-300"></div>
          <h1 className="text-white text-5xl whitespace-nowrap px-2 font-smythe">Como Funciona</h1>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>
        <div className="flex flex-col gap-10 mr-auto ml-auto">
          {steps.map((item, index) => (
            <div className="hover:bg-primary/20 cursor-pointer border border-dark p-4 flex flex-col items-center">
              <span className="bg-primary text-3xl font-smythe w-[50px] text-white font-bold relative top-[-35px]">0{index + 1}</span>
              {item.icon}
              <h1 className="relative top-[-15px] text-white text-3xl font-smythe">{item.name}</h1>
              <span>{item.description}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Button onClick={() => navigate('/atendents/list')} className="btn-lg btn-primary gap-3"><IconSearch /> Procurar Atendentes</Button>
        </div>
      </Panel >

      <div className="p-6" style={{ backgroundImage: 'linear-gradient(360deg, #0A051C 0%, #08072B 60%)' }} >
        <div className="flex items-center gap-4 mb-20">
          <div className="flex-1 border-t border-gray-300"></div>
          <h1 className="text-white text-5xl whitespace-nowrap px-2 font-smythe">Feedbacks</h1>
          <div className="flex-1 border-t border-gray-300"></div>
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