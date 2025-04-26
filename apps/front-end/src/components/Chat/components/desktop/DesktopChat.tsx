import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, HSeparator, IconMute, IconThreeDots, IconTrash, IconUser, IconWarning, Input, Panel, Text } from "@app/ui";
import { ContactType, MessageType } from "../../../../@types/chat.type";
import { Star } from "lucide-react";

export function DesktopChat({ contacts, messages }: { contacts: ContactType[], messages: MessageType[] }) {

  return (
    <>
      <div className="min-h-screen mt-2 max-w-[1400px] ml-auto mr-auto">
        <div className="h-[800px] flex flex-row gap-5">
          <Panel className="bg-black h-full w-[450px]  rounded-xl flex flex-col p-4 font-bold">
            <Text as="h1" className="text-white text-4xl mt-5 ">
              Conversas
            </Text>
            <HSeparator />
            <Input type="text" className="mt-5" placeholder="Pesquisar..." />
            <div className="flex flex-row gap-5 mt-3">
              <Button className="btn-outline-primary">Todas</Button>
              <Button className="btn-outline-primary">Em andamento</Button>
              <Button className="btn-outline-primary">Concluídas</Button>
            </div>
            <HSeparator />
            <div className="flex flex-col scrollable">
              {contacts.map((item) => (
                <>
                  <div className=" hover:bg-white/20 cursor-pointer">
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
          <Panel className="bg-black h-full w-[1050px] rounded-xl flex flex-col p-4 font-bold ">
            <div className="flex flex-row items-center">
              <img className="w-[60px] rounded-full" src={contacts[0].profileImg} />
              <div className="flex flex-col">
                <Text className="text-2xl text-white ml-5" as="h1">{contacts[0].name}</Text>
                <div className="flex flex-row">
                  <Text as="span" className="text-success ml-5">Online</Text>/
                  <Text as="span" className="text-danger">Ocupado</Text>/
                  <Text as="span" className="">Digitando...</Text>

                </div>
              </div>
              <div className="ml-auto mr-5">
                <DropdownMenu >
                  <DropdownMenuTrigger>
                    <IconThreeDots />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-dark mt-5 w-[250px] mr-[160px] p-4 flex text-white font-extrabold flex-col">
                    <div className="flex flex-col gap-2">
                      <Text className="cursor-pointer hover:bg-white/20 hover:rounded-lg flex flex-row gap-2 items-center" as="span"><IconUser />Perfil</Text>
                      <Text className="cursor-pointer hover:bg-white/20 hover:rounded-lg flex flex-row gap-2 items-center" as="span"><Star className="fill-yellow-500 text-yellow-500" />Adicionar aos favoritos</Text>
                      <Text className="cursor-pointer hover:bg-white/20 hover:rounded-lg flex flex-row gap-2 items-center " as="span"><IconMute />Silenciar</Text>
                      <Text className="cursor-pointer text-warning hover:bg-white/20 hover:rounded-lg flex flex-row gap-2 items-center" as="span"><IconTrash />Apagar Conversa</Text>
                      <Text className="cursor-pointer text-danger hover:bg-white/20 hover:rounded-lg flex flex-row gap-2 items-center" as="span"><IconWarning />Denunciar</Text>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu >

              </div>
            </div>
            <HSeparator />
            <div className="flex flex-col p-6">
              {messages.map((item, index) => (
                <>
                  <div className={`flex flex-col ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                    <div className={`flex p-4 rounded-xl  h-full max-w-[600px] text-left text-white flex-row ${index % 2 === 0 ? 'bg-primary' : 'bg-[#26123c]'}`}>
                      {item.text}
                    </div>
                    <span className={`${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>{item.time}</span>
                  </div>
                </>
              ))}
            </div>
            <div className="mt-auto">
              <div className="flex flex-row">
                <Input placeholder="Digite uma mensagem..." type="text" />
                <Button className="btn-primary ml-5">Mic</Button>
              </div>
            </div>
          </Panel>
        </div>
      </div>
    </>
  )
}