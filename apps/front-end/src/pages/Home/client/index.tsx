import { Button, IconChat, IconSearch, Panel, Text } from "@app/ui";
import { Atendents } from "./components/Atendents";
import { Specialties } from "./components/Specialties";
import { Plans } from "./components/Plans";
import { HowItWorks } from "./components/HowItWorks";
import { useNavigate } from "react-router-dom";
import useStore from "../../../state";

export function ClientHome() {
  const navigate = useNavigate()
  const { isMobile } = useStore()
  return (
    <>
      <div className={`min-h-screen border-lg rounded-xl max-w-[1200px] ml-auto mr-auto`}>
        <Panel className="font-bold flex flex-col items-center">
          <div className=" mt-[200px] flex flex-col gap-10 items-center">
            <Text as="h1" className={`${!isMobile ? 'text-6xl' : 'text-5xl'} text-white`}>Texto Principal</Text>
            <Text as="h1" className="text-xl text-white-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            <div className="flex flex-row gap-5">
              <Button onClick={() => document.getElementById('atendents')?.scrollIntoView({ behavior: 'smooth' })} className={`btn-primary ${!isMobile ? 'text-2xl' : ''} `}><IconSearch className="mr-2" />Procurar Atendentes</Button>
              <Button onClick={() => navigate('/chat')} className={`btn-outline-primary ${!isMobile ? 'text-2xl' : ''} flex flex-row gap-2`}><IconChat />Abrir o Chat</Button>
            </div>
          </div>
        </Panel>
      </div>
      <Atendents />
      <Specialties />
      <Plans />
      <HowItWorks />
    </>
  )
}