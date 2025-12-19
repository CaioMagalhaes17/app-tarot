import { UserType } from "./user.type"

export type AtendentType = {
  id: string,
  name: string,
  rating: number,
  bio: string,
  user: UserType
}

export type FeedbackType = {
  senderName: string,
  senderProfileImg: string,
  date: string,
  rating: number,
  description: string
}