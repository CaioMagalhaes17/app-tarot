import { create } from 'zustand'
import { ServiceType } from '../@types/service'
import { AtendentType } from '../@types/atendent.type'

type ClientInfos = {
  id: string,
  name: string,
  profileImg: string,
  login: string,
  createdAt: string
  isAtendent: boolean,
  isVerified: boolean,
  permission: string,
  isLoading: boolean
}

type StateManager = {
  clientInfos: ClientInfos
  setClientInfos: (clientInfos: ClientInfos) => void
  atendent: AtendentType | null
  setAtendent: (atendent: AtendentType | null) => void
  setIsMobile: (isMobile: boolean) => void
  isMobile: boolean
  setIsAtendent: (isMobile: boolean) => void
  isAtendent: boolean
  closeSidebar: boolean
  setCloseSidebar: (closeSidebar: boolean) => void
  service: ServiceType
  setService: (service: ServiceType) => void
  dateTime: DateTimeType
  setDateTime: (dateTime: DateTimeType) => void
}

type DateTimeType = { time: string, date?: Date }

const useStore = create<StateManager>((set) => {
  return {
    closeSidebar: true,
    atendent: null,
    setAtendent: (atendent: AtendentType | null) => {
      set({
        atendent
      })
    },
    setCloseSidebar: (closeSidebar: boolean) => {
      set({
        closeSidebar
      })
    },
    dateTime: {
      date: new Date,
      time: '',
    },
    setDateTime: (dateTime) => {
      set({
        dateTime
      })
    },
    service: {
      img: '',
      name: '',
      price: 0
    },
    setService: (service: ServiceType) => {
      set({
        service
      })
    },
    clientInfos: {
      id: '',
      name: '',
      profileImg: '',
      login: '',
      createdAt: '',
      isAtendent: false,
      isVerified: false,
      permission: '',
      isLoading: true
    },
    isAtendent: false,
    setIsAtendent: (isAtendent: boolean) => {
      set({
        isAtendent
      })
    },
    setClientInfos: (clientInfos: ClientInfos) => {
      set({
        clientInfos
      })
    },
    isMobile: false,
    setIsMobile: (isMobile: boolean) => {
      set({
        isMobile
      })
    },
  }
})

export default useStore