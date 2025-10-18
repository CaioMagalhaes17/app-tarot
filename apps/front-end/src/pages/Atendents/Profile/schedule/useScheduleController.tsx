import { useSearchParams } from "react-router-dom"
import useStore from "../../../../state"
import { useEffect } from "react"
import Swal from "sweetalert2"

export function useScheduleController() {
  const userStore = useStore()
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    const isLogged = userStore.clientInfos.name !== "";

    if (isLogged) {
      setSearchParams({ step: "2" });
    } else {
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
  }, [setSearchParams]);

  const step = searchParams.get('step')
  return {
    step,
    isMobile: userStore.isMobile,
    setSearchParams
  }
}