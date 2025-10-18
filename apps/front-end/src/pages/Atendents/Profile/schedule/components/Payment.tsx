import { Button, Input, Text } from "@app/ui";
import { usePaymentController } from "../usePaymentController";
import ReactInputMask from "react-input-mask";

export function Payment() {
  const { qrCode, setCpf, handleGenerateQrcode, cpf, clientInfos, paymentType, setPaymentType, pixMinutes, pixSeconds } = usePaymentController()
  return (
    <>
      <div className="p-2 mt-5">
        <div className="bg-[#2f224736] border border-[#323b45] rounded-xl flex flex-col p-4">
          <Text className="text-3xl text-white font-extrabold" as='h1'>Formas de Pagamento</Text>
          <div className="flex flex-col mt-5 gap-5">
            <label className="flex items-center text-white">
              <input onClick={() => setPaymentType('card')} checked={paymentType === 'card'} className="mr-2" type="radio" />
              <span className="text-lg">Cartão de Crédito</span>
            </label>
            <label className="flex items-center text-white">
              <input onClick={() => setPaymentType('pix')} checked={paymentType === 'pix'} className="mr-2" type="radio" />
              <span className="text-lg" >Pix</span>
            </label>
          </div>
        </div>


        <div className="bg-[#2f224736] border border-[#323b45] rounded-xl flex flex-col p-4 mt-5">
          <Text className="text-3xl text-white font-extrabold" as='h1'>Pagamento por PIX</Text>

          {qrCode !== '' ? (
            <div className="flex items-center justify-center mt-2 flex-col">
              <img width={'200px'} src="https://hexdocs.pm/qr_code/docs/qrcode.svg" />
              <div className="text-left mt-5">
                <Text className="text-xl " as='p'>Código válido por:
                  <span className="ml-2 font-extrabold">
                    {String(pixMinutes).padStart(2, "0")}:
                    {String(pixSeconds).padStart(2, "0")}
                  </span>
                </Text>
              </div>
            </div>
          ) : (
            <>
              <div className="mt-3">
                <label className="text-left text-white">Nome</label>
                <Input defaultValue={clientInfos.name} type="text" placeholder="Digite seu nome completo" />
              </div>

              <div className="mt-3 flex flex-col">
                <label className="text-left text-white">CPF</label>
                <ReactInputMask
                  mask="999.999.999-99"
                  id="cpf"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                >
                  {(inputProps) => (
                    <Input
                      {...inputProps}
                      type="text"
                      className="border rounded px-2 py-1"
                      placeholder="000.000.000-00"
                    />
                  )}
                </ReactInputMask>
                <Button onClick={() => handleGenerateQrcode()} className="mt-3 btn-primary">Gerar QR Code</Button>
              </div>
            </>
          )}
        </div>


      </div>
    </>
  )
}