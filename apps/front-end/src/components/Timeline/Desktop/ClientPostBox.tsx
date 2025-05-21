import { Button, Input } from "@app/ui";
import { userImg } from "../../../constants/images";

export function ClientPostBox() {
  return (
    <div className="flex flex-col p-2">
      <div className="flex flex-row gap-2">
        <img src={userImg} className="rounded-full w-[50px]" />
        <Input className="!border-none" placeholder="Poste um elogio, " type="text" />
      </div>
      <div className="flex gap-2 mt-3 flex-row">
        <div className="ml-auto" />
        <Button className="btn-primary">Postar</Button>
      </div>
    </div>
  )
}