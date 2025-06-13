import { Box } from "@app/ui"
import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import useStore from "../state"
import { FloatingChat } from "./Timeline/Mobile/FloatingChat"
import { useGetMessages } from "../hooks/messages/useGetMessages"
import { SidebarComponent } from "./Sidebar"

export default function DefaultLayout() {
  const { isMobile } = useStore()
  const { messages } = useGetMessages()
  return (
    <>
      <Box className={` leftbar-game-icon vertical font-extrabold full main-section antialiased relative font-nunito text-sm font-normal`}>
        <Box className="relative">
          <Box className="navbar-sticky main-container text-white-dark min-h-screen">
            <Box style={{ backgroundImage: isMobile ? 'url("/stars2.png")' : 'url("https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/bg-3WECX7L.jpg")' }} className="main-content flex flex-col min-h-screen">
              <div style={{ backgroundImage: 'linear-gradient(180deg, #08072BA8 30%, #0A051C 100%)' }} className="absolute inset-0 bg-transparent"></div>

              <Header />
              <SidebarComponent />
              <Suspense>
                {/* {!isMobile && (<ParticlesComponent />)} */}

                <Box className="hidden shadow-3xl shadow-4xl teste-default bg-success bg-warning bg-danger text-warning  text-success text-danger text-primary" />
                <Box data-overlap="false" id="page-container" className="animate__fadeIn animate__animated page-container scrollable">
                  <Outlet />
                  <FloatingChat messages={messages} />
                  <footer className="text-white py-6 px-4 mt-auto" style={{ backgroundColor: '#26123c' }}>
                    <div className="max-w-6xl mx-auto text-center space-y-2">
                      <p className="text-lg font-semibold">Nome do Site</p>
                      <p className="text-sm">© 2025 Nome do Site. Todos os direitos reservados.</p>
                      <p className="text-sm">Contato: contato@seudominio.com</p>
                      <p className="text-sm">Redes Sociais</p>
                    </div>
                  </footer>
                </Box>
              </Suspense>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}