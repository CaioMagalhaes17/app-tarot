import useStore from "../../state";

export function useMinutesController() {
  const { isMobile } = useStore()

  return { isMobile }
}