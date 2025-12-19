import { useSearchParams, useParams } from "react-router-dom"
import useStore from "../../../../state"
import { useEffect, useMemo } from "react"
import Swal from "sweetalert2"
import { useGetAtendentAvailability } from "../../../../hooks/atendents/useGetAtendentAvailability"
import dayjs from "dayjs"
import { AvailabilityDay, AvailableSlot } from "../../../../@types/availability.type"

export function useScheduleController() {

  const userStore = useStore()
  const [searchParams, setSearchParams] = useSearchParams()
  const { id: atendentId } = useParams<{ id: string }>()
  const step = searchParams.get('step')
  const isLogged = userStore.clientInfos.name !== "";
  
  // Define o range de datas (hoje até 30 dias à frente)
  const startDate = dayjs().format('YYYY-MM-DD')
  const endDate = dayjs().add(30, 'days').format('YYYY-MM-DD')
  
  // Busca disponibilidade do atendente
  const { availability, isLoading: isLoadingAvailability } = useGetAtendentAvailability(
    atendentId,
    { startDate, endDate }
  )

  // Calcula os horários disponíveis baseado na data selecionada
  const avaliableHours = useMemo(() => {
    if (!availability || !userStore.dateTime.date) {
      return []
    }

    // Formata a data selecionada para comparar
    const selectedDate = dayjs(userStore.dateTime.date).format('YYYY-MM-DD')
    
    // Encontra o dia correspondente na disponibilidade
    const selectedDay = availability.days.find((day: AvailabilityDay) => day.date === selectedDate)
    
    if (!selectedDay) {
      return []
    }

    // Filtra slots para mostrar apenas intervalos de 1 hora
    // Considera apenas horários que começam em horas cheias (ex: 09:00, 10:00, não 09:30)
    const oneHourSlots = selectedDay.availableSlots
      .filter((slot: AvailableSlot) => {
        // Verifica se o horário começa em hora cheia (minutos = 00)
        const [hours, minutes] = slot.start.split(':').map(Number)
        if (minutes !== 0) {
          return false
        }

        // Calcula a duração do slot em minutos
        const start = dayjs(`2000-01-01 ${slot.start}`, 'YYYY-MM-DD HH:mm')
        const end = dayjs(`2000-01-01 ${slot.end}`, 'YYYY-MM-DD HH:mm')
        const durationMinutes = end.diff(start, 'minute')
        
        // Filtra apenas slots com pelo menos 60 minutos (1 hora)
        return durationMinutes >= 60
      })
      .map((slot: AvailableSlot) => slot.start)
      // Remove duplicatas (caso haja múltiplos slots começando no mesmo horário)
      .filter((hour: string, index: number, self: string[]) => self.indexOf(hour) === index)
      .sort()

    return oneHourSlots
  }, [availability, userStore.dateTime.date])

  useEffect(() => {
    if (userStore.clientInfos.isLoading) return
    if (!isLogged) {
      Swal.fire({
        toast: true,
        position: "top",        // mostra no topo da tela
        icon: "warning",
        title: "Login/cadastro é obrigatório",
        showConfirmButton: false,
        timer: 2000,            // desaparece após 2 segundos
      });

      setSearchParams({ step: "1" });
    }
  }, [searchParams, isLogged, userStore.clientInfos.isLoading]);


  return {
    step,
    isMobile: userStore.isMobile,
    setSearchParams,
    isLogged,
    clientInfos: userStore.clientInfos,
    service: userStore.service,
    setService: userStore.setService,
    dateTime: userStore.dateTime,
    setDateTime: userStore.setDateTime,
    avaliableHours,
    availability,
    isLoadingAvailability
  }
}