import { FC } from 'react';

interface IconSearchProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string
  height?: string
}

export const IconSearch: FC<IconSearchProps> = ({ width, height, className, fill = false, duotone = false }) => {
  return (
    <svg width={width ? width : "16"} height={height ? height : "16"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="11.5" cy="11.5" r="9.5" stroke="currentColor" strokeWidth="2.5" opacity={duotone ? '0.5' : '1'} />
      <path d="M18.5 18.5L22 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
};