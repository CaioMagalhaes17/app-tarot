import { Button, IconChat, IconSearch, IconUser, Text } from "@app/ui";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MobileAtendentRow } from "../../../../components/Atendents/List/mobile/atendentRow";
import { useHomeController } from "../useHomeController";

export function Atendents() {
  const { useSearchAtendents, isMobile } = useHomeController()
  const { atendents } = useSearchAtendents()
  const navigate = useNavigate()
  return (
    <div id="atendents" className="backdrop-blur-md border-[#6028dc1a] bg-[#26123c]/20 border rounded-xl w-full p-6 ml-auto mr-auto">
      <div className={`max-w-[1200px] ml-auto mr-auto ${isMobile ? '' : 'mt-5'}`}>
        <Text as="h1" className={`text-4xl ${isMobile ? 'mb-5' : 'mb-20'} text-center font-extrabold text-white`}>Atendentes Disponíveis</Text>
        <div className={`flex flex-row mb-5 justify-center gap-5 ${!isMobile ? 'mr-[100px]' : ''}`}>
          {!isMobile && (
            <div className="ml-auto" />
          )}
          <Button className={`btn-outline-primary ${isMobile ? 'btn-sm' : ''}`}>Quero ser Atendente</Button>
          <Button onClick={() => navigate('/atendents/list')} className={`btn-primary ${isMobile ? 'btn-sm' : ''}`}><IconSearch className="mr-2" />Procurar mais</Button>
        </div>
        <div className="font-bold flex mb-10 flex-wrap items-center font-bold gap-5 justify-center">
          {atendents.map((item, i) => (
            <>
              {isMobile ? (
                <MobileAtendentRow bio={item.bio} name={item.name} profileImg={item.profileImg} rating={item.rating} key={i} />
              ) : (
                <div className="flex flex-col items-center hover:bg-[#26123c]/100 cursor-pointer bg-[#26123c]/50 border-[#6028dc1a] border-[4px] rounded-xl w-[310px] h-[450px] p-4">
                  <Text className="text-white text-xl" as="h1">{item.name}</Text>
                  <img src={item.profileImg} width={'150px'} className="rounded-full mt-5" />
                  <Text as="span" className="text-lg mt-5 text-white-dark">{item.bio}</Text>
                  <div className="flex flex-row mt-5">
                    {[...Array(item.rating)].map((_, index) => (
                      <Star
                        key={index}
                        className={index < 5 ? "fill-yellow-500 text-yellow-500" : "fill-none text-gray-300"}
                        size={32}
                      />
                    ))}
                  </div>
                  <div className="flex flex-row mt-5 gap-5">
                    <Button className="btn-outline-primary"><IconUser className="mr-2" />Perfil</Button>
                    <Button onClick={() => navigate('/chat')} className="btn-primary"><IconChat /><span className="ml-2">Chamar</span></Button>
                  </div>
                </div>
              )}
            </>

          ))}
        </div>
        <Text as="span" className="text-xl">Ver Mais</Text>

      </div>
    </div>
  )
}