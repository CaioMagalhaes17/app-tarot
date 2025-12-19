import { Button, Text } from "@app/ui";
import { DayPicker } from "react-day-picker";
import { ptBR } from "react-day-picker/locale";
import "react-day-picker/style.css";
import { useScheduleController } from "../useScheduleController";

export function ChooseDate() {
  const { dateTime, setDateTime, avaliableHours, setSearchParams, isMobile } = useScheduleController()

  return (
    <>
      <div className="mt-5 flex flex-col items-center gap-10">
        <Text className="text-3xl text-center text-white font-extrabold" as='h1'>Agendamento</Text>

        <div className="bg-[#2f224736] border border-[#323b45] rounded-xl flex flex-col ">
          <div className="bg-primary px-3 mb-2" style={{ borderTopLeftRadius: '0.75rem', borderTopRightRadius: '0.75rem' }}>
            <Text className={`text-xl text-white font-bold ${isMobile && 'ml-20'}`} as='h1'>Escolha o dia desejado para a consulta</Text>
          </div>
          <div className="p-4">
            <DayPicker
              disabled={{ before: new Date() }}
              animate
              mode="single"
              selected={dateTime.date}
              onSelect={(date) => setDateTime({ date, time: dateTime.time })}
              timeZone={'-03:00'}
              locale={ptBR}

              lang="ptBR"
              classNames={{
                day: 'text-white',
                weekday: 'text-lg text-white capitalize',
                month_caption: `capitalize text-xl text-white font-bold text-left ${isMobile && 'ml-20'}`,
              }}
            />
          </div>
        </div>


        <div className={`bg-[#2f224736] border border-[#323b45] rounded-xl flex flex-col ${!isMobile ? 'w-[549px]' : 'w-[350px]'} `}>
          <div className="bg-primary px-3 mb-2" style={{ borderTopLeftRadius: '0.75rem', borderTopRightRadius: '0.75rem' }}>
            <Text className="text-xl text-white font-bold" as='h1'>Escolha a hora</Text>
          </div>
          <div className="p-4 ">
            <select onChange={(val) => setDateTime({ date: dateTime.date, time: val.target.value })} className="bg-black w-full">
              {avaliableHours.map((h) => (
                <>
                  <option>{h}</option>
                </>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end mt-5" >
        <Button onClick={() => setSearchParams({ step: '4' })} className="btn-primary mt-10">Avançar</Button>
      </div>
    </>
  )
}