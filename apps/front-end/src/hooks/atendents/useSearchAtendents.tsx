import { useEffect, useState } from "react";
import { AtendentType } from "../../@types/atendent.type";
import { getAtendents } from "../../api/atendents/search";
import { useQuery } from "@tanstack/react-query";

export function useSearchAtendents(
  pagination: { limit: number; page: number },
  searchParams: URLSearchParams
) {
  const [atendents, setAtendents] = useState<AtendentType[]>()

  const { data, isLoading } = useQuery({
    queryKey: [
      'search-atendents',
      pagination.page,
      pagination.limit,
      searchParams.toString()
    ],
    queryFn: () =>
      getAtendents({
        page: pagination.page,
        limit: pagination.limit,
        search: searchParams.get('search') || undefined,
      }),
  })

  useEffect(() => {
    if (data && !isLoading) {
      setAtendents(data.data)
    }
  }, [data, isLoading])

  return { atendents, pagination: data?.pagination, isLoading }
}