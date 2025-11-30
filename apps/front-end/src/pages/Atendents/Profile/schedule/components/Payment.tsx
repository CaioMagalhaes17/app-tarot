import { HSeparator, IconCalendar, IconCard, IconPix, Text } from "@app/ui";
import { useScheduleController } from "../useScheduleController";
import dayjs from "dayjs";

export function Payment() {
  const { service, isMobile, dateTime } = useScheduleController()
  return (
    <>
      <div className="p-2 mt-2">
        <Text className="text-3xl text-center text-white font-extrabold" as='h1'>Pagamento</Text>
        <div className="bg-[#2f224736] mt-5 border border-[#323b45] rounded-xl flex flex-col ">
          <div className="bg-primary px-3 " style={{ borderTopLeftRadius: '0.75rem', borderTopRightRadius: '0.75rem' }}>
            <Text className="text-xl text-white font-bold" as='h1'>Resumo</Text>
          </div>
          <div className="p-2">
            {service.name !== '' && (
              <div className={`flex flex-row mt-3 items-center gap-3 ${isMobile ? 'mb-5 p-2' : 'mb-5'}`}>
                <img width={`${isMobile ? '50px' : '100px'}`} className="rounded-full" src={service.img} />
                <div className="flex flex-col items-start">
                  <Text as="p" className={`${!isMobile ? 'text-xl' : 'text-lg'} font-bold text-white`}>{service.name}</Text>
                  <span className="text-success text-xl font-bold" >R${service.price},00</span>
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
          </div>

        </div>


        <div className="bg-[#2f224736] border border-[#323b45] rounded-xl flex flex-col mt-7">
          <div className="bg-primary px-3 mb-2" style={{ borderTopLeftRadius: '0.75rem', borderTopRightRadius: '0.75rem' }}>
            <Text className="text-xl text-white font-bold" as='h1'>Formas de Pagamento</Text>
          </div>
          <div className="flex flex-col p-1">
            <div className="flex flex-row text-white font-extrabold text-2xl gap-5 p-3 items-center justify-center">
              <IconCard width="30" height="30" />
              <Text as='h1'>Cartão de Crédito</Text>
            </div>
            Você será redirecionado para a plataforma de pagamento
          </div>

          <HSeparator className="mb-5 mt-1" />
          <div className="flex flex-col p-1">
            <div className="flex flex-row text-white font-extrabold text-2xl gap-5 p-3 items-center justify-center">
              <IconPix width="30" height="30" />
              <Text as='h1'>PIX</Text>
            </div>
            Você será redirecionado para a plataforma de pagamento
          </div>
        </div>


      </div>
    </>
  )
}