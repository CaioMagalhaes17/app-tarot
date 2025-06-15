import { Box, HSeparator, IconMail, IconOldPhone } from "@app/ui"
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
            <Box style={{ backgroundImage: isMobile ? 'url("https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/bg-3WECX7L.jpg")' : 'url("https://templatekit.jegtheme.com/pandoora/wp-content/uploads/sites/171/2021/09/bg-3WECX7L.jpg")' }} className="main-content flex flex-col min-h-screen">
              <div style={{ backgroundImage: 'linear-gradient(180deg, #08072BA8 30%, #0A051C 100%)' }} className="absolute inset-0 bg-transparent"></div>

              <Header />
              <SidebarComponent />
              <Suspense>
                {/* {!isMobile && (<ParticlesComponent />)} */}

                <Box className="hidden shadow-3xl shadow-4xl teste-default bg-success bg-warning bg-danger text-warning  text-success text-danger text-primary" />
                <Box data-overlap="false" id="page-container" className="animate__fadeIn animate__animated page-container scrollable">
                  <Outlet />
                  <FloatingChat messages={messages} />
                  <footer className="py-6 px-4 mt-auto bg-[#0A051C]">
                    <HSeparator className="mb-5" />
                    <div className={`${isMobile ? 'flex-col' : 'flex-row '} max-w-6xl gap-5 flex ml-auto justify-between mr-auto`}>
                      <div className="flex flex-col text-left gap-5 max-w-[350px]">
                        <h1 className={`font-smythe text-white text-6xl`}>Astrologia Online</h1>
                        <span className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utelit tellusoi luctus nec ullamcorper mattis pulvinar dapibus leonec.</span>
                      </div>
                      <div className="flex flex-col text-left gap-2">
                        <h1 className="font-smythe text-white text-4xl">Contato</h1>
                        <span className="flex flex-row gap-2"><IconOldPhone />(31)9 9999-9999</span>
                        <span className="flex flex-row gap-2"><IconMail />emailexample@example.com</span>
                      </div>
                      <div className="flex flex-col text-left ">
                        <h1 className="font-smythe text-white text-4xl">Links Rápidos</h1>
                        <li>Home</li>
                        <li>Serviços</li>
                        <li>Atendentes</li>
                      </div>
                    </div>
                    <span className="text-left"></span>
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