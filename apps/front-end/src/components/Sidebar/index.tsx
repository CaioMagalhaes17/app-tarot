import { Button, IconHome, IconPlus, IconUser, Sidebar } from "@app/ui";
import useStore from "../../state";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export function SidebarComponent() {
  const { closeSidebar, setCloseSidebar } = useStore()
  const location = useLocation()
  useEffect(() => {
    setCloseSidebar(false)
  }, [location])
  return (
    <>
      <Sidebar className="border border-dark " style={{ left: !closeSidebar ? '-305px' : '0px' }}>
        <div className="flex flex-col w-full font-bold">
          <div className="flex flex-row gap-5 justify-center mb-10">
            <Button className="btn-primary"><IconPlus className="mr-2" />Minutos</Button>
            <Button className="btn-outline-primary"><IconUser className="mr-2" />Perfil</Button>
          </div>
          <Link to="/" className="text-white flex flex-row text-lg hover:bg-dark rounded-xl p-2 items-center gap-2"><IconHome />Inicio</Link>
          <Link to="/" className="text-white flex flex-row text-lg hover:bg-dark rounded-xl p-2 items-center gap-2"><IconHome />Atendentes</Link>
        </div>
      </Sidebar >
    </>
  )
}