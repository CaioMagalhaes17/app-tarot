import { Button, HSeparator, IconChat, Input, Panel, Text } from "@app/ui";
import { ArrowDown, ArrowUp, Star } from "lucide-react";
import { SetURLSearchParams, useNavigate } from "react-router-dom";
import { AtendentType } from "../../../@types/atendent.type";
import { Pagination } from "./pagination";
import { useState } from "react";

export function MobileAtendentsListComponent({ atendents, setSearchParams, page, searchParams }: { searchParams: URLSearchParams, page: number, setSearchParams: SetURLSearchParams, atendents: AtendentType[] }) {
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

  const [showService, setShowService] = useState<boolean>(false)
  return (
    <>
      <Panel className="mb-10  min-h-screen p-2 ml-auto mr-auto">

        <div className="flex items-center gap-4 mb-5">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="text-white font-smythe text-6xl whitespace-nowrap px-2">
            Atendentes
          </span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-full p-4">
            <div onClick={() => setShowService(!showService)} className="cursor-pointer ml-auto flex-row flex items-center gap-2 justify-between">
              <Text as="h1" className="font-smythe text-3xl text-left text-white">Serviços</Text>
              {!showService ? <ArrowDown /> : <ArrowUp />}
            </div>
          </div>
          {showService && (
            <div className="flex flex-wrap gap-10 ml-10 mb-10 mt-5">
              {services.map((item) => (
                <>
                  <div className="flex flex-col h-[260px] w-[130px]">
                    <img src={item.serviceImg} className="rounded-xl h-[150px]" />
                    <Text className="text-white font-smythe text-2xl mt-2" as="h1">{item.name}</Text>
                    <Button onClick={() => setSearchParams({ service: item.name })} className={`mt-auto ${searchParams.get('service') === item.name ? 'btn-primary' : 'btn-outline-primary'}`}>{searchParams.get('service') === item.name ? 'Escolhido' : 'Escolher'}</Button>
                  </div>
                </>
              ))}
            </div>
          )}

          <Panel className="w-full p-4">
            <Input type="text" className="mt-5" placeholder="Pesquisar por Atendentes..." />
            <HSeparator />
          </Panel>

          <Panel className="h-full w-full rounded-xl flex flex-col p-4  font-bold ">
            <div className="font-bold flex mb-10 flex-wrap items-center justify-center font-bold gap-10">
              {atendents.map((item) => (
                <div style={{ backgroundImage: 'linear-gradient(360deg, #22164696 0%, #12133e5e 60%)' }} className="border border-dark flex p-6 flex-col items-center cursor-pointer rounded-xl w-[420px] h-[420px] p-2">
                  <div className="flex flex-row gap-2">
                    <div className="flex flex-col items-center gap-2 flex-shrink-0">
                      <img src={item.profileImg} width={'80px'} className="rounded-full mt-5 object-cover" />
                      <div className="flex flex-row ">
                        {[...Array(item.rating)].map((_, index) => (
                          <Star
                            key={index}
                            className={index < 5 ? "fill-yellow-500 text-yellow-500" : "fill-none text-gray-300"}
                            size={16}
                          />
                        ))}
                      </div>
                      <Text className="border-success border text-lg text-success rounded-xl px-2" as="span">Online</Text>

                    </div>
                    <div className="flex flex-col gap-2 items-start justify-center">
                      <Text className="text-white text-3xl font-smythe" as="h1">{item.name}</Text>
                      <span className=" text-left">🔮 Médium e Paranormal</span>
                      <span className="mt-5 text-lg text-success">R$ 3,99/min</span>
                    </div>
                  </div>

                  <Text as="span" className="mt-5 text-white-dark">{item.bio}</Text>

                  <div className="flex flex-row mt-auto gap-5 w-full p-2">
                    <Button onClick={() => navigate('/atendents/profile/123')} className="btn-outline-primary w-full"><IconChat /><span className="ml-2">Perfil</span></Button>
                  </div>
                </div>
              ))}
            </div>


          </Panel>
        </div>
        <Pagination pages={5} currentPage={page} setSearchParams={setSearchParams} />
      </Panel >
    </>

  )
}