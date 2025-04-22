import { Button, HSeparator, IconChat, IconUser, Input, Panel, Text } from "@app/ui";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function AtendentsListComponent() {
  const specialists = [
    {
      name: 'Aloisio Numerologo',
      profile: 'https://static.cartasciganas.com/images/users/avatars/cropped_1340205481.jpeg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    },
    {
      name: 'Aloisio Numerologo',
      profile: 'https://static.cartasciganas.com/images/users/avatars/cropped_1340205481.jpeg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    },
    {
      name: 'Aloisio Numerologo',
      profile: 'https://static.cartasciganas.com/images/users/avatars/cropped_1340205481.jpeg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    },
    {
      name: 'Aloisio Numerologo',
      profile: 'https://static.cartasciganas.com/images/users/avatars/cropped_1340205481.jpeg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    },
    {
      name: 'Aloisio Numerologo',
      profile: 'https://static.cartasciganas.com/images/users/avatars/cropped_1340205481.jpeg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    },
    {
      name: 'Aloisio Numerologo',
      profile: 'https://static.cartasciganas.com/images/users/avatars/cropped_1340205481.jpeg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    }
  ]
  const navigate = useNavigate()
  return (
    <div className="min-h-screen mt-2 max-w-[1700px] ml-auto mr-auto">
      <div className="h-[800px] flex flex-row gap-5">
        <Panel className="border-[#6028dc1a] backdrop-blur-lg border-[4px] bg-[#26123c]/80 h-full w-[450px]  rounded-xl flex flex-col p-4 font-bold">
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
        <Panel className="border-[#6028dc1a] backdrop-blur-lg border-[4px] bg-[#26123c]/50 h-full w-full rounded-xl flex flex-col p-4 font-bold ">

          <div className="font-bold flex mb-10 flex-wrap items-center font-bold gap-5  scrollable">
            {specialists.map((item) => (
              <div className="flex flex-col items-center hover:bg-[#26123c] cursor-pointer bg-[#26123c]/50 border-[#6028dc1a] border-[4px] rounded-xl w-[290px] h-[380px] p-2">
                <Text className="text-white text-xl" as="h1">{item.name}</Text>
                <img src={item.profile} width={'150px'} className="rounded-full mt-5" />
                <div className="flex flex-row mt-5">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className={index < 5 ? "fill-yellow-500 text-yellow-500" : "fill-none text-gray-300"}
                      size={16}
                    />
                  ))}
                </div>
                <Text as="span" className="mt-3 text-white-dark">{item.desc}</Text>

                <div className="flex flex-row mt-2 gap-5">
                  <Button className="btn-outline-primary"><IconUser className="mr-2" />Perfil</Button>
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