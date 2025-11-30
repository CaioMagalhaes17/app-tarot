import { Button, HSeparator, Input, Panel, Text } from "@app/ui";
import { ContactType } from "../../../../@types/chat.type";

export function MobileChatContactsList({ contacts, setSelectedContact }: { setSelectedContact: React.Dispatch<React.SetStateAction<ContactType | undefined>>, contacts: ContactType[] }) {
  return (
    <>
      <div className="min-h-screen ml-auto mr-auto">
        <div className="h-full flex flex-row gap-5">
          <Panel className="border border-dark bg-[#131426b3] h-full w-[450px]  rounded-xl flex flex-col p-4 font-bold">
            <Text as="h1" className="text-white text-6xl mt-5 font-smythe">
              Conversas
            </Text>
            <HSeparator />
            <Input type="text" className="mt-5" placeholder="Pesquisar..." />
            <div className="flex flex-row gap-5 mt-3">
              <Button className="btn-outline-primary btn-sm">Todas</Button>
              <Button className="btn-outline-primary btn-sm">Em andamento</Button>
              <Button className="btn-outline-primary btn-sm">Concluídas</Button>
            </div>
            <HSeparator />
            <div className="flex flex-col scrollable">
              {contacts.map((item) => (
                <>
                  <div onClick={() => setSelectedContact(item)} className=" hover:bg-white/20 cursor-pointer">
                    <div className="flex flex-row mt-2 mb-2 items-center ">
                      <img className="w-[75px] rounded-full" src={item.profileImg} />
                      <div className="flex flex-col ml-2">
                        <Text className="text-lg text-white" as="h1">{item.name}</Text>
                        <Text as="h1">{item.name}: {item.lastMessage}</Text>
                      </div>
                      <div className="ml-auto mr-2">
                        {item.lastMessageTime}
                      </div>
                    </div>
                  </div>

                </>
              ))}

            </div>

          </Panel>
        </div>
      </div>
    </>
  )
}