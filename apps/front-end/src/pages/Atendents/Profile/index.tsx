import { useParams } from "react-router-dom"
import { useAtendentsController } from "../useAtendentsController"
import { MobileAtendentProfileComponent } from "../../../components/Atendents/Profile/mobile"
import { AtendentProfileComponent } from "../../../components/Atendents/Profile/desktop"

export function AtendentProfilePage() {
  const { id } = useParams() as { id: string }
  const { isMobile } = useAtendentsController()
  return (
    <>
      {isMobile ? (
        <MobileAtendentProfileComponent name="Nome do Atendente" profileImg="https://static.cartasciganas.com/images/users/avatars/cropped_1340205481.jpeg" rating={4} />
      ) : (
        <AtendentProfileComponent name="Nome do Atendente" profileImg="https://static.cartasciganas.com/images/users/avatars/cropped_1340205481.jpeg" rating={4} />
      )}
    </>
  )
}