import { useEffect, useState } from "react";
import { getAtendentFeedbacks } from "../../api/atendents/getFeedbacks";
import { useQuery } from "@tanstack/react-query";
import { FeedbackType } from "../../@types/atendent.type";

export function useGetAtendentFeedbacks(atendentId: string | undefined) {
  const [feedbacks, setFeedbacks] = useState<FeedbackType[]>()

  const { data, isLoading } = useQuery({
    queryKey: ['get-atendent-feedbacks', atendentId],
    queryFn: () => getAtendentFeedbacks(atendentId!),
    enabled: !!atendentId,
  })

  useEffect(() => {
    if (data && !isLoading) {
      setFeedbacks(data)
    }
  }, [data, isLoading])

  return { feedbacks, isLoading }
}

