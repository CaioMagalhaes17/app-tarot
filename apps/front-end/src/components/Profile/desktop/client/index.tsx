import { UserType } from "../../../../@types/user.type";
import { ClientNavigationBar } from "./NavigationBar";
import { useSearchParams } from "react-router-dom";
import { UserTab } from "./tabs/User";

export function DesktopClientProfile({ user }: { user: UserType }) {
  const [searchParams, setSearchParams] = useSearchParams({
    tab: ''
  })

  function handleChangeTab(tab: string) {
    setSearchParams((prev) => {
      prev.set('tab', tab)
      return prev
    })
  }
  return (
    <>
      <ClientNavigationBar handleChangeTab={handleChangeTab} currentTab={searchParams.get('tab') || 'user'} />
      <div className="max-w-[1000px] mr-auto ml-auto min-h-screen mt-5">
        <UserTab user={user} />
      </div>
    </>
  )
}