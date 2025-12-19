import { useNavigate, useNavigation } from "react-router-dom";
import useStore from "../../state";

export function useHeaderController() {
  const { isMobile, clientInfos, setClientInfos, setAtendent, setCloseSidebar, closeSidebar } = useStore()
  const navigate = useNavigate()
  const navigation = useNavigation()

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
      profileImg: '',
      isLoading: true
    })
    setAtendent(null)
    localStorage.removeItem('accessToken')
    window.location.reload()
  }

  return { isMobile, clientInfos, setClientInfos, isLogged, navigate, handleLogout, setCloseSidebar, closeSidebar, navigation, isAtendent: clientInfos.isAtendent }
}