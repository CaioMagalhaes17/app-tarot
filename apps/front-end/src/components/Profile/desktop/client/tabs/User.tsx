import { Button, HSeparator, IconLockDots, Input, Panel, Text } from "@app/ui";
import { userImg } from "../../../../../constants/images";
import { UserType } from "../../../../../@types/user.type";

export function UserTab({ user }: { user: UserType }) {
  return (
    <>
      <Panel className="p-5 backdrop-blur-md border-[#6028dc1a] bg-[#26123c]/80 border rounded-xl">
        <div className="flex flex-col items-center">
          <div className="mt-3">
            <img src={userImg} className="rounded-xl w-[150px]" />
          </div>
          <div className="flex flex-col mt-5 w-[50%]">
            <div className="text-left">
              <Text className="ml-3  relative top-3 bg-[#26123c]/80" as="span">Nome</Text>
              <Input className="!p-3 !pl-6 !font-bold" type="text" value={user.name} />
            </div>
            <div className="text-left">
              <Text className="ml-3  relative top-3 bg-[#26123c]/80 rounded" as="span">Login</Text>
              <Input className="!p-3 !pl-6 !font-bold" type="text" value={user.login} />
            </div>
            <div className="text-left">
              <Text className="ml-3  relative top-3 bg-[#26123c]/80" as="span">Telefone</Text>
              <Input className="!p-3 !pl-6 !font-bold" type="text" placeholder="" />
            </div>
            <div className="text-left">
              <Text className="ml-3  relative top-3 bg-[#26123c]/80" as="span">Senha</Text>
              <Input className="!p-3 !pl-6 !font-bold" type="password" value="senhasenha" />
            </div>
          </div>
          <div className="flex flex-row mt-5 gap-5">
            <Button className="btn-primary"><IconLockDots className="mr-2" />Redefinir Senha</Button>
            <Button className="btn-outline-primary">Redefinir Senha</Button>
          </div>

        </div>
      </Panel>
      <Panel className="p-5 backdrop-blur-md border-[#6028dc1a] bg-[#26123c]/80 border rounded-xl mt-5">
        <div className="flex flex-col items-center">
          <Text className="text-3xl text-white font-bold" as="h1">Notificações</Text>
          <HSeparator className="w-[50%] mt-1 mb-1" />
          <div className="mt-5 flex flex-row gap-2 items-center">
            <Text className="font-bold text-white" as="h1">Receber notificações por WhatsApp?</Text>
            <button
              onClick={() => ''}
              className={`relative inline-flex h-6 w-12 items-center rounded-full transition ${true ? "bg-primary" : "bg-gray-300"
                }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${true ? "translate-x-6" : "translate-x-1"
                  }`}
              />
            </button>
          </div>
          <div className="mt-5 flex flex-row gap-2 items-center">
            <Text className="font-bold text-white" as="h1">Receber notificações por WhatsApp?</Text>
            <button
              onClick={() => ''}
              className={`relative inline-flex h-6 w-12 items-center rounded-full transition ${true ? "bg-primary" : "bg-gray-300"
                }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${true ? "translate-x-6" : "translate-x-1"
                  }`}
              />
            </button>
          </div>
          <div className="mt-5 flex flex-row gap-2 items-center">
            <Text className="font-bold text-white" as="h1">Receber notificações por WhatsApp?</Text>
            <button
              onClick={() => ''}
              className={`relative inline-flex h-6 w-12 items-center rounded-full transition ${true ? "bg-primary" : "bg-gray-300"
                }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${true ? "translate-x-6" : "translate-x-1"
                  }`}
              />
            </button>
          </div>
        </div>

      </Panel>
    </>
  )
}