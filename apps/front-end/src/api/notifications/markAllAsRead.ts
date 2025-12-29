import { AxiosError } from "axios"
import { Api } from "../axios"

export async function markAllNotificationsAsRead(): Promise<void> {
  try {
    await Api().patch('/notifications/read-all')
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('Erro ao marcar todas as notificações como lidas:', error.message)
    }
    throw error
  }
}

