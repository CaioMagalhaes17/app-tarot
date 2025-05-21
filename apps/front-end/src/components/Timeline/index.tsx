import { DesktopTimeLine } from "./Desktop";
import { MobileTimeline } from "./Mobile";

export function TimelineComponent({ isMobile }: { isMobile: boolean }) {
  return (
    <>
      {!isMobile ? (
        <DesktopTimeLine />
      ) : (
        <MobileTimeline />
      )}
    </>
  )
}