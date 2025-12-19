import { MobileAtendentProfileComponent } from "../../../components/Atendents/Profile/mobile"
import { AtendentProfileComponent } from "../../../components/Atendents/Profile/desktop"
import useStore from "../../../state"
import { useParams } from "react-router-dom"
import { useGetAtendentById } from "../../../hooks/atendents/useGetAtendentById"

export function AtendentProfilePage() {
  const { isMobile } = useStore()
  const { id } = useParams<{ id: string }>()
  const { atendent, isLoading } = useGetAtendentById(id)
  console.log(atendent)
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
        />
      ) : (
        <AtendentProfileComponent
          name={atendent.name}
          profileImg={atendent.user.profileImg}
          rating={atendent.rating}
        />
      )}
    </>
  )
}