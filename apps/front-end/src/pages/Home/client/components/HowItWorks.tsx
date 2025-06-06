import { Text } from "@app/ui";
import useStore from "../../../../state";

export function HowItWorks() {
  const { isMobile } = useStore()

  return (
    <>
      <div id="howItWorks" className="w-full p-6 ml-auto mr-auto mt-[100px]">
        <div className=" max-w-[1200px] ml-auto mr-auto">
          <Text as="h1" className="text-5xl mb-10 text-center font-extrabold text-white">Especialidades</Text>
          <div className="mt-20 flex flex-col">
            <div className={`flex ${!isMobile ? 'flex-row' : 'flex-col'} gap-10 hover:bg-[#6028dc1a] hover:rounded-xl p-4`}>
              <img className="rounded-xl" src="https://static.cartasciganas.com/images/site/especialidade/tarot.jpg" />
              <div className="font-bold items-center gap-10 flex flex-col">
                <Text className="text-3xl text-white" as="h1">Como falar com um tarologista</Text>
                <Text className="text-xl" as="h1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sed do eiusmod tempor incididunt</Text>
              </div>
            </div>
            {isMobile ? (
              <div className={`flex flex-col gap-10 hover:bg-[#6028dc1a] hover:rounded-xl p-4`}>
                <img className="rounded-xl" src="https://static.cartasciganas.com/images/site/especialidade/tarot.jpg" />
                <div className="font-bold items-center gap-10 flex flex-col">
                  <Text className="text-3xl text-white" as="h1">Quero ser Atendente</Text>
                  <Text className="text-xl" as="h1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sed do eiusmod tempor incididunt</Text>
                </div>
              </div>
            ) : (
              <div className="flex flex-row gap-10 mt-20 hover:bg-[#6028dc1a] hover:rounded-xl p-4">
                <div className="font-bold items-center gap-10 flex flex-col">
                  <Text className="text-3xl text-white" as="h1">Quero ser Atendente</Text>
                  <Text className="text-xl" as="h1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sed do eiusmod tempor incididunt</Text>
                </div>
                <img className="rounded-xl" src="https://static.cartasciganas.com/images/site/especialidade/tarot.jpg" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}