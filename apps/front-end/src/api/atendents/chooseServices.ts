import { AxiosError } from "axios"
import { Api } from "../axios";

export type ChooseServicePayload = {
  id: string;              // ID do serviço do catálogo
  customDescription: string;
  price: number;
}

export async function chooseServices(services: ChooseServicePayload[]): Promise<void> {
  try {
    await Api().post('/atendent-service/choose', services)
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('Erro ao escolher serviços:', error.message)
    }
    throw error
  }
}

