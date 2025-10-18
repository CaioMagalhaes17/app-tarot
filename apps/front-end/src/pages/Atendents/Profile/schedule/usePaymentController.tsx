import { useState } from "react"
import useStore from "../../../../state"
import { useTimer } from "react-timer-hook";

export function usePaymentController() {
  const [paymentType, setPaymentType] = useState('card')
  const [cpf, setCpf] = useState('')
  const [qrCode, setQrcode] = useState('')
  const userStore = useStore()

  const { seconds, minutes, restart } = useTimer({
    expiryTimestamp: new Date,
    onExpire: () => console.log("Tempo acabou!"),
  });

  async function handleGenerateQrcode() {
    setQrcode('asdas')
    const time = new Date();
    time.setSeconds(time.getSeconds() + 300);
    restart(time)

  }





  return {
    paymentType,
    setPaymentType,
    clientInfos: userStore.clientInfos,
    cpf,
    setCpf,
    qrCode,
    handleGenerateQrcode,
    pixSeconds: seconds,
    pixMinutes: minutes
  }
}