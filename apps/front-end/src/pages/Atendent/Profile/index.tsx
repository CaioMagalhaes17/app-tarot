
import { MobileAtendentProfileEditComponent } from "../../../components/Atendents/Profile/mobile/Edit"
import { AtendentProfileEditComponent } from "../../../components/Atendents/Profile/desktop/Edit"
import useStore from "../../../state"
import { useGetAtendentServices } from "../../../hooks/atendents/useGetAtendentServices"
import { useGetAtendentFeedbacks } from "../../../hooks/atendents/useGetAtendentFeedbacks"

export function AtendentProfileEditPage() {
  const { isMobile, atendent, clientInfos } = useStore()

  const { services, isLoading: isLoadingServices } = useGetAtendentServices(atendent?.id)
  const { feedbacks, isLoading: isLoadingFeedbacks } = useGetAtendentFeedbacks(atendent?.id)

  if (!atendent) {
    return <div className="text-white text-center p-8">Carregando perfil...</div>
  }

  return (
    <>
      {isMobile ? (
        <MobileAtendentProfileEditComponent
          atendent={atendent}
          profileImg={clientInfos.profileImg}
          services={services || []}
          feedbacks={feedbacks || []}
          isLoadingServices={isLoadingServices}
          isLoadingFeedbacks={isLoadingFeedbacks}
        />
      ) : (
        <AtendentProfileEditComponent
          profileImg={clientInfos.profileImg}
          atendent={atendent}
          services={services || []}
          feedbacks={feedbacks || []}
          isLoadingServices={isLoadingServices}
          isLoadingFeedbacks={isLoadingFeedbacks}
        />
      )}
    </>
  )
}

