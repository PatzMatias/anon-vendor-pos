import { ChildProps, ClassNameProps } from "~/definitions/react";
import { cn } from "~/lib/utils";

interface IProps extends ChildProps, ClassNameProps {}

export function TableHeader({
  children,
  className
}: IProps) {

  const classes = cn("border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right", className)

  return (
    <th className={classes}>
      {children}
    </th>
  )
}