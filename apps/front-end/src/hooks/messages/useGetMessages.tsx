import { MessageType } from "../../@types/chat.type"
import { userImg } from "../../constants/images"

export function useGetMessages() {
  const messages: MessageType[] = [
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', time: '21:30', sender: { id: '1', lastMessage: 'hello', lastMessageTime: '1', name: 'Caio Massgalhães', profileImg: userImg }, id: '1' },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', time: '21:30', sender: { id: '1', lastMessage: 'hello', lastMessageTime: '1', name: 'Caio Massgalhães', profileImg: userImg }, id: '1' },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', time: '21:30', sender: { id: '1', lastMessage: 'hello', lastMessageTime: '1', name: 'Caio Massgalhães', profileImg: userImg }, id: '1' },
  ]

  return { messages }
}