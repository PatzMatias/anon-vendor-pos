import { ChildProps, ClassNameProps } from "~/definitions/react";
import { cn } from "~/lib/utils";

interface IProps extends ChildProps, ClassNameProps {}

export function TableCell({
  children,
  className
}: IProps) {

  const classes = cn("border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right", className)

  return (
    <td className={classes}>
      {children}
    </td>
  )
}