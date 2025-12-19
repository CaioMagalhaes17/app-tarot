import { useEffect, useState } from "react";
import { getAtendentServices } from "../../api/atendents/getServices";
import { useQuery } from "@tanstack/react-query";
import { AtendentService } from "../../@types/atendent-service.type";

export function useGetAtendentServices(id: string | undefined) {
  const [services, setServices] = useState<AtendentService[]>()

  const { data, isLoading } = useQuery({
    queryKey: ['get-atendent-services', id],
    queryFn: () => getAtendentServices(id!),
    enabled: !!id,
  })

  useEffect(() => {
    if (data && !isLoading) {
      setServices(data)
    }
  }, [data, isLoading])

  return { services, isLoading }
}

