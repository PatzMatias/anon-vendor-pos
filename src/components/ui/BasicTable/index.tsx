import { ReactElement } from "react";
import { TableCell } from "~/components/ui/BasicTable/table-cell";
import { TableHeader } from "~/components/ui/BasicTable/table-header";
import { TableRow } from "~/components/ui/BasicTable/table-row";
import { ChildProps, ClassNameProps } from "~/definitions/react";
import { cn } from "~/lib/utils";


interface IProps extends ChildProps, ClassNameProps {
  tableHeaderContent?: ReactElement,
  tableBodyContent?: ReactElement
}

export default function TypographyTable({tableHeaderContent, tableBodyContent, children, className}: IProps) {

  const classes = cn("my-6 w-full overflow-y-auto", className)

  return (
    <div className={classes}>
      {children ? children : (
        <table className="w-full">
          <thead>
            <tr className="m-0 border-t p-0 even:bg-muted">
              {tableHeaderContent}
            </tr>
          </thead>
          <tbody>
            {tableBodyContent}
          </tbody>
        </table>
      )}
    </div>
  )
}

export { TableCell, TableHeader, TableRow }

