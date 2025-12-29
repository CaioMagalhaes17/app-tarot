import { IconMenu, Text, Header as UIHeader } from "@app/ui";
import { useHeaderController } from "./useHeaderController";
import { LoginButtons } from "./LoginButtons";
import { UserButtons } from "./UserButtons";
import { AtendentButtons } from "./AtendentButtons";
import { NotificationBell } from "../Notifications/NotificationBell";
import { Link } from "react-router-dom";

export function Header() {
  const { isMobile, isLogged, navigate, setCloseSidebar, closeSidebar, navigation, clientInfos } = useHeaderController()
  const isAtendent = clientInfos.isAtendent
  function handleHeaderButtonsDirection(type: 'services' | 'atendents' | 'steps') {
    if (type === 'atendents') {
      navigate('/atendents/list')
      return
    }
    if (type === 'services') {
      if (navigation.location?.pathname !== '') {
        navigate('')
      }
      setTimeout(() => {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
      }, 500)

      return
    }
    if (type === 'steps') {
      if (navigation.location?.pathname !== '') {
        navigate('')
      }
      setTimeout(() => {
        document.getElementById('steps')?.scrollIntoView({ behavior: 'smooth' })
      }, 500)

      return
    }
  }
  return (
    <UIHeader>
      <div className="h-[80px] backdrop-blur-lg border-b border-b-[#323b45] shadow-md relative flex w-full items-center px-5 py-2.5 ">
        <button onClick={() => setCloseSidebar(!closeSidebar)} className="mr-5 text-black dark:text-[#c4c4c4]"><IconMenu /></button>
        <Link to="/" className={`font-smythe text-white ${!isMobile ? 'text-5xl 10' : 'text-4xl'} cursor-pointer`}>Astrologia Online</Link>
        <div className="ml-auto" />
        {!isMobile && !isAtendent && (
          <>
            <div className="font-bold text-white text-lg flex flex-row gap-10 mr-[100px]">
              <Text onClick={() => handleHeaderButtonsDirection('atendents')} className="cursor-pointer hover:underline" as="h1">Atendentes</Text>
              <Text onClick={() => handleHeaderButtonsDirection('services')} className="cursor-pointer hover:underline" as="h1">Serviços</Text>
              <Text onClick={() => handleHeaderButtonsDirection('steps')} className="cursor-pointer hover:underline" as="h1">Como Funciona</Text>
            </div>
          </>
        )}

        {!isLogged() ? (
          <LoginButtons />
        ) : (
          <>
            <div className="flex flex-row items-center gap-5">
              <NotificationBell />
              {isAtendent ? (
                <AtendentButtons />
              ) : (
                <UserButtons />
              )}
            </div>
          </>
        )}
      </div>
    </UIHeader>
  )
}