export type ContactType = {
  id: string
  profileImg: string,
  name: string,
  lastMessage: string,
  lastMessageTime: string
}

export type MessageType = {
  id: string,
  text: string,
  time: string,
  senderId: string,
  receiverId: string
}