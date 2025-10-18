import { HSeparator, Panel, Text } from "@app/ui";
import { Login } from "../../../../components/Login/Login";
import { useScheduleController } from "./useScheduleController";

export function SchedulePage() {
  const { step, isMobile, setSearchParams } = useScheduleController()
  console.log(step)
  return (
    <>
      <Panel className="flex min-h-screen justify-center">
        <div className="flex flex-col w-full max-w-[1500px]">
          <div className="flex items-center gap-4 mb-5">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className={`text-white font-smythe ${isMobile ? 'text-4xl' : 'text-7xl'} whitespace-nowrap px-2`}>
              Agendar Consulta
            </span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
          <div className={`flex flex-row items-center gap-3 ${isMobile ? 'mb-10 p-2' : 'mb-5'}`}>
            <img width={`${isMobile ? '50px' : '100px'}`} className="rounded-full" src="https://static.cartasciganas.com/images/users/avatars/cropped_1340205481.jpeg" />
            <div className="flex flex-col items-start">
              <Text as="p" className={`${!isMobile ? 'text-xl' : 'text-lg'} font-bold`}>Nome do Consultor</Text>
              <span className="text-success font-bold" >Online</span>
            </div>
          </div>
          <div className={`flex flex-row ${isMobile ? 'justify-between gap-2 p-2' : 'justify-center'}  w-full items-center`}>
            <div onClick={() => setSearchParams({ step: '1' })} className="flex flex-col items-center gap-2 cursor-pointer">
              <span className="bg-primary rounded-xl text-2xl font-smythe w-[50px] text-white font-bold">1</span>
              <Text className={`${step === '1' && 'text-primary'} font-bold ${isMobile ? '' : 'text-xl'}`} as="p">Cadastro/login</Text>
            </div>
            {!isMobile && (
              <HSeparator className={`border-b-2 mr-10 ml-10 w-10 mt-[none] mb-[none]`} />
            )}
            <div onClick={() => setSearchParams({ step: '2' })} className="flex flex-col items-center gap-2 cursor-pointer">
              <span className="bg-primary rounded-xl text-2xl font-smythe w-[50px] text-white font-bold">2</span>
              <Text className={`${step === '2' && 'text-primary'} font-bold ${isMobile ? '' : 'text-xl'}`} as="p">Escolher Serviço</Text>
            </div>
            {!isMobile && (
              <HSeparator className={`border-b-2 mr-10 ml-10 w-10 mt-[none] mb-[none]`} />
            )}
            <div onClick={() => setSearchParams({ step: '3' })} className="flex flex-col items-center gap-2 cursor-pointer">
              <span className="bg-primary rounded-xl text-2xl font-smythe w-[50px] text-white font-bold">3</span>
              <Text className={`${step === '3' && 'text-primary'} font-bold ${isMobile ? '' : 'text-xl'}`} as="p">Pagamento</Text>
            </div>
          </div>
          {
            step === '1' || !step ? (
              <Login />
            ) : ''
          }

          {
            step === '2' && (
              <Login />
            )
          }
        </div>

      </Panel>
    </>
  )
}