import { useSearchParams } from "react-router-dom"
import useStore from "../../../../state"
import { useEffect } from "react"
import Swal from "sweetalert2"

export function useScheduleController() {

  const userStore = useStore()
  const [searchParams, setSearchParams] = useSearchParams()
  const step = searchParams.get('step')
  const isLogged = userStore.clientInfos.name !== "";
  const avaliableHours = [
    '09:00',
    '11:00',
    '13:00'
  ]
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
    avaliableHours
  }
}