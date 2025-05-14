import { create } from 'zustand'

type ClientInfos = {
  id: string,
  name: string,
  profileImg: string,
  login: string,
  createdAt: string
  isAtendent: boolean,
  isVerified: boolean,
  permission: string
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
      login: '',
      createdAt: '',
      isAtendent: false,
      isVerified: false,
      permission: '',
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