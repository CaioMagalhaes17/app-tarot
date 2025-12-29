export type NotificationType = 
  | 'payment_approved' 
  | 'appointment_created' 
  | 'appointment_cancelled' 
  | 'general'

export type NotificationMetadata = {
  paymentOrderId?: string
  amount?: number
  productType?: string
  appointmentId?: string
  [key: string]: any
}

export type Notification = {
  id: string
  userId: string
  type: NotificationType
  title: string
  message: string
  isRead: boolean
  createdAt: string
  updatedAt?: string
  metadata?: NotificationMetadata
}

export type NotificationsResponse = {
  notifications: Notification[]
}

