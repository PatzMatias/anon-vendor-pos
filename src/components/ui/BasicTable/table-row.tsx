import { ChildProps, ClassNameProps } from "~/definitions/react";
import { cn } from "~/lib/utils";

interface IProps extends ChildProps, ClassNameProps {}

export function TableRow({
  children,
  className
}: IProps) {

  const classes = cn("m-0 border-t p-0 even:bg-muted", className)

  return (
    <tr className={classes}>
      {children}
    </tr>
  )
}