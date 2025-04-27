import { HSeparator, Input, Panel, Text } from "@app/ui";
import { AtendentType } from "../../../../@types/atendent.type";
import { MobileAtendentRow } from "./atendentRow";

export function MobileAtendentsListComponent({ atendents }: { atendents: AtendentType[] }) {
  return (
    <div className="min-h-screen mt-2 max-w-[1700px] ml-auto mr-auto">
      <div className="h-full flex flex-col p-3">
        <Panel className="border-[#6028dc1a] backdrop-blur-lg border-[4px] bg-[#26123c]/80 h-full max-w-[450px]  rounded-xl flex flex-col p-4 font-bold">
          <Text as="h1" className="text-white text-3xl  ">
            Procurar Atendentes
          </Text>
          <HSeparator />
          <Input type="text" className="mt-5" placeholder="Pesquisar..." />
          <div className="flex flex-col ">
            <div className="flex mt-5 flex-row items-center">
              <Text className="text-lg text-white" as="h1">Filtros Aplicados</Text>
              <Text className="ml-auto cursor-pointer" as="h1">Limpar Filtros</Text>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              <Text className="rounded-full p-2 border-2  bg-dark border-dark text-white" as="span">Online Agora</Text>
              <Text className="rounded-full p-2 border-2  bg-dark border-dark text-white" as="span">Baralho Cigano</Text>
              <Text className="rounded-full p-2 border-2  bg-dark border-dark text-white" as="span">Búzios</Text>
              <Text className="rounded-full p-2 border-2  bg-dark border-dark text-white" as="span">Runas </Text>
            </div>
            <HSeparator />
          </div>
        </Panel>
        <Panel className="border-[#6028dc1a] w-full rounded-xl flex flex-col mt-5 font-bold ">
          <div className="font-bold flex mb-10 flex-wrap items-center font-bold justify-center gap-2">
            {atendents.map((item, i) => (
              <>
                <MobileAtendentRow bio={item.bio} name={item.name} profileImg={item.profileImg} rating={item.rating} key={i} />
              </>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  )
}