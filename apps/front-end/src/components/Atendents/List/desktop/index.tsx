import { Button, IconChat, Panel, Text } from "@app/ui";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AtendentType } from "../../../../@types/atendent.type";

export function AtendentsListComponent({ atendents }: { atendents: AtendentType[] }) {
  const navigate = useNavigate()
  return (
    <>
      <Panel className="mb-10  min-h-screen max-w-[1400px] ml-auto mr-auto">

        <div className="flex items-center gap-4 mb-5">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="text-white font-smythe text-8xl whitespace-nowrap px-2">
            Atendentes
          </span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center">

          <div className="max-w-[700px]">
            <span className="text-xl">
              Escolha o Atendente que mais combina com seu momento, entre em contato e receba sua orientação espiritual personalizada com descrição e acolhimento.
            </span>
          </div>
          {/* <Panel className="h-full w-[550px]  rounded-xl flex flex-col p-4 font-bold">
          <Text as="h1" className=" text-white text-2xl  ">
            Procurar Atendentes
          </Text>
          <HSeparator />
          <Input type="text" className="mt-5" placeholder="Pesquisar..." />
          <div className="flex flex-col ">
            <div className="flex mt-5 flex-row items-center">
              <Text className="text-lg text-white" as="h1">Filtros Aplicados</Text>
              <Text className="ml-auto cursor-pointer" as="h1">Limpar Filtros</Text>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              <Text className="rounded-full p-1 bg-dark border-dark text-white" as="span">Online Agora</Text>
              <Text className="rounded-full p-1 bg-dark border-dark text-white" as="span">Baralho Cigano</Text>
              <Text className="rounded-full p-1 bg-dark border-dark text-white" as="span">Búzios</Text>
              <Text className="rounded-full p-1 bg-dark border-dark text-white" as="span">Runas </Text>
            </div>
            <HSeparator />
          </div>
        </Panel> */}
          <Panel className="h-full w-full rounded-xl flex flex-col p-4 mt-20 font-bold ">
            <div className="font-bold flex mb-10 flex-wrap items-center justify-center font-bold gap-10">
              {atendents.map((item) => (
                <div className="flex gradient-bg hover:shadow-[0_0px_10px] hover:shadow-primary border-[#1b1145] border flex-col items-center cursor-pointer rounded-xl w-[420px] h-[420px] p-4">
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
                      <Text className="border-green border text-lg text-green rounded-xl px-2" as="span">Online</Text>

                    </div>
                    <div className="flex flex-col items-start justify-center">
                      <Text className="text-white text-5xl font-smythe" as="h1">{item.name}</Text>
                      <span className="text-lg">🔮 Médium e Paranormal</span>
                      <span className="mt-5 text-lg text-green">R$ 3,99/min</span>
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