import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const panelStyle = cva([
  "leftbar",
])

type SidebarProps = ComponentProps<"div"> & VariantProps<typeof panelStyle>;

export function Sidebar({ children, className, ...rest }: SidebarProps) {

  return (
    <nav className={cn(panelStyle({ className }))} {...rest}>
      {children}
    </nav>
  )
}