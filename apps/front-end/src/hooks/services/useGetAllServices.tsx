import { useEffect, useState } from "react";
import { getAllServices } from "../../api/services/getAll";
import { useQuery } from "@tanstack/react-query";
import { Service } from "../../@types/atendent-service.type";

export function useGetAllServices() {
  const [services, setServices] = useState<Service[]>()

  const { data, isLoading } = useQuery({
    queryKey: ['get-all-services'],
    queryFn: getAllServices,
  })

  useEffect(() => {
    if (data && !isLoading) {
      setServices(data)
    }
  }, [data, isLoading])

  return { services, isLoading }
}

