import { useEffect, useState } from "react";
import { getAtendentAvailability } from "../../api/atendents/getAvailability";
import { useQuery } from "@tanstack/react-query";
import { AvailabilityResponse, AvailabilityParams } from "../../@types/availability.type";

export function useGetAtendentAvailability(
  id: string | undefined,
  params: AvailabilityParams | undefined
) {
  const [availability, setAvailability] = useState<AvailabilityResponse>()

  const { data, isLoading } = useQuery({
    queryKey: ['get-atendent-availability', id, params?.startDate, params?.endDate],
    queryFn: () => getAtendentAvailability(id!, params!),
    enabled: !!id && !!params?.startDate && !!params?.endDate,
  })

  useEffect(() => {
    if (data && !isLoading) {
      setAvailability(data)
    }
  }, [data, isLoading])

  return { availability, isLoading }
}

