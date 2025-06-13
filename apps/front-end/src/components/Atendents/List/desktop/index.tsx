import { Button, HSeparator, IconChat, IconUser, Input, Panel, Text } from "@app/ui";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AtendentType } from "../../../../@types/atendent.type";

export function AtendentsListComponent({ atendents }: { atendents: AtendentType[] }) {
  const navigate = useNavigate()
  return (
    <div className="bg-[#10092c] mb-10 border-[#1b1145] border min-h-screen max-w-[1300px] ml-auto mr-auto">
      <div className=" flex flex-col gap-5 items-center">
        <Panel className="h-full w-[550px]  rounded-xl flex flex-col p-4 font-bold">
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
        </Panel>
        <Panel className="h-full w-full rounded-xl flex flex-col p-4 font-bold ">
          <div className="font-bold flex mb-10 flex-wrap items-center font-bold gap-5">
            {atendents.map((item) => (
              <div className="flex border-[#1b1145] border flex-col items-center cursor-pointer rounded-xl w-[290px] h-[380px] p-2">
                <img src={item.profileImg} width={'150px'} className="rounded-full mt-5" />
                <Text className="text-white text-xl" as="h1">{item.name}</Text>
                <div className="flex flex-row ">
                  {[...Array(item.rating)].map((_, index) => (
                    <Star
                      key={index}
                      className={index < 5 ? "fill-yellow-500 text-yellow-500" : "fill-none text-gray-300"}
                      size={16}
                    />
                  ))}
                </div>
                <Text as="span" className="mt-3 text-white-dark">{item.bio}</Text>

                <div className="flex flex-row mt-2 gap-5">
                  <Button onClick={() => navigate('/atendents/profile/123')} className="btn-outline-primary"><IconUser className="mr-2" />Perfil</Button>
                  <Button onClick={() => navigate('/chat')} className="btn-primary"><IconChat /><span className="ml-2">Chamar</span></Button>
                </div>
              </div>
            ))}
          </div>


        </Panel>
      </div>
    </div>
  )
}