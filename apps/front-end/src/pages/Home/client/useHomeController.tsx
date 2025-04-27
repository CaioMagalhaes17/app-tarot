import useStore from "../../../state"
import { useSearchAtendents } from "../../../hooks/atendents/useSearchAtendents"

export function useHomeController() {
  const { isMobile, isAtendent } = useStore()

  return { isMobile, isAtendent, useSearchAtendents }
}