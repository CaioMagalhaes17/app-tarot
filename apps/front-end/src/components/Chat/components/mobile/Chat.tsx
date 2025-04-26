import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, HSeparator, IconArrowBackward, IconMute, IconThreeDots, IconTrash, IconUser, IconWarning, Input, Panel, Text } from "@app/ui";
import { ContactType, MessageType } from "../../../../@types/chat.type";
import { Star } from "lucide-react";

export function MobileChatMessage({ contact, messages, setSelectedContact }: { setSelectedContact: React.Dispatch<React.SetStateAction<ContactType | undefined>>, contact: ContactType, messages: MessageType[] }) {
  return (
    <>
      <Panel className="bg-black h-full max-w-[1050px] rounded-xl flex flex-col p-4 font-bold ">
        <div className="flex flex-row items-center">
          <button onClick={() => setSelectedContact(undefined)}>
            <IconArrowBackward className="mr-2" />
          </button>
          <img className="w-[60px] rounded-full" src={contact.profileImg} />
          <div className="flex flex-col">
            <Text className="text-xl text-white ml-5" as="h1">{contact.name}</Text>
            <div className="flex flex-row">
              <Text as="span" className="text-success ml-5">Online</Text>/
              <Text as="span" className="text-danger">Ocupado</Text>/
              <Text as="span" className="">Digitando...</Text>
            </div>
          </div>
          <div className="ml-auto ">
            <DropdownMenu >
              <DropdownMenuTrigger>
                <IconThreeDots />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-dark w-[250px] p-4 flex text-white font-extrabold flex-col">
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
        <div className="flex flex-col p-6 scrollable">
          {messages.map((item, index) => (
            <>
              <div className={`flex flex-col ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                <div className={`flex p-4 rounded-xl  h-full max-w-[250px] text-left text-white flex-row ${index % 2 === 0 ? 'bg-primary' : 'bg-[#26123c]'}`}>
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
      </Panel >
    </>
  )
}