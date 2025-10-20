import { Button } from "@app/ui";
import { useHeaderController } from "./useHeaderController";

export function LoginButtons() {
  const { isMobile, navigate } = useHeaderController()
  return (
    <>
      <Button onClick={() => navigate('/login')} className={`btn-outline-primary ${isMobile ? 'btn-sm' : ''}`}>Entrar</Button>
    </>
  )
}