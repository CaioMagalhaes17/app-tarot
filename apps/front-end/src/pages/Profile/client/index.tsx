import { DesktopClientProfile } from "../../../components/Profile/desktop/client";
import { useProfileController } from "../useProfileController";

export function ClientProfilePage() {
  const { isLoading, user } = useProfileController()

  return (
    <>
      {user && !isLoading ? (
        <DesktopClientProfile user={user} />
      ) : ''}
    </>
  )
}