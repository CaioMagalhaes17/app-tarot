import { useGetUser } from "../../hooks/user/useGetUser";

export function useProfileController() {
  const { isLoading, user } = useGetUser()

  return { user, isLoading }
}