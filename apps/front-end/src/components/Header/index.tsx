import { Button, IconMenu, Text, Header as UIHeader, VSeparator } from "@app/ui";
import { useNavigate } from "react-router-dom";
import useStore from "../../state";

export function Header() {
  const navigate = useNavigate()
  const { isMobile } = useStore()
  return (
    <UIHeader>
      <div className="h-[80px] backdrop-blur-lg shadow-md relative flex w-full items-center px-5 py-2.5 ">
        <button onClick={() => ''} className="mr-5 text-black dark:text-[#c4c4c4]"><IconMenu /></button>
        <VSeparator />
        {!isMobile && (
          <Text as="h1" className={`${!isMobile ? 'text-3xl ml-20' : 'text-lg'} font-extrabold cursor-pointer`} onClick={() => navigate('/')}>Astrologia Online</Text>
        )}
        <div className="ml-auto" />
        {!isMobile && (
          <>
            <div className="font-bold text-white text-lg flex flex-row gap-10 mr-[100px]">
              <Text onClick={() => document.getElementById('atendents')?.scrollIntoView({ behavior: 'smooth' })} className="cursor-pointer hover:underline" as="h1">Atendentes</Text>
              <Text onClick={() => document.getElementById('specialties')?.scrollIntoView({ behavior: 'smooth' })} className="cursor-pointer hover:underline" as="h1">Especialidades</Text>
              <Text onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })} className="cursor-pointer hover:underline" as="h1">Minutos</Text>
              <Text onClick={() => document.getElementById('howItWorks')?.scrollIntoView({ behavior: 'smooth' })} className="cursor-pointer hover:underline" as="h1">Como Funciona</Text>
            </div>
          </>
        )}
        <div className={`flex flex-row ${isMobile ? 'gap-2' : 'gap-5'}`}>
          <Button onClick={() => navigate('/login')} className={`btn-primary ${isMobile ? 'btn-sm' : ''}`}>Entrar</Button>
          <Button onClick={() => navigate('/signup')} className={`btn-outline-primary ${isMobile ? 'btn-sm' : ''}`}>Cadastrar</Button>
        </div>
      </div>
    </UIHeader>
  )
}