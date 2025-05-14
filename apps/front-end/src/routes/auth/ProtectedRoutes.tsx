import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetUser } from "../../hooks/user/useGetUser";
import useStore from "../../state";

export function ProtectedRoutes({ children }: { children: JSX.Element }) {
  const location = useLocation()
  const { setClientInfos } = useStore()
  const { user, isLoading } = useGetUser()
  const navigate = useNavigate()
  const token = localStorage.getItem('accessToken')
  useEffect(() => {
    if (!isLoading && user) {
      loadUser()
    }
  }, [location, user, isLoading])

  async function loadUser() {
    //primeiro acesso
    if (!token && location.pathname !== '/') {
      navigate('login')
    }
    console.log(user)
    if (user) {
      setClientInfos(user)
    }

  }
  return children
}