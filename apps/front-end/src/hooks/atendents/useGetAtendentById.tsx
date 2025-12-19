import { useEffect, useState } from "react";
import { AtendentType } from "../../@types/atendent.type";
import { getAtendentById } from "../../api/atendents/getById";
import { useQuery } from "@tanstack/react-query";

export function useGetAtendentById(id: string | undefined) {
  const [atendent, setAtendent] = useState<AtendentType>()

  const { data, isLoading } = useQuery({
    queryKey: ['get-atendent-by-id', id],
    queryFn: () => getAtendentById(id!),
    enabled: !!id,
  })

  useEffect(() => {
    if (data && !isLoading) {
      setAtendent(data)
    }
  }, [data, isLoading])

  return { atendent, isLoading }
}

