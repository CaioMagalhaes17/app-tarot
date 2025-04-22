import { Button, Text, Header as UIHeader } from "@app/ui";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate()
  return (
    <UIHeader>
      <div className="h-[80px] backdrop-blur-lg shadow-md relative flex w-full items-center px-5 py-2.5 ">
        <Text as="h1" className="font-extrabold text-3xl ml-20 cursor-pointer" onClick={() => navigate('/')}>Astrologia Online</Text>
        <div className="ml-auto" />

        <div className="font-bold text-white text-lg flex flex-row gap-10 mr-[100px]">
          <Text onClick={() => document.getElementById('atendents')?.scrollIntoView({ behavior: 'smooth' })} className="cursor-pointer hover:underline" as="h1">Atendentes</Text>
          <Text onClick={() => document.getElementById('specialties')?.scrollIntoView({ behavior: 'smooth' })} className="cursor-pointer hover:underline" as="h1">Especialidades</Text>
          <Text onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })} className="cursor-pointer hover:underline" as="h1">Minutos</Text>
          <Text onClick={() => document.getElementById('howItWorks')?.scrollIntoView({ behavior: 'smooth' })} className="cursor-pointer hover:underline" as="h1">Como Funciona</Text>
        </div>
        <div className="flex flex-row gap-5">
          <Button className="btn-primary">Entrar</Button>
          <Button className="btn-outline-primary">Cadastrar</Button>
        </div>
      </div>
    </UIHeader>
  )
}