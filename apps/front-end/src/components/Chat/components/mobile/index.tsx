import { useState } from "react";
import { ContactType, MessageType } from "../../../../@types/chat.type";
import { MobileChatMessage } from "./Chat";
import { MobileChatContactsList } from "./ContactsList";

export function MobileChat({ contacts, messages }: { contacts: ContactType[], messages: MessageType[] }) {
  const [selectedContact, setSelectedContact] = useState<ContactType>()
  return (
    <>
      {!selectedContact ? (
        <MobileChatContactsList setSelectedContact={setSelectedContact} contacts={contacts} />

      ) : (
        <MobileChatMessage setSelectedContact={setSelectedContact} messages={messages} contact={selectedContact} />
      )}
    </>
  )
}