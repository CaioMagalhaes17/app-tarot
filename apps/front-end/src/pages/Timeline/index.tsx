import { TimelineComponent } from "../../components/Timeline";
import { useTimelineController } from "./useTimelineController";

export function TimelinePage() {
  const { isMobile, messages, posts } = useTimelineController()

  return (
    <>
      <TimelineComponent posts={posts} isMobile={isMobile} messages={messages} />
    </>
  )
}