import { Button, HSeparator, IconCalendar, Panel, Text } from "@app/ui";
import { Login } from "../../../../components/Login/Login";
import { useScheduleController } from "./useScheduleController";
import { ChooseService } from "./components/ChooseService";
import { Payment } from "./components/Payment";
import { useLocation } from "react-router-dom";
import { userImg } from "../../../../constants/images";
import Swal from "sweetalert2";
import { Star } from "lucide-react";
import { ChooseDate } from "./components/ChooseDate";
import dayjs from 'dayjs'

export function SchedulePage() {
  const { dateTime, step, isMobile, setSearchParams, isLogged, clientInfos, service, services, isLoadingServices } = useScheduleController()

  const location = useLocation()
  const steps = [
    'Cadastro/Login',
    'Serviço',
    'Agendamento',
    'Pagamento',
  ]
  function handleLogout() {
    Swal.fire({
      title: 'Deseja sair?',
      icon: 'info',
      confirmButtonText: 'Sair',
      showCancelButton: true,
      cancelButtonColor: '#dc3545',
      cancelButtonText: 'Cancelar'
    })
  }
  return (
    <>
      <Panel className="flex min-h-screen justify-center mt-5">
        <div className="flex flex-col w-full max-w-[1000px] p-2">
          <div className="flex items-center gap-4 mb-5">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className={`text-white font-smythe ${isMobile ? 'text-5xl' : 'text-8xl'} whitespace-nowrap px-2`}>
              Agendar Consulta
            </span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
          <div className={`flex flex-row items-center gap-3 ${isMobile ? '' : 'mt-5'} p-2 mb-3`}>
            <img width={`${isMobile ? '50px' : '100px'}`} className="rounded-full" src="https://static.cartasciganas.com/images/users/avatars/cropped_1340205481.jpeg" />
            <div className="flex flex-col items-start">
              <Text as="p" className={`${!isMobile ? 'text-5xl' : 'text-lg'} font-bold text-white font-smythe`}>Nome do Consultor</Text>
              <div className="flex flex-row mb-2">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={index < 3 ? "fill-yellow-500 text-yellow-500" : "fill-none text-gray-300"}
                    size={20}
                  />
                ))}
              </div>
            </div>
          </div>
          {service.name !== '' && (
            <div className={`flex flex-row items-center gap-3 ${isMobile ? 'mb-5 p-2' : 'mb-5'}`}>
              <img width={`${isMobile ? '50px' : '100px'}`} className="rounded-full" src={service.img} />
              <div className="flex flex-col items-start">
                <Text as="p" className={`${!isMobile ? 'text-xl' : 'text-lg'} font-bold text-white`}>{service.name}</Text>
                <span className="text-success font-bold" >R${service.price},00</span>
              </div>
            </div>
          )}

          {
            dateTime.time && dateTime.date ? (
              <div className={`flex flex-row items-center gap-3 ${isMobile ? 'mb-5 p-2' : 'mb-5'}`}>
                <IconCalendar width={`${isMobile ? '50px' : '100px'}`} height={`${isMobile ? '50px' : '100px'}`} className="text-gray" />
                <div className="flex flex-col items-start">
                  <Text as="p" className={`${!isMobile ? 'text-xl' : 'text-lg'} font-bold text-white`}>{dayjs(dateTime.date).format('DD/MM/YYYY')}</Text>
                  <span className="text-success font-bold" >{dateTime.time}</span>
                </div>
              </div>
            ) : ''
          }

          <div className={`flex flex-row ${isMobile ? 'justify-between gap-2 p-2' : 'justify-center'}  w-full mt-5 items-center`}>
            {
              steps.map((item, index) => (
                <>
                  <div onClick={() => setSearchParams({ step: String(index + 1) })} className="flex flex-col items-center gap-2 cursor-pointer">
                    <span className={`bg-primary rounded-xl ${isMobile ? 'text-3xl' : 'text-5xl'} font-smythe w-[50px] text-white font-bold`}>{index + 1}</span>
                    <Text className={`${(step === String(index + 1) || step === '0') && 'text-primary'} font-bold ${isMobile ? '' : 'text-xl'}`} as="p">{item}</Text>
                  </div>
                  {!isMobile && (
                    <HSeparator className={`${index === 3 && 'hidden'} border-b !border-b-[#ffffff] mr-10 ml-10 w-10 mt-[none] mb-[none]`} />
                  )}
                </>
              ))
            }
          </div>
          <HSeparator className="" />
          {
            step === '1' || !step ? (
              <>
                {isLogged ? (
                  <>
                    <div className="flex flex-col w-full justify-center items-center mt-10">
                      <img width="100" height="100" src={clientInfos.profileImg || userImg} className="rounded-full sombra" />
                      <div className="flex mt-3 flex-row gap-5 text-center">
                        <Text className={`text-white font-bold ${isMobile ? 'text-2xl' : 'text-3xl'}`} as="h1">{clientInfos.name}</Text>
                      </div>
                      <div className="flex flex-row gap-5 mt-10">
                        <Button onClick={handleLogout} className="btn-danger">Sair</Button>
                        <Button onClick={() => setSearchParams({ step: '2' })} className="btn-primary">Avançar</Button>
                      </div>
                    </div>
                  </>
                ) : (
                  <Login redirectUrl={location.pathname + '?step=2'} />
                )}
              </>
            ) : ''
          }

          {
            step === '2' && (
              <ChooseService services={services || []} isLoadingServices={isLoadingServices} />
            )
          }

          {
            step === '3' && (
              <ChooseDate />
            )
          }

          {
            step === '4' && (
              <Payment />
            )
          }
        </div>
      </Panel>
    </>
  )
}