import { create } from 'zustand'

type ClientInfos = {
  id: string,
  name: string,
  profileImg: string,
  location: {
    latitude: number,
    longitude: number,
    radius: number
  }
}

type StateManager = {
  clientInfos: ClientInfos
  setClientInfos: (clientInfos: ClientInfos) => void
  setIsMobile: (isMobile: boolean) => void
  isMobile: boolean
  setIsAtendent: (isMobile: boolean) => void
  isAtendent: boolean
}

const useStore = create<StateManager>((set) => {
  return {
    clientInfos: {
      id: '',
      name: '',
      profileImg: '',
      location: {
        latitude: 0,
        longitude: 0,
        radius: 0
      }
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
    }
  }
})

export default useStore