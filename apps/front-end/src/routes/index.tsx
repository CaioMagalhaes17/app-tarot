import { createBrowserRouter, RouteObject } from "react-router-dom"
import { ClientHome } from "../pages/Home/client"
import DefaultLayout from "../components/DefaultLayout"
import { ChatComponent } from "../components/Chat"
import { AtendentsListComponent } from "../components/Atendents/List"
import { LoginPage } from "../pages/Login/Login"
import SignUpPage from "../pages/Login/Signup"


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
        element: <ChatComponent />
      },
      {
        path: '/atendents/list',
        element: <AtendentsListComponent />
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