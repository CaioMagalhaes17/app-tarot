import { Button, IconChat, IconMoon, IconQuote, Panel, Text } from "@app/ui";
import { ArrowDown, ArrowUp, Star } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function AtendentProfileComponent({ profileImg, name, rating }: { profileImg: string, name: string, rating: number }) {
  const navigate = useNavigate()


  const services = [
    {
      name: 'Consulta por Chat',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      serviceImg: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/service5.png',
      price: 'R$50,00'
    },
    {
      name: 'Mapa Astral',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      serviceImg: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/service3.png',
      price: 'R$50,00'
    },
    {
      name: 'Horoscopo do amor',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      serviceImg: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/service6.png',
      price: 'R$50,00'
    },
    {
      name: 'Horoscopo do dia',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      serviceImg: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/service1.png',
      price: 'R$50,00'
    },

  ]

  const [showAllAbout, setShowAllAbout] = useState<boolean>(false)

  const feedbacks = [
    {
      senderProfileImg: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/woman-MQU5ZC6-150x150.jpg',
      senderName: 'Caio magahlães defaira',
      date: '24/05/2024',
      rating: 4,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    },
    {
      senderProfileImg: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/woman-MQU5ZC6-150x150.jpg',
      senderName: 'Caio magahlães defaira',
      date: '24/05/2024',
      rating: 4,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    },
    {
      senderProfileImg: 'https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/woman-MQU5ZC6-150x150.jpg',
      senderName: 'Caio magahlães defaira',
      date: '24/05/2024',
      rating: 4,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    },
  ]
  return (
    <>
      <Panel className="flex min-h-screen justify-center">
        <Panel className="flex flex-col font-bold ">
          <div className="p-4">
            <div className="mb-20 flex max-w-[1300px] ml-auto mr-auto relative flex-row items-center font-bold gap-5">
              <img width={'230px'} src={profileImg} className="rounded-3xl sombra" />
              <div className="flex flex-col max-w-[550px]">
                <Text className="text-7xl font-smythe text-white " as="h1">{name}</Text>
                <Text className="px-2 rounded-xl bg-green w-fit text-white text-lg mb-2" as="h1">Online</Text>
                <div className="flex flex-row mt-2 ">
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
              <div className="ml-auto" />
              <div className="flex flex-col items-center gap-5">
                <Button onClick={() => navigate('schedule')} className="btn-primary btn-xl flex flex-row gap-2 w-full w-full"><IconChat /> Consulta por Chat</Button>
                <Button className="btn-purple btn-xl flex w-full flex-row gap-2"><IconMoon />Serviços</Button>
                <Button className="btn-warning btn-xl  w-full  flex flex-row gap-2"><Star />Avaliações</Button>
              </div>
            </div>
            <div className="max-w-[1300px] flex flex-col ml-auto mr-auto font-bold mb-20">

              <div className="flex items-center gap-4 mb-5">
                <div className="flex-1 border-t border-gray-300"></div>
                <h1 className="text-white text-7xl whitespace-nowrap px-2 font-smythe">Sobre o consultor</h1>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>

              <div className="text-left text-lg font-normal">
                <Text as="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</Text>
              </div>
              {showAllAbout && (
                <>
                  <div className="text-left text-lg font-normal mb-5 mt-5">
                    <Text as="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</Text>
                  </div>
                  <div className="text-left text-lg font-normal">
                    <Text as="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</Text>
                  </div>
                </>
              )}
              <div onClick={() => setShowAllAbout(!showAllAbout)} className="cursor-pointer ml-auto flex-row flex items-center gap-2 ">
                {!showAllAbout ? <ArrowDown /> : <ArrowUp />}
                {!showAllAbout ? 'Mostrar tudo' : 'Mostrar menos'}
              </div>
            </div>

            <Panel className="max-w-[1300px] flex flex-col ml-auto mr-auto font-bold mb-20">
              <div className="flex items-center gap-4 mb-5">
                <div className="flex-1 border-t border-gray-300"></div>
                <h1 className="text-white text-7xl whitespace-nowrap px-2 font-smythe">Serviços</h1>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>
              <div className="flex flex-row gap-20 justify-center">
                {services.map((item) => (
                  <>
                    <div className="flex flex-col w-[220px]">
                      <img src={item.serviceImg} className="rounded-xl h-[180px]" />
                      <Text className="text-white font-smythe text-4xl mt-2" as="h1">{item.name}</Text>
                      <Text className="mt-2 mb-5" as="span">{item.description}</Text>
                      <Text className="text-success text-lg mt-2 mb-5" as="span">{item.price}</Text>
                      <Button onClick={() => navigate('schedule')} className="btn-outline-primary ">Consultar</Button>
                    </div>
                  </>
                ))}
              </div>
            </Panel>

            <Panel className="max-w-[1300px] mr-auto ml-auto">
              <div className="flex items-center gap-4 mb-5">
                <div className="flex-1 border-t border-gray-300"></div>
                <h1 className="text-white text-7xl whitespace-nowrap px-2 font-smythe">Depoimento de usuários</h1>
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
                      <span>{item.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Panel>
          </div>
        </Panel>
      </Panel>

    </>
  )
}