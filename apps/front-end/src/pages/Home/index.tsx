import { Button, IconQuote, IconSend, IconShinningStar, IconThreeDots, Panel } from "@app/ui";
import { Star } from "lucide-react";
import useStore from "../../state";
import { MobileHomePage } from "./MobileHome";
import { useNavigate } from "react-router-dom";
import { atendents, feedbacks, services, steps } from "./home-contents";

export function HomePage() {

  const { isMobile } = useStore()
  const navigate = useNavigate()
  return (
    <>
      {isMobile ? <MobileHomePage /> : (
        <>
          <Panel className="long-animate__animated long-animate__fadeIn flex min-h-screen flex-row items-center justify-center mt-[-80px]">
            <div className="flex flex-col max-w-[700px] gap-3">
              <h1 className="text-white text-8xl  font-smythe">Sua Estrela Determina</h1>
              <h1 className="text-white text-8xl  font-smythe">A Jornada Da Sua Vida</h1>
              <span className="text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utelit tellusoi luctus nec ullamcorper mattis pulvinar dapibus leonec.</span>
              <div className="flex mt-5 flex-row justify-center gap-5">
                <Button onClick={() => navigate('atendents/list')} className="btn-xl btn-primary gap-3"><IconShinningStar /> Começar</Button>
                <Button onClick={() => document.getElementById('steps')?.scrollIntoView({ behavior: 'smooth' })} className="btn-xl btn-outline-primary gap-3"><IconThreeDots /> Saiba Mais</Button>
              </div>
            </div>
            <img className="w-[400px]" src="https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/image4-4B8RTPH-e1632889056835.png" />
          </Panel>
          <Panel className=" long-animate__animated long-animate__fadeIn  border-t-[#6028dc1a] border-t-[4px] p-[100px]" style={{ backgroundImage: 'linear-gradient(360deg, #0A051C 0%, #08072B 60%)' }} >
            <div className="mb-[200px] flex flex-row items-center justify-center gap-5">
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

              </div>
            </div>
            <div id="services">
              <div className="flex items-center gap-4 mb-20 max-w-[1200px] justify-center ml-auto mr-auto">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="text-white font-smythe text-7xl whitespace-nowrap px-2">
                  Serviços
                </span>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>
              <div className="flex max-w-[1130px] mr-auto ml-auto flex-wrap gap-5  items-center justify-center">
                {services.map((item) => (
                  <div className="hover:bg-primary/20 cursor-pointer gap-2 flex flex-col items-center p-6 border h-[300px] max-w-[450px] border-dark">
                    <img className="w-[120px]" src={item.img} />
                    <h1 className="text-white font-smythe text-4xl">{item.name}</h1>
                    <span className="text-lg">{item.desc}</span>
                  </div>
                ))}
                <div className="flex flex-row gap-5 mt-5 w-full justify-center">
                  <Button onClick={() => navigate('/atendents/list')} className="btn-primary btn-xl"><IconSend /><span className="ml-2">Solicitar Trabalho</span></Button>
                </div>
              </div>
            </div>


            <div className="mt-[200px] mb-[200px]" id="atendents">
              <div className="flex items-center gap-4 max-w-[1200px] mt-[100px] mb-20 ml-auto mr-auto">
                <div className="flex-1 border-t border-gray-300"></div>
                <h1 className="text-white text-7xl whitespace-nowrap px-2 font-smythe">Nossos Atendentes</h1>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>
              <div className="flex flex-col items-center justify-center gal-5 ">
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
                  <Button onClick={() => navigate('/atendents/list')} className="btn-primary btn-xl">Ver todos</Button>
                  <Button className="btn-outline-primary btn-xl">Seja um atendente</Button>
                </div>
              </div>
            </div>

            <div className="mt-[200px] mb-[200px]" id="steps">
              <div className="flex items-center gap-4 max-w-[1200px] mr-auto ml-auto mt-[100px] mb-20">
                <div className="flex-1 border-t border-gray-300"></div>
                <h1 className="text-white text-7xl whitespace-nowrap px-2 font-smythe">Como Funciona</h1>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>
              <div className="flex flex-row gap-5 max-w-[1130px] mr-auto ml-auto">
                {steps.map((item, index) => (
                  <div className="hover:bg-primary/20 cursor-pointer border border-dark p-4 flex flex-col h-[300px] w-[300px] items-center">
                    <span className="bg-primary text-3xl font-smythe w-[50px] text-white font-bold relative top-[-35px]">0{index + 1}</span>
                    {item.icon}
                    <h1 className="relative top-[-15px] text-white text-3xl font-smythe">{item.name}</h1>
                    <span className="text-lg">{item.description}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-10">
                <Button onClick={() => navigate('/atendents/list')} className="btn-xl btn-primary">Começar</Button>
              </div>
            </div>


            <div id="feedbacks">
              <div className="flex max-w-[1200px] mr-auto ml-auto items-center gap-4 mb-20 mt-20">
                <div className="flex-1 border-t border-gray-300"></div>
                <h1 className="text-white text-7xl whitespace-nowrap px-2 font-smythe">Feedbacks</h1>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>
              <div className="flex flex-col items-center justify-center gap-5 w-full">
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

          </Panel>
        </>
      )}
    </>
  )
}