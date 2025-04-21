import { Button, IconChat, IconSearch, IconUser, Panel, Text } from "@app/ui";
import { Star } from "lucide-react";

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
  const minutsPackages = [
    {
      name: '30 Minutos',
      id: '30min',
      price: 'R$15,00'
    },
    {
      name: '30 Minutos',
      id: '30min',
      price: 'R$15,00'

    },
    {
      name: '30 Minutos',
      id: '30min',
      price: 'R$15,00'

    },

  ]
  return (
    <>
      <div className="min-h-screen border-lg rounded-xl max-w-[1200px] ml-auto mr-auto ">
        <Panel className="font-bold flex flex-col items-center">
          <div className=" mt-[200px] flex flex-col gap-10 items-center">
            <Text as="h1" className="text-6xl text-white">Texto Principal</Text>
            <Text as="h1" className="text-xl text-white-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            <div className="flex flex-row gap-5 mr-20 mt-20">
              <Button onClick={() => document.getElementById('atendents')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary text-2xl">Procurar Atendentes</Button>
              <Button className="btn-outline-primary text-2xl">Comprar Minutos</Button>
            </div>
          </div>
        </Panel>
      </div>
      <div id="atendents" className="backdrop-blur-md border-[#6028dc1a] bg-[#26123c]/20 border rounded-xl w-full p-6 ml-auto mr-auto">
        <div className=" max-w-[1200px] ml-auto mr-auto mt-10">
          <Text as="h1" className="text-5xl mb-20 text-center font-extrabold text-white">Atendentes Disponíveis</Text>
          <div className="flex flex-row mb-5 gap-5 mr-[100px]">
            <div className="ml-auto" />
            <Button className="btn-outline-primary">Quero ser Atendente</Button>
            <Button className="btn-primary"><IconSearch className="mr-2" />Procurar mais</Button>
          </div>
          <div className="font-bold flex mb-10 flex-wrap items-center font-bold gap-10 justify-center">
            {specialists.map((item) => (
              <div className="flex flex-col items-center bg-[#26123c]/50 border-[#6028dc1a] border-[4px] rounded-xl w-[310px] h-[450px] p-4">
                <Text className="text-white text-xl" as="h1">{item.name}</Text>
                <img src={item.profile} width={'150px'} className="rounded-full mt-5" />
                <Text as="span" className="text-lg mt-5 text-white-dark">{item.desc}</Text>
                <div className="flex flex-row mt-5">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className={index < 5 ? "fill-yellow-500 text-yellow-500" : "fill-none text-gray-300"}
                      size={32}
                    />
                  ))}
                </div>
                <div className="flex flex-row mt-5 gap-5">
                  <Button className="btn-outline-primary"><IconUser className="mr-2" />Perfil</Button>
                  <Button className="btn-primary"><IconChat /><span className="ml-2">Chamar</span></Button>
                </div>
              </div>
            ))}
          </div>
          <Text as="span" className="text-xl">Ver Mais</Text>

        </div>
      </div>
      <div id="specialties" className="w-full p-6 ml-auto mr-auto mt-[100px]">
        <div className=" max-w-[1200px] ml-auto mr-auto">
          <Text as="h1" className="text-5xl mb-10 text-center font-extrabold text-white">Especialidades</Text>
          <div className="mt-20 flex flex-col">
            <div className="flex flex-row gap-10">
              <img className="rounded-xl" src="https://static.cartasciganas.com/images/site/especialidade/tarot.jpg" />
              <div className="font-bold items-center gap-10 flex flex-col">
                <Text className="text-3xl text-white" as="h1">Especialidade 1</Text>
                <Text className="text-xl" as="h1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sed do eiusmod tempor incididunt</Text>
              </div>
            </div>
            <div className="flex flex-row gap-10 mt-20">
              <div className="font-bold items-center gap-10 flex flex-col">
                <Text className="text-3xl text-white" as="h1">Especialidade 2</Text>
                <Text className="text-xl" as="h1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sed do eiusmod tempor incididunt</Text>
              </div>
              <img className="rounded-xl" src="https://static.cartasciganas.com/images/site/especialidade/tarot.jpg" />
            </div>
          </div>
        </div>
      </div>
      <div id="plans" className="backdrop-blur-md font-bold border-[#6028dc1a] bg-[#26123c]/20 border rounded-xl w-full p-6 ml-auto mr-auto">
        <div className=" max-w-[1200px] ml-auto mr-auto mt-10">
          <Text as="h1" className="text-5xl mb-20 text-center font-extrabold text-white">Comprar Minutos</Text>
          <div className="grid md:grid-cols-3 gap-6">
            {minutsPackages.map((plan, index) => (
              <div
                key={index}
                className="bg-black rounded-xl flex flex-col p-6 text-center sombra transition-all h-[350px]"
              >
                <p className="text-5xl mb-5 font-bold text-green mt-2">{plan.price}</p>
                <h3 className="text-3xl font-bold text-white">{plan.name}</h3>
                <ul className="mt-4 space-y-2 text-gray-600 dark:text-white-dark mb-5">
                  <li className="text-lg">
                    ✅ Teste
                  </li>
                  <li className="text-lg">
                    ✅ Teste
                  </li>
                  <li className="text-lg">
                    ✅ Teste
                  </li>
                </ul>
                <Button className="mt-auto w-full btn-outline-primary">
                  Comprar {plan.name}
                </Button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  )
}