import { MobileAtendentProfileComponent } from "../../../components/Atendents/Profile/mobile"
import { AtendentProfileComponent } from "../../../components/Atendents/Profile/desktop"
import useStore from "../../../state"
import { useParams } from "react-router-dom"
import { useGetAtendentById } from "../../../hooks/atendents/useGetAtendentById"
import { useGetAtendentServices } from "../../../hooks/atendents/useGetAtendentServices"
import { useGetAtendentFeedbacks } from "../../../hooks/atendents/useGetAtendentFeedbacks"

export function AtendentProfilePage() {
  const { isMobile } = useStore()
  const { id } = useParams<{ id: string }>()
  const { atendent, isLoading } = useGetAtendentById(id)
  const { services, isLoading: isLoadingServices } = useGetAtendentServices(id)
  const { feedbacks, isLoading: isLoadingFeedbacks } = useGetAtendentFeedbacks(id)

  if (isLoading) {
    return <div>Carregando...</div>
  }

  if (!atendent) {
    return <div>Atendente não encontrado</div>
  }

  return (
    <>
      {isMobile ? (
        <MobileAtendentProfileComponent
          name={atendent.name}
          profileImg={atendent.user.profileImg}
          rating={atendent.rating}
          bio={atendent.bio}
          services={services || []}
          feedbacks={feedbacks || []}
          isLoadingServices={isLoadingServices}
          isLoadingFeedbacks={isLoadingFeedbacks}
        />
      ) : (
        <AtendentProfileComponent
          name={atendent.name}
          profileImg={atendent.user.profileImg}
          rating={atendent.rating}
          bio={atendent.bio}
          services={services || []}
          feedbacks={feedbacks || []}
          isLoadingServices={isLoadingServices}
          isLoadingFeedbacks={isLoadingFeedbacks}
        />
      )}
    </>
  )
}