import { HSeparator, IconChat, IconX, Text } from "@app/ui";
import { useState } from "react";
import { MessageType } from "../../../@types/chat.type";
import { useNavigate } from "react-router-dom";

export function FloatingChat({ messages }: { messages: MessageType[] }) {
  const [openChat, setOpenChat] = useState<boolean>(false)
  const navigate = useNavigate()
  return (
    <>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-[50px] right-4 z-50 bg-dark text-white rounded-full shadow-lg p-3 transition-all duration-300"
        aria-label="Chat"
        onClick={() => setOpenChat(!openChat)}
      >
        <IconChat />
      </a>
      {openChat && (
        <div className="fixed flex flex-col bottom-[100px] rounded-xl p-4 right-5 z-50 bg-dark w-[230px] h-[330px]">
          <div className="flex flex-row">
            <Text className="text-lg text-white font-extrabold" as="h1">Chat</Text>
            <div className="ml-auto" />
            <div onClick={() => setOpenChat(false)}>
              <IconX />
            </div>
          </div>
          <HSeparator className="mt-1 mb-1 bg-white" />
          <div className="flex flex-col gap-2">
            {messages.map((item) => (
              <div onClick={() => navigate('/chat')} className="flex flex-row mt-2">
                <img src={item.sender.profileImg} className="rounded-full h-[30px] w-[30px]" />
                <div className="flex flex-col">
                  <Text className="font-bold text-white ml-2" as="h1">{item.sender.name}</Text>
                  <Text className="font-bold w-full text-ellipsis ml-2 flex flex-row" as="h1">
                    {item.text.length > 15 ? (item.text.slice(0, -(item.text.length - 15)) + '...') : item.text}
                    <span className="ml-3 text-[10px]">15 min</span>
                  </Text>
                </div>
              </div>
            ))}

          </div>
        </div>
      )}

    </>
  )
}