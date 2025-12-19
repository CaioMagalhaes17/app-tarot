import { Button, IconChat, IconMoon, IconQuote, Panel, Text } from "@app/ui";
import { ArrowDown, ArrowUp, Star } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AtendentService } from "../../../@types/atendent-service.type";
import { FeedbackType } from "../../../@types/atendent.type";

type AtendentProfileComponentProps = {
  profileImg: string;
  name: string;
  rating: number;
  bio: string;
  services: AtendentService[];
  feedbacks: FeedbackType[];
  isLoadingServices: boolean;
  isLoadingFeedbacks: boolean;
}

export function AtendentProfileComponent({ 
  profileImg, 
  name, 
  rating, 
  bio,
  services,
  feedbacks,
  isLoadingServices,
  isLoadingFeedbacks
}: AtendentProfileComponentProps) {
  const navigate = useNavigate()

  const [showAllAbout, setShowAllAbout] = useState<boolean>(false)
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
                <Button onClick={() => navigate('schedule')} className="btn-primary btn-xl flex flex-row gap-2 w-full"><IconChat /> Consulta por Chat</Button>
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
                <Text as="span">{bio}</Text>
              </div>
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
              {isLoadingServices ? (
                <Text className="text-white text-center" as="p">Carregando serviços...</Text>
              ) : services.length === 0 ? (
                <Text className="text-white text-center" as="p">Nenhum serviço disponível</Text>
              ) : (
                <div className="flex flex-row gap-20 justify-center">
                  {services.filter(service => service.isActive).map((item) => (
                    <div key={item.id} className="flex flex-col w-[220px]">
                      <img src={item.service.serviceImg} className="rounded-xl h-[180px]" />
                      <Text className="text-white font-smythe text-4xl mt-2" as="h1">{item.service.name}</Text>
                      <Text className="mt-2 mb-5" as="span">{item.description}</Text>
                      <Text className="text-success text-lg mt-2 mb-5" as="span">R${item.price.toFixed(2).replace('.', ',')}</Text>
                      <Button onClick={() => navigate('schedule')} className="btn-outline-primary ">Consultar</Button>
                    </div>
                  ))}
                </div>
              )}
            </Panel>

            <Panel className="max-w-[1300px] mr-auto ml-auto">
              <div className="flex items-center gap-4 mb-5">
                <div className="flex-1 border-t border-gray-300"></div>
                <h1 className="text-white text-7xl whitespace-nowrap px-2 font-smythe">Depoimento de usuários</h1>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>
              {isLoadingFeedbacks ? (
                <Text className="text-white text-center" as="p">Carregando feedbacks...</Text>
              ) : feedbacks.length === 0 ? (
                <Text className="text-white text-center" as="p">Nenhum feedback disponível</Text>
              ) : (
                <div className="flex flex-col items-center justify-center gap-5 w-full">
                  <div className="flex flex-row gap-10">
                    {feedbacks.map((item, index) => (
                      <div key={index} className="border border-dark flex items-center flex-col p-10">
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
                        <span className="text-white">{item.description}</span>
                        <span className="text-gray-400 text-sm mt-2">{item.date}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Panel>
          </div>
        </Panel>
      </Panel>

    </>
  )
}