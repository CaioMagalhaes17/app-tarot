import { Button } from "@app/ui";
import { useHeaderController } from "./useHeaderController";

export function LoginButtons() {
  const { isMobile, navigate } = useHeaderController()
  return (
    <>
      <div className={`flex flex-row ${isMobile ? 'gap-2' : 'gap-5'}`}>
        <Button onClick={() => navigate('/login')} className={`btn-primary ${isMobile ? 'btn-sm' : ''}`}>Entrar</Button>
        <Button onClick={() => navigate('/signup')} className={`btn-outline-primary ${isMobile ? 'btn-sm' : ''}`}>Cadastrar</Button>
      </div>
    </>
  )
}