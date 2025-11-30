import { ContactType, MessageType } from "../../../../@types/chat.type";
import { MobileChatMessage } from "./Chat";
import { MobileChatContactsList } from "./ContactsList";

export function MobileChat({ contacts, messages, setSelectedContact, selectedContact }: { contacts: ContactType[], messages: MessageType[], setSelectedContact: React.Dispatch<React.SetStateAction<ContactType | undefined>>, selectedContact: ContactType | undefined }) {
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