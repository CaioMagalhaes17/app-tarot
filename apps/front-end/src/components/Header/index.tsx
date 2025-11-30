import { IconMenu, Text, Header as UIHeader } from "@app/ui";
import { useHeaderController } from "./useHeaderController";
import { LoginButtons } from "./LoginButtons";
import { UserButtons } from "./UserButtons";

export function Header() {
  const { isMobile, isLogged, navigate, setCloseSidebar, closeSidebar } = useHeaderController()
  return (
    <UIHeader>
      <div className="h-[80px] backdrop-blur-lg border-b border-b-[#323b45] shadow-md relative flex w-full items-center px-5 py-2.5 ">
        <button onClick={() => setCloseSidebar(!closeSidebar)} className="mr-5 text-black dark:text-[#c4c4c4]"><IconMenu /></button>
        <Text as="h1" className={`font-smythe text-white ${!isMobile ? 'text-5xl 10' : 'text-4xl'} cursor-pointer`} onClick={() => navigate('/')}>Astrologia Online</Text>
        <div className="ml-auto" />
        {!isMobile && (
          <>
            <div className="font-bold text-white text-lg flex flex-row gap-10 mr-[100px]">
              <Text onClick={() => navigate('/atendents/list')} className="cursor-pointer hover:underline" as="h1">Atendentes</Text>
              <Text onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="cursor-pointer hover:underline" as="h1">Serviços</Text>
              <Text onClick={() => document.getElementById('steps')?.scrollIntoView({ behavior: 'smooth' })} className="cursor-pointer hover:underline" as="h1">Como Funciona</Text>
            </div>
          </>
        )}

        {!isLogged() ? (
          <LoginButtons />
        ) : (
          (
            <>
              <div className="flex flex-row items-center gap-5">
                <UserButtons />
              </div>
            </>
          )
        )}
      </div>
    </UIHeader>
  )
}