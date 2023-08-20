import { ChildProps } from "~/definitions/react";

interface IProps extends ChildProps {}

export function TypographyLead({ children }: IProps) {
  return (
    <p className="text-xl text-muted-foreground">
      {children}
    </p>
  )
}

export function TypographyLarge({ children }: IProps) {
  return (
    <div className="text-lg font-semibold">{children}</div>
  )
}

export function TypographySmall({ children }: IProps) {
  return (
    <small className="text-sm font-medium leading-none">{children}</small>
  )
}

export function TypographyMuted({ children }: IProps) {
  return (
    <p className="text-sm text-muted-foreground">{children}</p>
  )
}