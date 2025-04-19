import { Button, Panel, Text } from "@app/ui";

export function Home() {
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
  return (
    <>
      <div className="min-h-screen border-lg rounded-xl max-w-[1200px] ml-auto mr-auto ">
        <Panel className="font-bold flex flex-col items-center">
          <div className=" mt-[200px] flex flex-col gap-10 items-center">
            <Text as="h1" className="text-6xl text-white">Texto Principal</Text>
            <Text as="h1" className="text-xl text-white-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            <div className="flex flex-row gap-5 mt-20">
              <Button className="btn-primary text-2xl">Iniciar Consulta</Button>
              <Button onClick={() => document.getElementById('atendents')?.scrollIntoView({ behavior: 'smooth' })} className="btn-outline-primary text-2xl">Procurar Atendentes</Button>
            </div>
          </div>
        </Panel>
      </div>
      <div id="atendents" className="backdrop-blur-md w-full">
        <div className=" max-w-[1200px] ml-auto mr-auto">
          <Text as="h1" className="text-5xl mb-10 text-center font-extrabold text-white">Atendentes Disponíveis</Text>
          <div className="font-bold flex flex-wrap items-center font-bold gap-10 justify-center">
            {specialists.map((item) => (
              <div className="flex flex-col items-center border-[#808080] border rounded-xl w-[310px] h-[350px] p-4">
                <Text className="text-white text-xl" as="h1">{item.name}</Text>
                <img src={item.profile} width={'150px'} className="rounded-full" />
                <Text as="span" className="text-lg mt-5 text-white-dark">{item.desc}</Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}