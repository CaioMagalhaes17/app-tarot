import { DesktopChat } from "../../../components/Chat/components/desktop/DesktopChat";
import { MobileChat } from "../../../components/Chat/components/mobile";
import { useChatController } from "./useChatController";

export function ChatPage() {
  const { getContacts, getMessagesHistory, isMobile } = useChatController()

  return (
    <>
      {isMobile ? (
        <MobileChat messages={getMessagesHistory()} contacts={getContacts()} />
      ) : (
        <DesktopChat messages={getMessagesHistory()} contacts={getContacts()} />
      )}
    </>
  )
}