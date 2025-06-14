import { MessageType } from "../../@types/chat.type";
import { userImg } from "../../constants/images";
import { postsMock } from "../../mocks/posts";
import useStore from "../../state";

export function useTimelineController() {
  const { isMobile } = useStore()

  const messages: MessageType[] = [
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', time: '21:30', sender: { id: '1', lastMessage: 'hello', lastMessageTime: '1', name: 'Caio Massgalhães', profileImg: userImg }, id: '1' },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', time: '21:30', sender: { id: '1', lastMessage: 'hello', lastMessageTime: '1', name: 'Caio Massgalhães', profileImg: userImg }, id: '1' },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', time: '21:30', sender: { id: '1', lastMessage: 'hello', lastMessageTime: '1', name: 'Caio Massgalhães', profileImg: userImg }, id: '1' },
  ]

  const posts = postsMock
  return { isMobile, messages, posts }
}