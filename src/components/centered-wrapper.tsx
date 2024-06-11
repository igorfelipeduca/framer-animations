import { ComponentProps } from "react"
import { VariantProps, tv } from "tailwind-variants"

const centeredWrapper = tv({
  base: "flex justify-center",
  variants: {
    screen: {
      true: "h-screen w-full items-center justify-center",
    },
  },
})

type CenteredWrapperProps = ComponentProps<"div"> &
  VariantProps<typeof centeredWrapper>

export default function CenteredWrapper({
  className,
  children,
  screen,
  ...props
}: CenteredWrapperProps) {
  return (
    <div className={centeredWrapper({ screen, className })} {...props}>
      {children}
    </div>
  )
}
