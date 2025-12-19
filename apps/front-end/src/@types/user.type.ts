import type { AtendentType } from "./atendent.type"

export type UserSignupProps = {
  login: string,
  password: string,
  isAtendent: boolean,
  permission: string
  name: string
  isVerified: boolean
}

export type UserType = {
  login: string,
  isAtendent: boolean,
  permission: string,
  name: string,
  isVerified: boolean
  id: string,
  profileImg: string
  createdAt: string
  atendent?: AtendentType
}