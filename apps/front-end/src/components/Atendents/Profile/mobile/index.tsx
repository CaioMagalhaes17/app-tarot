import { Button, HSeparator, IconChat, IconMoon, Text } from "@app/ui";
import { ArrowDown, ArrowUp, Star } from "lucide-react";
import { useState } from "react";
import { FeedbackRow } from "../FeedbackRow";
import { useNavigate } from "react-router-dom";

export function MobileAtendentProfileComponent({ profileImg, name, rating }: { profileImg: string, name: string, rating: number }) {
  const tags = [
    {
      name: 'Tarot Baralho'
    },
    {
      name: 'Tarot Baralho'
    },
    {
      name: 'Tarot Baralho'
    },
    {
      name: 'Tarot Baralho'
    },
    {
      name: 'Tarot Baralho'
    },

  ]

  const services = [
    {
      name: 'Consulta por e-mail',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      serviceImg: 'https://www.iquilibrio.com/layout/produtos/90857_consulta-por-e-mail.jpg',
      price: 'R$50,00'
    },
    {
      name: 'Consulta por e-mail',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      serviceImg: 'https://www.iquilibrio.com/layout/produtos/90857_consulta-por-e-mail.jpg',
      price: 'R$50,00'
    },
    {
      name: 'Consulta por e-mail',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      serviceImg: 'https://www.iquilibrio.com/layout/produtos/90857_consulta-por-e-mail.jpg',
      price: 'R$50,00'
    },
    {
      name: 'Consulta por e-mail',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      serviceImg: 'https://www.iquilibrio.com/layout/produtos/90857_consulta-por-e-mail.jpg',
      price: 'R$50,00'
    },

  ]

  const [showAllAbout, setShowAllAbout] = useState<boolean>(false)

  const feedbacks = [
    {
      senderName: 'Caio magahlães defaira',
      date: '24/05/2024',
      rating: 4,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    },
    {
      senderName: 'Caio magahlães defaira',
      date: '24/05/2024',
      rating: 4,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    },
    {
      senderName: 'Caio magahlães defaira',
      date: '24/05/2024',
      rating: 4,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    },
  ]
  const navigate = useNavigate()
  return (
    <>
      <div className="flex min-h-screen justify-center">
        <div className="flex flex-col font-bold min-w-[70%]">
          <div className="bg-[#1d1232] p-4  border-[#6028dc1a] border-[4px]  rounded-xl">
            <div className="flex max-w-[1100px] ml-auto mr-auto relative flex-row  font-bold gap-5">
              <img width={'130px'} src={profileImg} className="h-[130px] rounded-3xl sombra" />
              <div className="flex flex-col max-w-[550px]">
                <Text className="text-4xl text-dark dark:text-white" as="h1">{name}</Text>
                <Text className="text-green text-lg mb-2" as="h1">Online</Text>
                <div className="flex flex-row ">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      width={'20'}
                      key={index}
                      className={index < rating ? "fill-yellow-500 text-yellow-500" : "fill-none text-gray-300"}
                      size={16}
                    />
                  ))}
                </div>
              </div>
            </div>
            <HSeparator className="mb-5" />
            <div className="flex flex-wrap gap-2">
              {tags.map((item) => (
                <button className={`text-dark dark:text-white border rounded-xl p-1`}>{item.name}</button>
              ))}
            </div>
            <div className="flex flex-col items-center gap-5 mt-5">
              <Button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="btn-purple flex w-full flex-row gap-2"><IconMoon />Serviços</Button>
              <Button onClick={() => document.getElementById('feedbacks')?.scrollIntoView({ behavior: 'smooth' })} className="btn-warning  w-full  flex flex-row gap-2"><Star />Avaliações</Button>
              <div className="flex items-center flex-col w-full">
                <Button onClick={() => navigate('/chat')} className="btn-primary flex flex-row gap-2 w-full "><IconChat /> Chamar no Chat</Button>
                <Text as="span">R$3,50/minuto</Text>
              </div>
            </div>
          </div>
          <div className="bg-[#1d1232] p-4 border-[#6028dc1a] border-[4px] rounded-xl mt-5">
            <div className="max-w-[1100px] flex flex-col ml-auto mr-auto font-bold">
              <div onClick={() => setShowAllAbout(!showAllAbout)} className="cursor-pointer ml-auto flex-row flex items-center gap-2 ">
                {!showAllAbout ? <ArrowDown /> : <ArrowUp />}
                Mostrar tudo
              </div>
              <Text as="h1" className="text-3xl text-white">Sobre</Text>
              <HSeparator className="mt-1 mb-2" />
              <div className="text-left text-lg font-normal">
                <Text as="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</Text>
              </div>
              {showAllAbout && (
                <>
                  <Text as="h1" className="text-3xl text-white mt-5">Especialidades</Text>
                  <HSeparator className="mt-1 mb-2" />

                  <div className="text-left text-lg font-normal">
                    <Text as="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</Text>
                  </div>
                  <Text as="h1" className="text-3xl text-white mt-5">Especialidades</Text>
                  <HSeparator className="mt-1 mb-2" />

                  <div className="text-left text-lg font-normal">
                    <Text as="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</Text>
                  </div>
                </>
              )}
            </div>
          </div>

          <div id="services" className="bg-[#1d1232] border-[#6028dc1a] border-[4px] p-4 rounded-xl mt-5">
            <div className="max-w-[1100px] flex flex-col ml-auto mr-auto font-bold">
              <Text as="h1" className="text-white text-3xl">Serviços</Text>
              <HSeparator className="mt-1 mb-5" />
              <div className="flex flex-wrap gap-10 ">
                {services.map((item) => (
                  <>
                    <div className="flex flex-col w-[150px]">
                      <img src={item.serviceImg} className="rounded-xl" />
                      <Text className="text-white text-xl mt-2" as="h1">{item.name}</Text>
                      <Text className="mt-2 mb-2" as="span">{item.description}</Text>
                      <Text className="text-success text-lg mt-2 mb-5" as="span">{item.price}</Text>
                      <Button className="btn-green ">Comprar</Button>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>

          <div id="feedbacks" className="bg-[#1d1232] border-[#6028dc1a] border-[4px] p-4 rounded-xl mt-5 mb-20">
            <div className="max-w-[1100px] flex flex-col ml-auto mr-auto font-bold">
              <Text as="h1" className="text-white text-3xl">Avaliações</Text>
              <HSeparator className="mt-1 mb-5" />
              {feedbacks.map((item) => (
                <>
                  <FeedbackRow feedback={item} />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}