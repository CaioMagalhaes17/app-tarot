import { useNavigate } from "react-router-dom";
import useStore from "../../state";

export function useHeaderController() {
  const { isMobile, clientInfos, setClientInfos, setCloseSidebar, closeSidebar } = useStore()
  const navigate = useNavigate()

  function isLogged(): boolean {
    if (clientInfos.name) {
      return true
    }
    return false
  }

  function handleLogout() {
    setClientInfos({
      createdAt: '',
      id: '',
      isAtendent: false,
      isVerified: false,
      login: '',
      name: '',
      permission: '',
      profileImg: ''
    })
    localStorage.removeItem('accessToken')
    window.location.reload()
  }

  return { isMobile, clientInfos, setClientInfos, isLogged, navigate, handleLogout, setCloseSidebar, closeSidebar }
}