import { Button, IconCard, IconClock, IconUser, Input, Panel } from "@app/ui";
import { useProfileController } from "../useProfileController";
import { userImg } from "../../../constants/images";
import { Payments } from "./Payments";
import { Services } from "./Services";

export function ClientProfilePage() {
  const { user, isMobile, setTab, tab } = useProfileController()
  return (
    <>

      <div className={`p-4 flex flex-wrap gap-3 ml-auto mr-auto ${!isMobile && 'max-w-[1400px]'}`}>
        <Button onClick={() => setTab('user')} className={`btn-sm ${tab === 'user' || !tab ? 'btn-primary' : 'btn-outline-primary'}`}><IconUser className="mr-2" /> Dados Pessoais</Button>
        <Button onClick={() => setTab('services')} className={`btn-sm ${tab === 'services' ? 'btn-primary' : 'btn-outline-primary'}`}><IconClock className="mr-2" /> Atendimentos</Button>
        <Button onClick={() => setTab('payments')} className={`btn-sm ${tab === 'payments' ? 'btn-primary' : 'btn-outline-primary'}`}><IconCard className="mr-2" /> Pagamentos</Button>
      </div>
      {tab === 'user' || !tab ? (
        <Panel className={`p-2 mb-10 min-h-screen ${!isMobile && 'max-w-[1400px]'} ml-auto mr-auto`}>
          <div className="flex items-center gap-4 mb-5">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className={`text-white font-smythe ${isMobile ? 'text-5xl' : 'text-8xl'} whitespace-nowrap px-2`}>
              Perfil
            </span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
          {user && (
            <Panel className={`mr-auto ml-auto border border-dark bg-black h-full ${!isMobile && 'max-w-[800px]'} rounded-xl flex flex-col p-4 font-bold`}>
              <div className="flex items-center justify-center w-full">
                <img src={userImg} className="rounded-xl w-[150px]" />
              </div>
              <div className={` mt-5 flex flex-col gap-5`}>
                <div>
                  <label className="text-left text-lg text-white" htmlFor="Name">Nome</label>
                  <Input id="Name" type="text" value={user.name} className="form-input " />
                </div>
                <div>
                  <label className="text-left text-lg text-white" htmlFor="Name">Login</label>
                  <Input id="Name" type="text" value={user.login} className="form-input " />
                </div>
                <div>
                  <label className="text-left text-lg text-white" htmlFor="Name">Telefone</label>
                  <Input id="Name" type="text" value={user.login} className="form-input " />
                </div>
              </div>
            </Panel>
          )}
        </Panel>
      ) : ''}

      {tab === 'payments' && (
        <Payments />
      )}

      {tab === 'services' && (
        <Services />
      )}
    </>
  )
}