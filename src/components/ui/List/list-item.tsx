import type { ChildProps, ClassNameProps } from "~/definitions/react";
import { cn } from "~/lib/utils";

interface IProps extends ChildProps, ClassNameProps {}

export default function ListItem({ children, className }: IProps) {
    return (
      <li className={cn(className)}>
        {children}
      </li>
    )
}