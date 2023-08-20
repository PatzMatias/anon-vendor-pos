import { ChildProps, ClassNameProps } from "~/definitions/react";
import { cn } from "~/lib/utils";

interface IProps extends ChildProps, ClassNameProps {
  type: "ordered" | "unordered"
}

export default function List({ children, className, type }: IProps) {

    const classes = cn("my-6 ml-6 list-disc [&>li]:mt-2", className);

    return "ordered" === type ? (
      <ul className={classes}>
        {children}
      </ul>
    ) :  (
      <ol className={classes}>
        {children}
      </ol>
    )
}