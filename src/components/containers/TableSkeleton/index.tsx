"use client"

import { Skeleton } from "~/components/ui/Skeleton";
import { cn } from "~/lib/utils";

interface IProps {
  columnCount: number;
}

export default function TableSkeleton({ columnCount }: IProps) {
  const createHeaderRowsAndColumns = () => {
    return (
      Array(1).fill(1).map((c, cIndex) => {
      return  (
        <tr key={cIndex} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
          {
            Array(columnCount).fill(1).map((r, rIndex) => (
              <th key={rIndex} className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                <Skeleton className={cn("w-16 h-8", { ['w-40']: rIndex === 0} )} />
              </th>
              )
            )
          }
        </tr>
      )
    })
  )
  }


  const createBodyRowsAndColumns = () => {
    return (
        Array(10).fill(1).map((_c, cIndex) => {
        return  (
          <tr key={cIndex} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            {
              Array(columnCount).fill(1).map((_r, rIndex) => {
                return (
                  <td key={rIndex} className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    <Skeleton className={cn("w-16 h-8", { ['w-40']: rIndex === 0} )} />
                  </td>
                )
              }
              )
            }
          </tr>
        )
      })
    )
  }

  return (
    <>
      <div className="w-full overflow-hidden rounded-md border">
        <table className="w-full whitespace-nowrap caption-bottom text-sm">
          <thead className="[&_tr]:border-b">
            {createHeaderRowsAndColumns()}
          </thead>
          <tbody className="[&_tr:last-child]:border-0">
            {createBodyRowsAndColumns()}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between space-x-2 py-4">
        <div className="group-1">
          <div className="flex items-center gap-2">
            <Skeleton className="w-16 h-8" />
          </div>
        </div>
        <div className="flex gap-2 group-2">
          <Skeleton className="w-16 h-8" />
          <Skeleton className="w-16 h-8" />
        </div>
      </div>
    </>
  )
}