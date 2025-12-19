import { useState, useEffect } from "react";
import { Button, Panel, Text } from "@app/ui";
import { useGetAllServices } from "../../../hooks/services/useGetAllServices";
import { useGetAtendentServices } from "../../../hooks/atendents/useGetAtendentServices";
import { chooseServices, ChooseServicePayload } from "../../../api/atendents/chooseServices";
import { updateAtendentService, UpdateServicePayload } from "../../../api/atendents/updateService";
import Swal from "sweetalert2";
import useStore from "../../../state";

type SelectedService = {
  serviceId: string;
  serviceName: string;
  serviceImg: string;
  price: number;
  description: string;
  isSelected: boolean;
  isActive: boolean;
  atendentServiceId?: string; // ID do AtendentService se já existe
}

export function AtendentServicesPage() {
  const { services: allServices, isLoading: isLoadingAll } = useGetAllServices()
  const { atendent, isMobile } = useStore()
  const { services: myServices, isLoading: isLoadingMy } = useGetAtendentServices(atendent?.id)
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>([])

  // Inicializa os serviços selecionados quando os dados carregam
  useEffect(() => {
    if (allServices && myServices) {
      const initial: SelectedService[] = allServices.map(service => {
        const myService = myServices.find(ms => ms.service.id === service.id)
        return {
          serviceId: service.id,
          serviceName: service.name,
          serviceImg: service.serviceImg,
          price: myService?.price || 0,
          description: myService?.description || '',
          isSelected: !!myService,
          isActive: myService?.isActive ?? true, // Default true para novos serviços
          atendentServiceId: myService?.id // Salva o ID do AtendentService se já existe
        }
      })
      setSelectedServices(initial)
    }
  }, [allServices, myServices])

  const handleToggleService = (serviceId: string) => {
    setSelectedServices(prev => prev.map(service => 
      service.serviceId === serviceId 
        ? { ...service, isSelected: !service.isSelected }
        : service
    ))
  }

  const handlePriceChange = (serviceId: string, price: number) => {
    setSelectedServices(prev => prev.map(service => 
      service.serviceId === serviceId 
        ? { ...service, price }
        : service
    ))
  }

  const handleDescriptionChange = (serviceId: string, description: string) => {
    setSelectedServices(prev => prev.map(service => 
      service.serviceId === serviceId 
        ? { ...service, description }
        : service
    ))
  }

  const handleToggleActive = (serviceId: string) => {
    setSelectedServices(prev => prev.map(service => 
      service.serviceId === serviceId 
        ? { ...service, isActive: !service.isActive }
        : service
    ))
  }

  const handleSave = async () => {
    const selectedServicesList = selectedServices.filter(service => service.isSelected)

    if (selectedServicesList.length === 0) {
      Swal.fire({
        title: 'Selecione pelo menos um serviço',
        icon: 'warning'
      })
      return
    }

    // Valida preços
    const invalidPrice = selectedServicesList.find(s => s.price <= 0)
    if (invalidPrice) {
      Swal.fire({
        title: 'Todos os serviços devem ter um preço maior que zero',
        icon: 'error'
      })
      return
    }

    // Separa serviços novos dos existentes
    const newServices: ChooseServicePayload[] = []
    const existingServices: Array<{ id: string; payload: UpdateServicePayload }> = []

    selectedServicesList.forEach(service => {
      if (service.atendentServiceId) {
        // Serviço já existe, deve atualizar
        existingServices.push({
          id: service.atendentServiceId,
          payload: {
            description: service.description,
            price: service.price,
            isActive: service.isActive
          }
        })
      } else {
        // Serviço novo, deve criar
        newServices.push({
          id: service.serviceId,
          customDescription: service.description,
          price: service.price
        })
      }
    })

    try {
      // Atualiza serviços existentes
      const updatePromises = existingServices.map(({ id, payload }) =>
        updateAtendentService(id, payload)
      )
      await Promise.all(updatePromises)

      // Cria novos serviços (se houver)
      if (newServices.length > 0) {
        await chooseServices(newServices)
      }

      Swal.fire({
        title: 'Serviços salvos com sucesso!',
        icon: 'success'
      })
      
      // Recarrega os serviços para atualizar os IDs
      window.location.reload()
    } catch {
      Swal.fire({
        title: 'Erro ao salvar serviços',
        icon: 'error'
      })
    }
  }

  if (isLoadingAll || isLoadingMy) {
    return (
      <Panel className="flex min-h-screen justify-center items-center">
        <Text className="text-white text-2xl" as="p">Carregando serviços...</Text>
      </Panel>
    )
  }

  return (
    <Panel className="flex min-h-screen justify-center">
      <div className={`flex flex-col w-full ${isMobile ? 'p-4' : 'max-w-[1200px] p-8'}`}>
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 border-t border-gray-300"></div>
          <Text className={`text-white font-smythe ${isMobile ? 'text-5xl' : 'text-7xl'} whitespace-nowrap px-2`}>
            Meus Serviços
          </Text>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <Text className="text-white text-lg mb-6" as="p">
          Selecione os serviços que deseja oferecer e personalize o preço e descrição de cada um.
        </Text>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {selectedServices.map((service) => (
            <div 
              key={service.serviceId} 
              className={`border rounded-xl p-4 ${service.isSelected ? 'border-primary bg-primary/10' : 'border-gray-600 bg-gray-800/50'}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <img 
                  src={service.serviceImg} 
                  alt={service.serviceName}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <Text className="text-white font-bold text-xl mb-2" as="h3">
                    {service.serviceName}
                  </Text>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={service.isSelected}
                      onChange={() => handleToggleService(service.serviceId)}
                      className="w-5 h-5"
                    />
                    <Text className="text-white" as="span">Oferecer este serviço</Text>
                  </label>
                </div>
              </div>

              {service.isSelected && (
                <div className="space-y-4 mt-4">
                  <div className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg">
                    <div>
                      <Text className="text-white font-bold" as="label">Status do Serviço</Text>
                      <Text className="text-gray-400 text-sm" as="p">
                        {service.isActive ? 'Ativo - Visível para clientes' : 'Inativo - Oculto dos clientes'}
                      </Text>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={service.isActive}
                        onChange={() => handleToggleActive(service.serviceId)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  <div>
                    <Text className="text-white mb-2" as="label">Preço (R$)</Text>
                    <div className="flex items-center gap-2">
                      <span className="text-white">R$</span>
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={service.price || ''}
                        onChange={(e) => handlePriceChange(service.serviceId, parseFloat(e.target.value) || 0)}
                        className="flex-1 bg-black border border-gray-600 rounded-lg px-4 py-2 text-white"
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                  <div>
                    <Text className="text-white mb-2" as="label">Descrição Personalizada</Text>
                    <textarea
                      value={service.description}
                      onChange={(e) => handleDescriptionChange(service.serviceId, e.target.value)}
                      className="w-full bg-black border border-gray-600 rounded-lg px-4 py-2 text-white min-h-[100px]"
                      placeholder="Descreva como você oferece este serviço..."
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-4">
          <Button 
            onClick={handleSave}
            className="btn-primary btn-xl"
          >
            Salvar Serviços
          </Button>
        </div>
      </div>
    </Panel>
  )
}

