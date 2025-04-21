import { createBrowserRouter, RouteObject } from "react-router-dom"
import { ClientHome } from "../pages/Home/client"
import DefaultLayout from "../components/DefaultLayout"


export const routes: RouteObject[] = [

  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <ClientHome />
      }
    ]

  }

]

export const appRoute = createBrowserRouter(routes)