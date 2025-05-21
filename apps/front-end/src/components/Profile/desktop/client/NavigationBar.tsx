import { IconCard, IconClock, IconUser, Text } from "@app/ui";

export function ClientNavigationBar({ handleChangeTab, currentTab }: { handleChangeTab: (tab: string) => void, currentTab: string }) {


  return (
    <>
      <div className="items-center rounded bg-black font-bold p-4 flex flex-row gap-10">
        <div onClick={() => handleChangeTab('user')} className={`ml-[50px] cursor-pointer ${currentTab === 'user' && 'text-blue-500 border-b border-b-blue-500 '} text-lg flex items-center flex-row gap-2`}>
          <IconUser />
          <Text as="span">Dados Pessoais</Text>
        </div>
        <div onClick={() => handleChangeTab('payment')} className={`cursor-pointer ${currentTab === 'payment' && 'text-blue-500 border-b border-b-blue-500 '} text-lg flex items-center flex-row gap-2`}>
          <IconCard />
          <Text as="span">Dados de Pagamentos</Text>
        </div>
        <div onClick={() => handleChangeTab('hist')} className={`cursor-pointer ${currentTab === 'hist' && 'text-blue-500 border-b border-b-blue-500 '} text-lg flex items-center flex-row gap-2`}>
          <IconClock />
          <Text as="span">Históricos</Text>
        </div>
      </div>
    </>
  )
}