import { Button, IconChat, IconUser, Text } from "@app/ui";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function MobileAtendentRow({ name, profileImg, rating, bio }: { name: string, profileImg: string, rating: number, bio: string }) {
  const navigate = useNavigate()
  return (
    <>
      <div className="flex flex-row gap-2 items-center backdrop-blur-lg hover:bg-[#26123c] cursor-pointer bg-[#26123c]/50 border-[#6028dc1a] border-[4px] rounded-xl  p-2">
        <div className="flex flex-col items-center">
          <img src={profileImg} width={'80px'} className="rounded-full" />

          <div className="flex flex-row ">
            {[...Array(rating)].map((_, index) => (
              <Star
                key={index}
                className={index < 5 ? "fill-yellow-500 text-yellow-500" : "fill-none text-gray-300"}
                size={16}
              />
            ))}
          </div>
        </div>
        <div className="text-left">
          <Text className="text-white text-lg" as="h1">{name}</Text>
          <Text as="span" className="mt-3 text-sm text-white-dark">{bio}</Text>
          <div className="flex flex-row mt-2 gap-2 mr-5">
            <Button className="btn-outline-primary ml-auto btn-sm"><IconUser className="mr-2" />Perfil</Button>
            <Button onClick={() => navigate('/chat')} className="btn-primary btn-sm"><IconChat /><span className="ml-2">Chamar</span></Button>
          </div>
        </div>
      </div>
    </>
  )
}