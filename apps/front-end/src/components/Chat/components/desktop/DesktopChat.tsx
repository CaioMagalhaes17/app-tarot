import { Button, IconSearch, Panel, Text } from "@app/ui";
import { ContactType, MessageType } from "../../../../@types/chat.type";
import { ChatMessage } from "./Chat";
import { ChatContactsList } from "./ContactsList";
import { atendents } from "../../../../pages/Home/home-contents";
import { useNavigate } from "react-router-dom";

export function DesktopChat({ contacts, messages, selectedContact, setSelectedContact }: { contacts: ContactType[], messages: MessageType[], setSelectedContact: React.Dispatch<React.SetStateAction<ContactType | undefined>>, selectedContact: ContactType | undefined }) {
  const navigate = useNavigate()
  return (
    <>
      <div className="min-h-screen mt-2 max-w-[1600px] ml-auto mr-auto">
        <div className="h-[800px] flex flex-row gap-5">
          <ChatContactsList contacts={contacts} setSelectedContact={setSelectedContact} />
          {selectedContact ? (
            <ChatMessage contact={selectedContact} messages={messages} />
          ) : (
            <Panel className="border border-dark bg-black h-full w-[1350px] rounded-xl flex flex-col p-4 font-bold ">
              <div className="w-full justify-center items-center mt-10">
                <Text className="text-white text-center text-6xl font-smythe" as="h1">Iniciar Uma Nova Conversa</Text>
                <Text className="mt-5 text-center text-lg" as="p">Procure por atendentes para iniciar uma nova conversa, ou continue de onde parou.</Text>
              </div>
              <div className="flex flex-col items-center justify-center mt-10">
                <div className="flex flex-wrap gap-10 max-w-[1200px]">
                  {atendents.map((item) => (
                    <div className="flex flex-col">
                      <img className="rounded-2xl w-[150px] h-[250px]" src={item.profileImg} />
                      <span className="text-white text-xl font-extrabold mt-5">{item.name}</span>
                      <span className="text-lg">{item.desc}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-row gap-5 mt-20">
                  <Button onClick={() => navigate('/atendents/list')} className="btn-primary btn-xl"><IconSearch className="mr-2" />Ver todos</Button>
                </div>
              </div>
            </Panel>
          )}
        </div>
      </div>
    </>
  )
}