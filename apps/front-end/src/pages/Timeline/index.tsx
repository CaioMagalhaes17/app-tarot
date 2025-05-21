import { TimelineComponent } from "../../components/Timeline";
import { useTimelineController } from "./useTimelineController";

export function TimelinePage() {
  const { isMobile } = useTimelineController()

  return (
    <>
      <TimelineComponent isMobile={isMobile} />
    </>
  )
}