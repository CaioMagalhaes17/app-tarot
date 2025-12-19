import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom"
import DefaultLayout from "../components/DefaultLayout"
import { LoginPage } from "../pages/Login/Login"
import SignUpPage from "../pages/Login/Signup"
import { ChatPage } from "../pages/Chat/Client"
import { AtendentsSearchPage } from "../pages/Atendents/Search"
import { AtendentProfilePage } from "../pages/Atendents/Profile"
import { VerifyEmailMagicLink } from "../pages/Login/VerifyEmailMagicLink"
import { RoutesMiddleware } from "./auth/RoutesMiddleware"
import { ClientProfilePage } from "../pages/Profile/client"
import { HomePage } from "../pages/Home"
import { MinutesPage } from "../pages/Minutes"
import { SchedulePage } from "../pages/Atendents/Profile/schedule"
import { AtendentServicesPage } from "../pages/Atendent/Services"


export const routes: RouteObject[] = [

  {
    element: (
      <RoutesMiddleware>
        <DefaultLayout />
      </RoutesMiddleware>
    ),

    children: [
      {
        path: '/',
        element: <HomePage />,
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
        element: <AtendentProfilePage />,

      },
      {
        path: '/atendents',
        element: <Navigate to="/atendents/list" replace />
      },
      {
        path: '/atendents/profile',
        element: <Navigate to="/atendents/list" replace />
      },
      {
        path: '/atendents/profile/:id/schedule',
        element: <SchedulePage />
      },
      {
        path: '/profile',
        element: <ClientProfilePage />
      },
      {
        path: '/minutes',
        element: <MinutesPage />,
      },
      {
        path: '/atendent/services',
        element: <AtendentServicesPage />,
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
  },
  {
    path: '/auth/magic-link/:token',
    element: <VerifyEmailMagicLink />
  },
]

export const appRoute = createBrowserRouter(routes)