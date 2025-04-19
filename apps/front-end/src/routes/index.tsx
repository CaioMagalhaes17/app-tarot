import { createBrowserRouter, RouteObject } from "react-router-dom"
import { Home } from "../pages/Home"
import DefaultLayout from "../components/DefaultLayout"


export const routes: RouteObject[] = [

  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]

  }

]

export const appRoute = createBrowserRouter(routes)