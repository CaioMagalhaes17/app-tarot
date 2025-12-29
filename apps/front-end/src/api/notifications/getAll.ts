import { AxiosError } from "axios"
import { Api } from "../axios"
import { NotificationsResponse } from "../../@types/notification.type"

export async function getAllNotifications(unreadOnly?: boolean): Promise<NotificationsResponse | undefined> {
  try {
    const response = await Api().get('/notifications', {
      params: unreadOnly ? { unreadOnly: true } : {}
    })
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('Erro ao buscar notificações:', error.message)
    }
    throw error
  }
}

