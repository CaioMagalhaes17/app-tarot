import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, IconLogout, IconSettings, Text } from "@app/ui";
import { userImg } from "../../constants/images";
import { useHeaderController } from "./useHeaderController";
import { Link } from "react-router-dom";

export function UserButtons() {
  const { clientInfos, handleLogout } = useHeaderController()
  console.log(clientInfos)
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex flex-row items-center">
            <div className="w-[60px]">
              <img width="50" height="50" src={clientInfos.profileImg || userImg} className="sombra rounded-3xl" />
            </div>
            <Text className="text-black dark:text-[#c4c4c4] font-bold text-xl" as="h1">{clientInfos.name}</Text>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-[#d9d9d963] dark:bg-black mt-5 font-extrabold">
          <DropdownMenuItem className="flex flex-row gap-2 text-dark dark:text-white">
            <Link to="/configurations" className=" flex flex-row gap-2">
              <IconSettings />
              Configurações
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-danger">
            <button className="flex" onClick={() => handleLogout()}>
              <IconLogout className="mr-2 rotate-90" />
              Sair
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}