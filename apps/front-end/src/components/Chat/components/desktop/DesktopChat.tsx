import { Panel, Text } from "@app/ui";
import { ContactType, MessageType } from "../../../../@types/chat.type";
import { ChatMessage } from "./Chat";
import { ChatContactsList } from "./ContactsList";

export function DesktopChat({ contacts, messages, selectedContact, setSelectedContact }: { contacts: ContactType[], messages: MessageType[], setSelectedContact: React.Dispatch<React.SetStateAction<ContactType | undefined>>, selectedContact: ContactType | undefined }) {

  return (
    <>
      <div className="min-h-screen mt-2 max-w-[1600px] ml-auto mr-auto">
        <div className="h-[800px] flex flex-row gap-5">
          <ChatContactsList contacts={contacts} setSelectedContact={setSelectedContact} />
          {selectedContact && (
            <ChatMessage contact={selectedContact} messages={messages} />
          )}
          <Panel className="border border-dark bg-[#131426b3] h-full w-[1350px] rounded-xl flex flex-col p-4 font-bold ">
            <Text as="h1" className="font-smythe ">Iniciar </Text>
          </Panel>
        </div>
      </div>
    </>
  )
}