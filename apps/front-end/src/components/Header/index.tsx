import { Button, Text, Header as UIHeader } from "@app/ui";

export function Header() {

  return (
    <UIHeader>
      <div className="h-[80px] backdrop-blur-lg shadow-md relative flex w-full items-center px-5 py-2.5 ">
        <div className="ml-auto" />

        <div className="font-bold text-white text-lg flex flex-row gap-5 mr-[100px]">
          <Text as="h1">Atendentes</Text>
          <Text as="h1">Especialidades</Text>
          <Text as="h1">Fale Conosco</Text>
        </div>
        <div className="flex flex-row gap-5">
          <Button className="btn-primary">Entrar</Button>
          <Button className="btn-outline-primary">Cadastrar</Button>
        </div>
      </div>
    </UIHeader>
  )
}