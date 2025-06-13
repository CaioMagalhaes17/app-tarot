import useStore from "../../../state"
import { useSearchAtendents } from "../../../hooks/atendents/useSearchAtendents"
import { MessageType } from "../../../@types/chat.type"
import { userImg } from "../../../constants/images"

export function useHomeController() {
  const { isMobile, isAtendent } = useStore()
  const messages: MessageType[] = [
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', time: '21:30', sender: { id: '1', lastMessage: 'hello', lastMessageTime: '1', name: 'Caio Magalhães', profileImg: userImg }, id: '1' },


  ]
  return { isMobile, isAtendent, useSearchAtendents, messages }
}