import { useState } from "react";
import { DesktopChat } from "../../../components/Chat/components/desktop/DesktopChat";
import { MobileChat } from "../../../components/Chat/components/mobile";
import { useChatController } from "./useChatController";
import { ContactType } from "../../../@types/chat.type";

export function ChatPage() {
  const { getContacts, getMessagesHistory, isMobile } = useChatController()
  const [selectedContact, setSelectedContact] = useState<ContactType>()
  return (
    <>
      {isMobile ? (
        <MobileChat selectedContact={selectedContact} setSelectedContact={setSelectedContact} messages={getMessagesHistory()} contacts={getContacts()} />
      ) : (
        <DesktopChat selectedContact={selectedContact} setSelectedContact={setSelectedContact} messages={getMessagesHistory()} contacts={getContacts()} />
      )}
    </>
  )
}