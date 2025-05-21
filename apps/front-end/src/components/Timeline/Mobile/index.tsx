import { IconChat, IconHeart, Panel, Text } from "@app/ui";
import { ClientPostBox } from "../Desktop/ClientPostBox";
import { postsMock } from "../../../mocks/posts";


export function MobileTimeline() {
  return (
    <>
      <Panel className="mt-5 p-2 mb-[500px]">
        <div className="flex flex-col">
          <div className="bg-black w-full rounded-xl flex flex-col p-4 mb-5">
            <ClientPostBox />
          </div>
          {postsMock.map((item) => (
            <>
              <div className="bg-black w-full rounded-xl flex flex-col p-4 mb-5">
                <div className="flex items-center mb-5 gap-3 flex-row">
                  <img src={item.authorProfileImg} className="rounded-full w-10 ml-2" />
                  <div className="flex flex-col">
                    <Text className=" text-lg font-bold text-white" as="h1">{item.authorName}</Text>
                    <Text className="" as="span">{item.postTimePosted}</Text>
                  </div>
                </div>
                <div className="w-full text-left ">
                  <Text className="text-lg text-white" as="span">{item.postDescription}</Text>
                </div>
                <div className="mt-5">
                  {item.postImages.map((image) => (
                    <img src={image} />
                  ))}
                </div>
                <div className="mt-2 flex flex-row gap-3">
                  <div className="ml-auto" />
                  <div className="flex flex-row items-center gap-2">
                    <IconHeart />
                    <Text as="span">{item.postLikes} mil</Text>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <IconChat />
                    <Text as="span">{item.postComents} mil</Text>
                  </div>
                </div>
              </div>
            </>
          ))}

        </div>
      </Panel>
    </>
  )
}