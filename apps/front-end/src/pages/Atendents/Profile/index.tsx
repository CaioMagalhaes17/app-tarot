import { MobileAtendentProfileComponent } from "../../../components/Atendents/Profile/mobile"
import { AtendentProfileComponent } from "../../../components/Atendents/Profile/desktop"
import useStore from "../../../state"

export function AtendentProfilePage() {
  const { isMobile } = useStore()
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