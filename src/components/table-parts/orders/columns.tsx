"use client"
import React from "react";
import type { ColumnDef } from "@tanstack/react-table"
import type { OrderInfo } from "~/pages/api/orders";
import { 
  ArrowUpDown,
  MoreHorizontal,
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
import { DISPLAY_DATE_FORMAT, PesoPriceFormatter, getLocaleDateString } from "~/definitions/general";


// const columnHelper = createColumnHelper<ProductItem>();
export const columns: ColumnDef<OrderInfo>[] = [
  {
    accessorKey: "created_at",
    enableSorting: true,
    accessorFn: (row) => (getLocaleDateString(row.created_at)),
    sortingFn: 'datetime',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Order Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({row} ) => {
      const date = getLocaleDateString(row.getValue("created_at"), DISPLAY_DATE_FORMAT);
      return (
        <div>
          <h5 className="font-semibold">{date}</h5>
        </div>
      )
    }
  },
  {
    accessorKey: "items",
    header: "# of Items",
    accessorFn: (row) => (
      <div>
        <h5 className="font-semibold">{`${row.items.length} items`}</h5>
      </div>
    ),
    cell: info => info.getValue()
  },
  {
    accessorKey: "total_amount",
    header: "Total Amount",
    cell: ({row} ) => {
      //const formatted = PesoPriceFormatter(row.getValue("total_amount"))
      const formatted = PesoPriceFormatter(row.getValue("total_amount"))
      return (
        <div>
          <h5 className="font-semibold">{formatted}</h5>
        </div>
      )
    }
  },
  {
    accessorKey: "customer",
    header: "Customer",
    accessorFn: (row) => {
      const customer = row.customer
      return (
        <div>
          <h5 className="font-semibold">{`${customer.first_name} ${customer.last_name}`}</h5>
          <a className="text-primary visited:text-primary" href={`tel:${customer.phone_number}`}>{customer.phone_number}</a>
          <address>{customer.address}</address>
        </div>
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
                <Link className="actions-menu-link" href={`/dashboard/orders/print/${encodeURIComponent(row.id)}`}>Print Receipt</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link className="actions-menu-link" href={`/dashboard/orders/${encodeURIComponent(row.id)}`}>Edit Order</Link>
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