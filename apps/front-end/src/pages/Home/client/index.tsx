import { Button, Panel, Text } from "@app/ui";
import { Atendents } from "./components/Atendents";
import { Specialties } from "./components/Specialties";
import { Plans } from "./components/Plans";
import { HowItWorks } from "./components/HowItWorks";

export function ClientHome() {
  return (
    <>
      <div className="min-h-screen border-lg rounded-xl max-w-[1200px] ml-auto mr-auto ">
        <Panel className="font-bold flex flex-col items-center">
          <div className=" mt-[200px] flex flex-col gap-10 items-center">
            <Text as="h1" className="text-6xl text-white">Texto Principal</Text>
            <Text as="h1" className="text-xl text-white-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            <div className="flex flex-row gap-5 mr-20 mt-20">
              <Button onClick={() => document.getElementById('atendents')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary text-2xl">Procurar Atendentes</Button>
              <Button className="btn-outline-primary text-2xl">Comprar Minutos</Button>
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