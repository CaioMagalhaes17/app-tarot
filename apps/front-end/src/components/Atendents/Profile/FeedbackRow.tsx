import { HSeparator, Text } from "@app/ui";
import { Star } from "lucide-react";
import { userImg } from "../../../constants/images";
import { FeedbackType } from "../../../@types/atendent.type";
import useStore from "../../../state";

export function FeedbackRow({ feedback }: { feedback: FeedbackType }) {
  const { isMobile } = useStore()
  const totalStars = 5;
  return (
    <>
      <div className="max-h-[140px] mt-5 flex flex-row items-start gap-5">
        <div className="w-[100px]">
          <img width="100" height="100" src={userImg} className="rounded-3xl" />
        </div>
        <div className="flex flex-col max-w-[80%]">
          <Text className={`flex flex-row gap-5 items-center text-white ${isMobile ? 'text-left ' : 'text-center text-lg'}`} as="span">
            {feedback.senderName}
            <Text className="text-white-dark mt-1" as="span">
              {feedback.date}
            </Text>
          </Text>
          <div className="flex flex-row mb-2">
            {[...Array(totalStars)].map((_, index) => (
              <Star
                key={index}
                className={index < feedback.rating ? "fill-yellow-500 text-yellow-500" : "fill-none text-gray-300"}
                size={16}
              />
            ))}
          </div>
          <div className="text-left">
            <Text className="text-white-dark" as="span">{feedback.description}</Text>
          </div>
        </div>
      </div>
      <HSeparator />
    </>
  )
}