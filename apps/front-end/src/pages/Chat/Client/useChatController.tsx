import { ContactType, MessageType } from "../../../@types/chat.type";
import { userImg } from "../../../constants/images";
import useStore from "../../../state";

export function useChatController() {
  const { isMobile } = useStore()

  function getContacts(): ContactType[] {
    const contacts = [
      {
        id: '1',
        profileImg: 'https://react.vristo.sbthemes.com/assets/images/profile-16.jpeg',
        name: 'Atendente 1',
        lastMessage: 'Última Mensagem',
        lastMessageTime: '11:15'
      },
      {
        id: '2',
        profileImg: 'https://react.vristo.sbthemes.com/assets/images/profile-16.jpeg',
        name: 'Atendente 1',
        lastMessage: 'Última Mensagem',
        lastMessageTime: '08:00'
      },
      {
        id: '3',
        profileImg: 'https://react.vristo.sbthemes.com/assets/images/profile-16.jpeg',
        name: 'Atendente 1',
        lastMessage: 'Última Mensagem',
        lastMessageTime: '08:00'
      },
      {
        id: '4',
        profileImg: 'https://react.vristo.sbthemes.com/assets/images/profile-16.jpeg',
        name: 'Atendente 1',
        lastMessage: 'Última Mensagem',
        lastMessageTime: '08:00'
      },
      {
        id: '5',
        profileImg: 'https://react.vristo.sbthemes.com/assets/images/profile-16.jpeg',
        name: 'Atendente 1',
        lastMessage: 'Última Mensagemr',
        lastMessageTime: '08:00'
      },
      {
        id: '6',
        profileImg: 'https://react.vristo.sbthemes.com/assets/images/profile-16.jpeg',
        name: 'Atendente 1',
        lastMessage: 'Última Mensagem',
        lastMessageTime: '08:00'
      },
      {
        id: '7',
        profileImg: 'https://react.vristo.sbthemes.com/assets/images/profile-16.jpeg',
        name: 'Atendente 1',
        lastMessage: 'Última Mensagem',
        lastMessageTime: '08:00'
      },
      {
        id: '8',
        profileImg: 'https://react.vristo.sbthemes.com/assets/images/profile-16.jpeg',
        name: 'Atendente 1',
        lastMessage: 'Última Mensagem',
        lastMessageTime: '08:00'
      },

    ]
    return contacts
  }

  function getMessagesHistory(): MessageType[] {
    const messages = [
      { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', time: '21:30', sender: { id: '1', lastMessage: 'hello', lastMessageTime: '1', name: 'Caio Magalhães', profileImg: userImg }, id: '1' },

    ]
    return messages
  }


  return { isMobile, getContacts, getMessagesHistory }
}

