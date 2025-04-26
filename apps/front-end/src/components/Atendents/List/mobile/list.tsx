import { Button, HSeparator, IconChat, IconUser, Input, Panel, Text } from "@app/ui";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AtendentType } from "../../../../@types/atendent.type";

export function MobileAtendentsListComponent({ atendents }: { atendents: AtendentType[] }) {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen mt-2 max-w-[1700px] ml-auto mr-auto">
      <div className="h-full flex flex-col p-3">
        <Panel className="border-[#6028dc1a] backdrop-blur-lg border-[4px] bg-[#26123c]/80 h-full max-w-[450px]  rounded-xl flex flex-col p-4 font-bold">
          <Text as="h1" className="text-white text-3xl  ">
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
              <Text className="rounded-full p-2 border-2  bg-dark border-dark text-white" as="span">Online Agora</Text>
              <Text className="rounded-full p-2 border-2  bg-dark border-dark text-white" as="span">Baralho Cigano</Text>
              <Text className="rounded-full p-2 border-2  bg-dark border-dark text-white" as="span">Búzios</Text>
              <Text className="rounded-full p-2 border-2  bg-dark border-dark text-white" as="span">Runas </Text>
            </div>
            <HSeparator />
          </div>
        </Panel>
        <Panel className="border-[#6028dc1a] w-full rounded-xl flex flex-col mt-5 font-bold ">
          <div className="font-bold flex mb-10 flex-wrap items-center font-bold justify-center gap-2">
            {atendents.map((item) => (
              <>
                <div className="flex flex-row gap-2 items-center backdrop-blur-lg hover:bg-[#26123c] cursor-pointer bg-[#26123c]/50 border-[#6028dc1a] border-[4px] rounded-xl  p-2">
                  <div className="flex flex-col ">
                    <img src={item.profileImg} width={'50px'} className="rounded-full" />
                    <Text className="text-white " as="h1">{item.name}</Text>
                    <div className="flex flex-row ">
                      {[...Array(item.rating)].map((_, index) => (
                        <Star
                          key={index}
                          className={index < 5 ? "fill-yellow-500 text-yellow-500" : "fill-none text-gray-300"}
                          size={16}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="text-left">
                    <Text as="span" className="mt-3 text-sm text-white-dark">{item.bio}</Text>
                    <div className="flex flex-row mt-2 gap-2">
                      <Button className="btn-outline-primary ml-auto btn-sm"><IconUser className="mr-2" />Perfil</Button>
                      <Button onClick={() => navigate('/chat')} className="btn-primary btn-sm"><IconChat /><span className="ml-2">Chamar</span></Button>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  )
}