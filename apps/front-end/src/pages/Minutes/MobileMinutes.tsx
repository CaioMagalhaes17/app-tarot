import { Button, HSeparator, IconPin, IconThreeDots } from "@app/ui";

export function MobileMinutesPage({ plans, faqOpen, setFaqOpen }: { plans: string[], faqOpen: { id: string }, setFaqOpen: React.Dispatch<React.SetStateAction<{ id: string }>> }) {

  return (
    <>
      <div className="min-h-screen p-4 ml-auto mr-auto">
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="text-white font-smythe text-4xl whitespace-nowrap px-2">
            Pacotes Disponíveis
          </span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>
        <div className="flex flex-col gap-10 max-w-[1100px] ml-auto mr-auto justify-center p-5">
          {
            plans.map(() => (
              <>
                <div className="h-[500px] w-[300px] font-bold border p-6 border-primary/50 gap-5 flex flex-col hover:shadow-[0_0px_50px] hover:shadow-primary shadow-[0_0px_10px] shadow-primary">
                  <h3 className="text-white text-5xl font-smythe">30 Minutos</h3>
                  <HSeparator className="mt-1 mb-1 !border-b-primary/50" />
                  <div className="flex flex-col gap-3 text-left">
                    <span className="flex flex-row gap-2 text-white text-lg">
                      <IconPin /> Vantagem 1
                    </span>
                    <span className="flex flex-row gap-2 text-white text-lg">
                      <IconPin /> Vantagem 1
                    </span>
                    <span className="flex flex-row gap-2 text-white text-lg">
                      <IconPin /> Vantagem 1
                    </span>
                    <span className="flex flex-row gap-2 text-white text-lg">
                      <IconPin /> Vantagem 1
                    </span>
                  </div>
                  <div className="mt-auto flex flex-col gap-5">
                    <span className="text-white text-4xl ">R$99,99</span>
                    <Button className="btn-primary">Comprar</Button>
                  </div>
                </div>
              </>
            ))
          }

        </div>
        <div className="flex mr-auto ml-auto  items-center gap-4 mt-[150px] mb-[80px]">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="text-white font-smythe text-4xl whitespace-nowrap px-2">
            Perguntas Frequentes
          </span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>
        <div className="flex flex-col text-left max-w-[900px] ml-auto mr-auto">
          <span onClick={() => setFaqOpen({ id: faqOpen.id === '1' ? '' : '1' })} className="flex justify-between cursor-pointer text-white text-xl">1. Posso usar meus minutos como quiser?<IconThreeDots /></span>
          {faqOpen.id === '1' && (
            <span className="text-lg p-4">pidmsaidas doiasndiosandsaiodas doisaniadosndaosiasd</span>
          )}
          <HSeparator className="mt-2 mb-10" />
          <span onClick={() => setFaqOpen({ id: faqOpen.id === '2' ? '' : '2' })} className="flex justify-between cursor-pointer text-white text-xl">2. Minha consulta foi interrompida antes do final do pacote.<IconThreeDots /></span>
          {faqOpen.id === '2' && (
            <span className="text-lg p-4">pidmsaidas doiasndiosandsaiodas doisaniadosndaosiasd</span>
          )}
          <HSeparator className="mt-2 mb-10" />
          <span onClick={() => setFaqOpen({ id: faqOpen.id === '3' ? '' : '3' })} className="flex justify-between cursor-pointer text-white text-xl">3. Posso usar os pacotes quantas vezes quiser?<IconThreeDots /></span>
          {faqOpen.id === '3' && (
            <span className="text-lg p-4">pidmsaidas doiasndiosandsaiodas doisaniadosndaosiasd</span>
          )}
          <HSeparator className="mt-2 mb-10" />
        </div>
      </div>

    </>
  )
}