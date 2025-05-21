import { createBrowserRouter, RouteObject } from "react-router-dom"
import DefaultLayout from "../components/DefaultLayout"
import { LoginPage } from "../pages/Login/Login"
import SignUpPage from "../pages/Login/Signup"
import { ChatPage } from "../pages/Chat/Client"
import { AtendentsSearchPage } from "../pages/Atendents/Search"
import { AtendentProfilePage } from "../pages/Atendents/Profile"
import { VerifyEmailMagicLink } from "../pages/Login/VerifyEmailMagicLink"
import { ProtectedRoutes } from "./auth/ProtectedRoutes"
import { ClientProfilePage } from "../pages/Profile/client"
import { TimelinePage } from "../pages/Timeline"


export const routes: RouteObject[] = [

  {
    element: (
      <ProtectedRoutes>
        <DefaultLayout />
      </ProtectedRoutes>
    ),
    children: [
      {
        path: '/',
        element: <TimelinePage />
      },
      {
        path: '/chat',
        element: <ChatPage />
      },
      {
        path: '/atendents/list',
        element: <AtendentsSearchPage />
      },
      {
        path: '/atendents/profile/:id',
        element: <AtendentProfilePage />
      },
      {
        path: '/profile',
        element: <ClientProfilePage />
      }

    ]

  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/signup',
    element: <SignUpPage />
  },
  {
    path: '/auth/magic-link/:token',
    element: <VerifyEmailMagicLink />
  }

]

export const appRoute = createBrowserRouter(routes)