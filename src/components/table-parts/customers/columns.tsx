"use client"
 
import type { ColumnDef } from "@tanstack/react-table"
import type { CustomerInfo } from "~/pages/api/customers";
import { 
  ArrowUpDown,
  MoreHorizontal,
  PhoneIcon,
} from "lucide-react";
import { Button } from "~/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/DropdownMenu";
import Link from "next/link";

export const columns: ColumnDef<CustomerInfo>[] = [
  {
    accessorKey: "first_name",
    accessorFn: (row) => (
      <div>
        <h5 className="font-semibold">{`${row.first_name} ${row.last_name}`}</h5>
        <a className="text-primary visited:text-primary flex gap-2" href={`tel:${row.phone_number}`}><PhoneIcon size={16} /> <span>{row.phone_number}</span></a>
        <address>{row.address}</address>
      </div>
    ),
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Customer Info
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: info => info.getValue()
  },
  {
    id: 'actions',
    enableHiding: false,
    header: 'Actions',
    accessorFn: (row) => {
      return (
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem asChild>
                <Link className="actions-menu-link" href={`/dashboard/customers/${row.id}`}>Edit Customer Info</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    },
    cell: info => info.getValue()
  },
]

export default columns;