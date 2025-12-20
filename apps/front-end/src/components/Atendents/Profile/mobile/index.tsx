import { Button, HSeparator, IconChat, IconMoon, IconQuote, Text } from "@app/ui";
import { Clock, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AtendentService } from "../../../../@types/atendent-service.type";
import { FeedbackType } from "../../../../@types/atendent.type";
import { Schedule } from "../../../../@types/schedule.type";
import { ScheduleViewModal } from "../ScheduleViewModal";

type MobileAtendentProfileComponentProps = {
  profileImg: string;
  name: string;
  rating: number;
  bio: string;
  schedule?: Schedule;
  services: AtendentService[];
  feedbacks: FeedbackType[];
  isLoadingServices: boolean;
  isLoadingFeedbacks: boolean;
}

export function MobileAtendentProfileComponent({
  profileImg,
  name,
  rating,
  bio,
  schedule,
  services,
  feedbacks,
  isLoadingServices,
  isLoadingFeedbacks
}: MobileAtendentProfileComponentProps) {
  const navigate = useNavigate()
  return (
    <>
      <div className="flex min-h-screen justify-center">
        <div className="flex flex-col font-bold min-w-[70%]">
          <div className="p-4 ">
            <div className="flex max-w-[1100px] ml-auto mr-auto relative flex-row  font-bold gap-5">
              <img width={'130px'} src={profileImg} className="h-[130px] rounded-3xl sombra" />
              <div className="flex flex-col max-w-[550px]">
                <Text className="text-5xl font-smythe text-dark dark:text-white" as="h1">{name}</Text>
                <Text className="px-2 rounded-xl bg-green w-fit text-white text-lg mb-2" as="h1">Online</Text>

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
            <div className="flex flex-col items-center gap-5 mt-5">
              <Button onClick={() => navigate('schedule')} className="btn-primary flex flex-row gap-2 w-full "><IconChat /> Agendar consulta</Button>
              <Button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="btn-purple flex w-full flex-row gap-2"><IconMoon />Serviços</Button>
              <Button onClick={() => document.getElementById('feedbacks')?.scrollIntoView({ behavior: 'smooth' })} className="btn-warning  w-full  flex flex-row gap-2"><Star />Avaliações</Button>
              <ScheduleViewModal
                schedule={schedule}
                trigger={
                  <Button className="btn-outline-primary flex w-full flex-row gap-2">
                    <Clock size={20} /> Horários de Atendimento
                  </Button>
                }
              />
            </div>
          </div>
          <div className="p-4 mt-5">
            <div className="max-w-[1100px] flex flex-col ml-auto mr-auto font-bold">

              <div className="flex items-center gap-4 mb-5">
                <div className="flex-1 border-t border-gray-300"></div>
                <h1 className="text-white text-5xl whitespace-nowrap px-2 font-smythe">Sobre o consultor</h1>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>

              <div className="text-left text-white text-3xl font-normal">
                <Text as="span">{bio}</Text>
              </div>
            </div>
          </div>

          <div id="services" className="p-4 mt-5">
            <div className="flex flex-col ml-auto mr-auto font-bold">
              <div className="flex items-center gap-4 mb-5">
                <div className="flex-1 border-t border-gray-300"></div>
                <h1 className="text-white text-5xl whitespace-nowrap px-2 font-smythe">Serviços</h1>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>
              {isLoadingServices ? (
                <Text className="text-white text-center" as="p">Carregando serviços...</Text>
              ) : services.length === 0 ? (
                <Text className="text-white text-center" as="p">Nenhum serviço disponível</Text>
              ) : (
                <div className="flex flex-wrap gap-10 ">
                  {services.filter(service => service.isActive).map((item) => (
                    <div key={item.id} className="flex flex-col w-[150px]">
                      <img src={item.service.serviceImg} className="rounded-xl h-[150px]" />
                      <Text className="text-white font-smythe text-2xl mt-2" as="h1">{item.service.name}</Text>
                      <Text className="mt-2 mb-2" as="span">{item.description}</Text>
                      <Text className="text-success text-lg mt-2 mb-5" as="span">R${(item.price / 100).toFixed(2).replace('.', ',')}</Text>
                      <Button className="btn-primary">Consultar</Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div id="feedbacks" className="p-4 rounded-xl mt-5 mb-20">
            <div className="flex flex-col ml-auto mr-auto font-bold">
              <div className="flex items-center gap-4 mb-5">
                <div className="flex-1 border-t border-gray-300"></div>
                <h1 className="text-white text-4xl whitespace-nowrap px-2 font-smythe">Depoimento de usuários</h1>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>
              {isLoadingFeedbacks ? (
                <Text className="text-white text-center" as="p">Carregando feedbacks...</Text>
              ) : feedbacks.length === 0 ? (
                <Text className="text-white text-center" as="p">Nenhum feedback disponível</Text>
              ) : (
                <div className="flex flex-col items-center justify-center gap-5 w-full">
                  <div className="flex flex-col gap-10">
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
            </div>
          </div>
        </div>
      </div>
    </>
  )
}