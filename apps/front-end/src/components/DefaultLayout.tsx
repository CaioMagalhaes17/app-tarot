import { Box, HSeparator, IconHelpCircle, IconMail, IconOldPhone } from "@app/ui"
import { Suspense, useState } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Header } from "./Header"
import useStore from "../state"
import { SidebarComponent } from "./Sidebar"
import Breadcrumbs from "./BreadCrumb"
import { getBackgroundImg } from "../utils/get-bg-image"
import { getDesktopGradientValues, getMobileGradientValues } from "../utils/get-gradient-values"

export default function DefaultLayout() {
  const { isMobile } = useStore()
  const { pathname } = useLocation()
  const [showFooter, setShowFooter] = useState(false)
  console.log(pathname)
  return (
    <>
      <Box className={` leftbar-game-icon vertical font-extrabold full main-section antialiased relative font-nunito text-sm font-normal`}>
        <Box className="relative">
          <Box className="navbar-sticky main-container text-white-dark min-h-screen">
            <Box style={{ backgroundImage: `url(${getBackgroundImg(pathname)})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className="main-content flex flex-col min-h-screen">
              <Header />
              <div style={{ backgroundImage: `linear-gradient(180deg, #08072BA8 ${isMobile ? getMobileGradientValues(pathname)[0] : getDesktopGradientValues(pathname)[0]}, #0A051C ${isMobile ? getMobileGradientValues(pathname)[1] : getDesktopGradientValues(pathname)[1]})` }} className="absolute inset-0 bg-transparent"></div>

              <SidebarComponent />
              <Suspense>
                {/* {!isMobile && (<ParticlesComponent />)} */}

                <Box className="hidden shadow-3xl shadow-4xl teste-default bg-success bg-warning bg-danger text-warning  text-success text-danger text-primary" />
                <Box data-overlap="false" id="page-container" className="animate__fadeIn animate__animated page-container scrollable">
                  {pathname !== '/' && (
                    <div className="mr-auto ml-auto max-w-[1600px] p-3 h-[80px]">
                      <Breadcrumbs />
                    </div>
                  )}

                  <Outlet />
                  {/* <FloatingChat messages={messages} /> */}
                  <HSeparator className="" />
                  <footer className="py-6 px-4 mt-auto bg-[#0A051C]">
                    <button onClick={() => setShowFooter(!showFooter)}>
                      <IconHelpCircle />
                    </button>
                    {showFooter && (
                      <>
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
                      </>
                    )}
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