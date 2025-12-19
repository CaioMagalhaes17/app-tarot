import { Button, HSeparator, IconUser, Input, Panel, Text } from "@app/ui";
import { Star } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MobileAtendentsListComponent } from "./mobile-list";
import { Pagination } from "./pagination";
import useStore from "../../../state";
import { useSearchAtendents } from "../../../hooks/atendents/useSearchAtendents";

export function AtendentsSearchPage() {
  const { isMobile } = useStore()

  const [searchParams, setSearchParams] = useSearchParams({
    page: '',
    service: '',
    search: '',
  })
  const { atendents, pagination } = useSearchAtendents({
    limit: 6,
    page: Number(searchParams.get('page')) || 1
  }, searchParams)

  const navigate = useNavigate()
  return (


    <>
      {isMobile ? (
        <MobileAtendentsListComponent page={Number(searchParams.get('page')) || 1} atendents={atendents} setSearchParams={setSearchParams} />
      ) : (
        <>
          <Panel className="mb-10  min-h-screen max-w-[1400px] ml-auto mr-auto">
            <div className="flex items-center gap-4 mb-5">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="text-white font-smythe text-8xl whitespace-nowrap px-2">
                Atendentes
              </span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center">

              <div className="max-w-[700px]">
                <span className="text-xl">
                  Escolha o Atendente que mais combina com seu momento, entre em contato e receba sua orientação espiritual personalizada com descrição e acolhimento.
                </span>
              </div>
              <Panel className="w-full">
                <Input onChange={(e) => setSearchParams({ search: e.currentTarget.value })} type="text" className="mt-5" placeholder="Pesquisar por Atendentes..." />
                <HSeparator />
              </Panel>
              <Panel className="h-full w-full rounded-xl flex flex-col p-4 mt-5 font-bold ">
                <div className="font-bold flex mb-10 flex-wrap items-center justify-center font-bold gap-10">
                  {atendents && atendents.length > 0 ? (
                    <>
                      {atendents.map((item) => (
                        <div style={{ backgroundImage: 'linear-gradient(360deg, #22164696 0%, #12133e5e 60%)' }} className="border border-dark flex flex-col items-center cursor-pointer rounded-xl w-[420px] h-[420px] p-4">
                          <div className="flex flex-row gap-2">
                            <div className="flex flex-col items-center gap-2 flex-shrink-0">
                              <img
                                src={item.user.profileImg}
                                className="!w-[150px] rounded-full mt-5 object-cover"
                              />
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
                            <div className="flex flex-col items-start justify-center">
                              <Text className="text-white text-4xl font-smythe" as="h1">{item.name}</Text>
                              <span className="text-lg">🔮 Médium e Paranormal</span>
                              <span className="mt-5 text-lg text-success">R$ 3,99/min</span>
                            </div>
                          </div>

                          <Text as="span" className="mt-5 text-white-dark">{item.bio}</Text>

                          <div className="flex flex-row mt-auto gap-5 w-full p-2">
                            <Button onClick={() => navigate('/atendents/profile/123')} className="btn-outline-primary w-full"><IconUser /><span className="ml-2">Perfil</span></Button>
                          </div>
                        </div>
                      ))}
                    </>
                  ) : ''}
                </div>
              </Panel>
            </div>
            <Pagination pages={5} currentPage={Number(searchParams.get('page')) || 1} setSearchParams={setSearchParams} />
          </Panel>
        </>
      )}
    </>


  )
}