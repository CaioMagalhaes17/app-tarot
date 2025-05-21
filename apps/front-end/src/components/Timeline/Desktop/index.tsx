import { HSeparator, IconChat, IconHeart, Panel, Text } from "@app/ui";
import { ClientPostBox } from "./ClientPostBox";
import { userImg } from "../../../constants/images";
import { postsMock } from "../../../mocks/posts";

export function DesktopTimeLine() {

  return (
    <>
      <Panel className="min-h-screen mt-5">
        <div className="flex w-[1500px] flex-row gap-5 mr-auto ml-auto">
          <div className="bg-black w-[400px] rounded-xl h-5">
          </div>
          <div className="flex flex-col">
            <div className="bg-black w-[800px] rounded-xl flex flex-col p-4">
              <ClientPostBox />
            </div>
            <HSeparator className="mb-5" />
            {postsMock.map((item) => (
              <>
                <div className="bg-black w-[800px] rounded-xl flex flex-col p-4 mb-5">
                  <div className="flex items-center mb-5 gap-3 flex-row">
                    <img src={userImg} className="rounded-full w-10 ml-2" />
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
          <div className="w-[400px] bg-black rounded-xl h-[400px]">

          </div>
        </div>
      </Panel>
    </>
  )
}