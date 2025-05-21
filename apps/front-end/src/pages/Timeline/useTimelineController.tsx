import useStore from "../../state";

export function useTimelineController() {
  const { isMobile } = useStore()
  return { isMobile }
}