import { Button, IconChat, Panel, Text } from "@app/ui";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AtendentType } from "../../../../@types/atendent.type";

export function MobileAtendentsListComponent({ atendents }: { atendents: AtendentType[] }) {
  const navigate = useNavigate()
  return (
    <>
      <Panel className="mb-10  min-h-screen max-w-[1400px] ml-auto mr-auto">

        <div className="flex items-center gap-4 mb-5">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="text-white font-smythe text-6xl whitespace-nowrap px-2">
            Atendentes
          </span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center">

          <div className="max-w-[700px]">
            <span className="text-lg">
              Escolha o Atendente que mais combina com seu momento, entre em contato e receba sua orientação espiritual personalizada com descrição e acolhimento.
            </span>
          </div>

          <Panel className="h-full w-full rounded-xl flex flex-col p-4  font-bold ">
            <div className="font-bold flex mb-10 flex-wrap items-center justify-center font-bold gap-10">
              {atendents.map((item) => (
                <div className="flex bg-[#0b0021d9] p-6 flex-col items-center cursor-pointer rounded-xl w-[420px] h-[420px] p-2">
                  <div className="flex flex-row gap-2">
                    <div className="flex flex-col items-center gap-2">
                      <img src={item.profileImg} width={'150px'} className="rounded-full mt-5" />
                      <div className="flex flex-row ">
                        {[...Array(item.rating)].map((_, index) => (
                          <Star
                            key={index}
                            className={index < 5 ? "fill-yellow-500 text-yellow-500" : "fill-none text-gray-300"}
                            size={16}
                          />
                        ))}
                      </div>
                      <Text className="border-success border text-lg text-success rounded-xl px-2" as="span">Online</Text>

                    </div>
                    <div className="flex flex-col gap-2 items-start justify-center">
                      <Text className="text-white text-5xl font-smythe" as="h1">{item.name}</Text>
                      <span className=" text-left">🔮 Médium e Paranormal</span>
                      <span className="mt-5 text-lg text-success">R$ 3,99/min</span>
                    </div>
                  </div>

                  <Text as="span" className="mt-5 text-white-dark">{item.bio}</Text>

                  <div className="flex flex-row mt-auto gap-5 w-full p-2">
                    <Button onClick={() => navigate('/atendents/profile/123')} className="btn-outline-primary w-full"><IconChat /><span className="ml-2">Consulta</span></Button>
                  </div>
                </div>
              ))}
            </div>


          </Panel>
        </div>
      </Panel>
    </>

  )
}