import { Button, Text } from "@app/ui"
import { useScheduleController } from "../useScheduleController"
import { AtendentService } from "../../../../../@types/atendent-service.type"

type ChooseServiceProps = {
  services: AtendentService[];
  isLoadingServices: boolean;
}

export function ChooseService({ services: atendentServices, isLoadingServices }: ChooseServiceProps) {
  const { isMobile, setService, service, setSearchParams } = useScheduleController()

  // Filtra apenas serviços ativos
  const activeServices = atendentServices.filter(s => s.isActive)

  // Função para converter o serviço do atendente para o formato esperado pelo setService
  const handleSelectService = (atendentService: AtendentService) => {
    setService({
      name: atendentService.service.name,
      img: atendentService.service.serviceImg,
      price: atendentService.price / 100, // Converte centavos para reais
    })
  }

  // Verifica se um serviço está selecionado (compara pelo nome)
  const isServiceSelected = (atendentService: AtendentService) => {
    return service.name === atendentService.service.name
  }
  return (
    <>
      <div className="p-2 flex flex-col justify-center items-center">
        <Text className="text-3xl text-center text-white font-extrabold mt-3" as='h1'>Escolher serviço</Text>

        {isLoadingServices ? (
          <Text className="text-white text-center mt-10" as="p">Carregando serviços...</Text>
        ) : activeServices.length === 0 ? (
          <Text className="text-white text-center mt-10" as="p">Nenhum serviço disponível</Text>
        ) : !isMobile ? (
          <div className="flex flex-wrap gap-20 justify-center items-center mt-10">
            {activeServices.map((item) => (
              <div key={item.id} className="flex flex-col w-[180px] h-[520px]">
                <img src={item.service.serviceImg} className="rounded-xl h-[170px]" />
                <Text className="text-white font-smythe text-3xl mt-2" as="h1">{item.service.name}</Text>
                <Text className="mt-2 mb-2 text-lg" as="span">{item.description}</Text>
                <Text className="text-success text-lg mt-2 mb-5" as="span">R${(item.price / 100).toFixed(2).replace('.', ',')}</Text>
                <Button 
                  onClick={() => handleSelectService(item)} 
                  className={`${!isServiceSelected(item) ? 'btn-outline-primary' : 'btn-primary'} `}
                >
                  Escolher
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-10 items-center mt-10">
            {activeServices.map((item) => (
              <div key={item.id} className="flex flex-col w-[150px] h-[520px]">
                <img src={item.service.serviceImg} className="rounded-xl h-[170px]" />
                <Text className="text-white font-smythe text-3xl mt-2" as="h1">{item.service.name}</Text>
                <Text className="mt-2 mb-2 text-lg" as="span">{item.description}</Text>
                <Text className="text-success text-lg mt-2 mb-5" as="span">R${(item.price / 100).toFixed(2).replace('.', ',')}</Text>
                <Button 
                  onClick={() => handleSelectService(item)} 
                  className={`${!isServiceSelected(item) ? 'btn-outline-primary' : 'btn-primary'} `}
                >
                  Escolher
                </Button>
              </div>
            ))}
          </div>
        )}

        <div className="w-full flex justify-end" >
          <Button onClick={() => setSearchParams({ step: '3' })} className="btn-primary mt-10">Avançar</Button>
        </div>
      </div>
    </>
  )
}