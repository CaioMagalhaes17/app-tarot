import { useState } from "react";
import { useMinutesController } from "./useMinutesController";
import { DesktopMinutesPage } from "./DesktopMinutes";
import { MobileMinutesPage } from "./MobileMinutes";

export function MinutesPage() {
  const plans = [
    '',
    '', ''
  ]
  const [faqOpen, setFaqOpen] = useState({ id: '' })
  const { isMobile } = useMinutesController()
  return (
    <>
      {isMobile ? (<MobileMinutesPage faqOpen={faqOpen} plans={plans} setFaqOpen={setFaqOpen} />) : (<DesktopMinutesPage faqOpen={faqOpen} plans={plans} setFaqOpen={setFaqOpen} />)}
    </>
  )
}