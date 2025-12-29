import { AxiosError } from "axios"
import { Api } from "../axios"

export async function markNotificationAsRead(id: string): Promise<void> {
  try {
    await Api().patch(`/notifications/${id}/read`)
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('Erro ao marcar notificação como lida:', error.message)
    }
    throw error
  }
}

