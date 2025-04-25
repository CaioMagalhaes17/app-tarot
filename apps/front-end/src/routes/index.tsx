import { createBrowserRouter, RouteObject } from "react-router-dom"
import { ClientHome } from "../pages/Home/client"
import DefaultLayout from "../components/DefaultLayout"
import { LoginPage } from "../pages/Login/Login"
import SignUpPage from "../pages/Login/Signup"
import { ChatPage } from "../pages/Chat/Client"
import { AtendentsSearchPage } from "../pages/Atendents/Search"


export const routes: RouteObject[] = [

  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <ClientHome />
      },
      {
        path: '/chat',
        element: <ChatPage />
      },
      {
        path: '/atendents/list',
        element: <AtendentsSearchPage />
      },

    ]

  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/signup',
    element: <SignUpPage />
  }

]

export const appRoute = createBrowserRouter(routes)