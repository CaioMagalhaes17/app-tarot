import { MessageType } from "../../@types/chat.type";
import { PostType } from "../../@types/post";
import { DesktopTimeLine } from "./Desktop";
import { MobileTimeline } from "./Mobile";

export function TimelineComponent({ isMobile, messages, posts }: { posts: PostType[], isMobile: boolean, messages: MessageType[] }) {
  return (
    <>
      {!isMobile ? (
        <DesktopTimeLine posts={posts} messages={messages} />
      ) : (
        <MobileTimeline posts={posts} />
      )}
    </>
  )
}