import { UserType } from "./user.type"
import { Schedule } from "./schedule.type"

export type AtendentType = {
  id: string,
  name: string,
  rating: number,
  bio: string,
  user: UserType
  schedule?: Schedule
}

export type FeedbackType = {
  senderName: string,
  senderProfileImg: string,
  date: string,
  rating: number,
  description: string
}