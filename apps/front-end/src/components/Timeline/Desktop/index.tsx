import { Button, HSeparator, IconChat, IconHeart, IconPlus, Panel, Text } from "@app/ui";
import { ClientPostBox } from "./ClientPostBox";
import { userImg } from "../../../constants/images";
import { MessageType } from "../../../@types/chat.type";
import { PostType } from "../../../@types/post";

export function DesktopTimeLine({ messages, posts }: { posts: PostType[], messages: MessageType[] }) {
  return (
    <>
      <Panel className="min-h-screen mt-5">
        <div className="flex w-[1500px] flex-row gap-5 mr-auto ml-auto">
          <div className=" w-[400px] rounded-xl h-5">
          </div>
          <div className="flex flex-col">
            <div className="bg-black w-[800px] rounded-xl flex flex-col p-4">
              <ClientPostBox />
            </div>
            <HSeparator className="mb-5" />
            {posts.map((item) => (
              <>
                <div className="bg-black w-[800px] rounded-xl flex flex-col p-4 mb-5">
                  <div className="flex items-center mb-5 gap-3 flex-row">
                    <img src={userImg} className="rounded-full w-10 ml-2" />
                    <div className="flex flex-col">
                      <Text className=" text-lg font-bold text-white" as="h1">{item.authorName}</Text>
                      <Text className="" as="span">{item.postTimePosted}</Text>
                    </div>
                    <Button className="ml-auto btn-primary"><IconPlus className="mr-2" />Seguir</Button>
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
                  <HSeparator />
                  <div className="flex flex-row gap-10 mt-5 items-center justify-center">
                    <Button className="btn-primary">Contratar Serviço</Button>
                    <Button className="btn-outline-primary"><IconChat /><span className="ml-2">Chamar no Chat</span></Button>
                  </div>
                </div>
              </>
            ))}

          </div>
          <div className="w-[400px] bg-black rounded-xl h-[400px]">
            <div className="flex flex-col p-4">
              <div className="flex flex-row items-center">
                <Text className="text-xl text-white font-bold" as="h1">Conversas</Text>
                <div className="ml-auto" />
                <Button className="btn-outline-primary btn-sm"><IconChat /><span className="ml-2">Chat</span></Button>
              </div>
              <HSeparator className="mt-1 mb-1" />
              <div className="flex flex-col gap-2">
                {messages.map((item) => (
                  <div className="flex flex-row mt-2">
                    <img src={item.sender.profileImg} className="rounded-full w-[50px]" />
                    <div className="flex flex-col">
                      <Text className="font-bold text-white text-lg ml-2" as="h1">{item.sender.name}</Text>
                      <Text className="font-bold w-full text-ellipsis text ml-2 flex flex-row" as="h1">
                        {item.text.length > 23 ? (item.text.slice(0, -(item.text.length - 23)) + '...') : item.text}
                        <span className="ml-auto">15 min</span>
                      </Text>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </Panel>
    </>
  )
}