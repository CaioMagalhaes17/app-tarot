import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useGetUser } from "../../hooks/user/useGetUser";
import useStore from "../../state";

export function RoutesMiddleware({ children }: { children: JSX.Element }) {
  const location = useLocation()
  const { setClientInfos } = useStore()
  const { user, isLoading } = useGetUser()
  // const token = localStorage.getItem('accessToken')

  // const publicRoutes = [
  //   '/',
  //   'atendents/list',
  //   'atendents/profile'
  // ]

  const { pathname } = useLocation();

  useEffect(() => {
    document.getElementById('breadcrumb')?.scrollIntoView({ behavior: 'smooth' })
  }, [pathname]);

  const protectedRoutes = [
    'profile',
    'chat'
  ]
  useEffect(() => {
    if (!isLoading) {
      loadUser()
    }
    checkAuth()
  }, [location, user, isLoading])

  async function loadUser() {
    if (user) {
      setClientInfos({ isLoading: false, ...user })
    }
  }

  function checkAuth() {
    if (protectedRoutes.find((item) => location.pathname.includes(item))) {
      //navigate('/login')
    }
  }

  return children
}