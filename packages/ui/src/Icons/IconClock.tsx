import { FC } from "react"

interface IconClockProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
}

export const IconClock: FC<IconClockProps> = ({ className, fill = false, duotone = true }) => {
  return (
    <>
      <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2.5" />
        <path d="M12 8V12L14.5 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </>
  )
}
