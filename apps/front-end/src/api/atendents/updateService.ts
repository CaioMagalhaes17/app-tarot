import { AxiosError } from "axios"
import { Api } from "../axios";

export type UpdateServicePayload = {
  description: string;
  price: number;
  isActive?: boolean;
}

export async function updateAtendentService(
  atendentServiceId: string, 
  payload: UpdateServicePayload
): Promise<void> {
  try {
    await Api().put(`/atendent-service/${atendentServiceId}`, payload)
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('Erro ao atualizar serviço:', error.message)
    }
    throw error
  }
}

