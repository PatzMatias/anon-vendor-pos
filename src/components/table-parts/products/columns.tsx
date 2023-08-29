"use client"
 
import type { ColumnDef } from "@tanstack/react-table"
import type { ProductItem } from "~/pages/api/products"
import { Badge } from "~/components/ui/Badge";
import { 
  ArrowUpDown,
  CheckCircle, 
  MoreHorizontal,
  XCircleIcon, 
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
import Image from "next/image";
import Link from "next/link";

import { PesoPriceFormatter } from "~/definitions/general";

// const columnHelper = createColumnHelper<ProductItem>();

export const columns: ColumnDef<ProductItem>[] = [
  {
    accessorKey: "name",
    accessorFn: (row) => (
      <div>
        <h5 className="font-semibold">{row.name}</h5>
        <small className="text-muted-foreground">{row.short_name}</small>
      </div>
    ),
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: info => info.getValue()
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <span>{"(\u20B1) Price"}</span>
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({row} ) => {
      const price = parseFloat(row.getValue("price"));
      const formatted = PesoPriceFormatter(price);
      return <span>{formatted}</span>
    }
  },
  {
    accessorKey: "available",
    header: "Available",
    cell: ({row}) => {
      const value: boolean = row.getValue("image")

      return value ? <CheckCircle className="text-green-600"/> : <XCircleIcon className="text-red-600" />;
    }
  },
  {
    accessorKey: "categories",
    header: "Categories",
    enableSorting: false,
    cell: ({row}) => {
      const cats: string[] = row.getValue("categories")

      return cats && cats.length > 0 ? (
        <>
          {
            cats.map((text) => <Badge key={text} variant="default">{text}</Badge>)
          }
        </>
      ) : cats;
    }
  },
  {
    accessorKey: "image",
    header: "Image",
    enableSorting: false,
    cell: ({row}) => {
      const imgUrl = row.getValue("image")

      if(imgUrl && typeof imgUrl === "string") {
        return <Image 
          src={imgUrl} 
          width="260"
          height="230"
          className="max-w-[82px] w-full h-auto"  
          loading="lazy"
          alt={`product img`}/>
      }

      return imgUrl;
    }
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
              <DropdownMenuItem>
                <Link className="actions-menu-link" href={`/dashboard/products/${row.id}`}>Edit Product</Link>
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