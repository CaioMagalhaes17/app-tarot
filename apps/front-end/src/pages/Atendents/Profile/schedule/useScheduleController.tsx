import { useSearchParams, useParams } from "react-router-dom"
import useStore from "../../../../state"
import { useEffect, useMemo } from "react"
import Swal from "sweetalert2"
import { useGetAtendentAvailability } from "../../../../hooks/atendents/useGetAtendentAvailability"
import { useGetAtendentServices } from "../../../../hooks/atendents/useGetAtendentServices"
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

  // Busca serviços do atendente
  const { services, isLoading: isLoadingServices } = useGetAtendentServices(atendentId)
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
    return selectedDay.availableSlots.map((slot: AvailableSlot) => slot.start)
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
    isLoadingAvailability,
    services,
    isLoadingServices
  }
}