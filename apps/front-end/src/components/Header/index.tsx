import { Button, IconMenu, Text, Header as UIHeader, VSeparator } from "@app/ui";
import { useHeaderController } from "./useHeaderController";
import { LoginButtons } from "./LoginButtons";
import { UserButtons } from "./UserButtons";

export function Header() {
  const { isMobile, isLogged, navigate, setCloseSidebar, closeSidebar } = useHeaderController()
  return (
    <UIHeader>
      <div className="h-[80px] backdrop-blur-lg border-b border-b-[#323b45] shadow-md relative flex w-full items-center px-5 py-2.5 ">
        <button onClick={() => setCloseSidebar(!closeSidebar)} className="mr-5 text-black dark:text-[#c4c4c4]"><IconMenu /></button>
        <VSeparator />
        {!isMobile && (
          <Text as="h1" className={`${!isMobile ? 'text-3xl 10' : 'text-lg'} font-extrabold cursor-pointer`} onClick={() => navigate('/')}>Astrologia Online</Text>
        )}
        <div className="ml-auto" />
        {!isMobile && !isLogged() ? (
          <>
            <div className="font-bold text-white text-lg flex flex-row gap-10 mr-[100px]">
              <Text onClick={() => document.getElementById('atendents')?.scrollIntoView({ behavior: 'smooth' })} className="cursor-pointer hover:underline" as="h1">Atendentes</Text>
              <Text onClick={() => document.getElementById('specialties')?.scrollIntoView({ behavior: 'smooth' })} className="cursor-pointer hover:underline" as="h1">Especialidades</Text>
              <Text onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })} className="cursor-pointer hover:underline" as="h1">Minutos</Text>
              <Text onClick={() => document.getElementById('howItWorks')?.scrollIntoView({ behavior: 'smooth' })} className="cursor-pointer hover:underline" as="h1">Como Funciona</Text>
            </div>
          </>
        ) : ''}

        {!isLogged() ? (
          <LoginButtons />
        ) : (
          (
            <>
              <div className="flex flex-row items-center gap-5">
                {!isMobile && (
                  <Button className="btn-primary btn-sm">Comprar minutos</Button>
                )}
                <VSeparator className="mr-1" />
                <UserButtons />
              </div>
            </>
          )
        )}
      </div>
    </UIHeader>
  )
}