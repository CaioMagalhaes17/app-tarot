import { AtendentsListComponent } from "../../../components/Atendents/List/desktop";
import { MobileAtendentsListComponent } from "../../../components/Atendents/List/mobile/list";
import { useAtendentsController } from "../useAtendentsController";

export function AtendentsSearchPage() {
  const { isMobile, useSearchAtendents } = useAtendentsController()
  const { atendents } = useSearchAtendents()
  return (
    <>
      {isMobile ? (
        <MobileAtendentsListComponent atendents={atendents} />
      ) : (
        <AtendentsListComponent atendents={atendents} />
      )}
    </>
  )
}