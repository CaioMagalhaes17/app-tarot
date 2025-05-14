import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../api/getUser";
import { useEffect, useState } from "react";
import { UserType } from "../../@types/user.type";

export function useGetUser() {
  const [user, setUser] = useState<UserType>()
  const { data, isLoading } = useQuery({
    queryKey: ['get-user'],
    queryFn: getUser
  })

  useEffect(() => {
    if (!isLoading && data) return setUser(data)
  }, [isLoading, data])

  return { isLoading, user }
}