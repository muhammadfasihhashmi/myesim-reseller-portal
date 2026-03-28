"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Payment = {
  name: string;
  total_packages: number;
  total_price: number;
};
export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "total_packages",
    header: "Total Packages",
  },
  {
    accessorKey: "total_price",
    header: "Total Price",
  },
];
