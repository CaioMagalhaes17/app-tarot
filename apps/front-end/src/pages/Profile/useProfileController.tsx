import { useSearchParams } from "react-router-dom";
import { useGetUser } from "../../hooks/user/useGetUser";
import useStore from "../../state";

export function useProfileController() {
  const [searchParams, setSearchParams] = useSearchParams({
    tab: '',
  })

  function setTab(tab: 'user' | 'payments' | 'services') {
    setSearchParams({ tab })
  }

  const { isLoading, user } = useGetUser()
  const userStore = useStore()

  return { user, isLoading, isMobile: userStore.isMobile, tab: searchParams.get('tab'), setTab }
}