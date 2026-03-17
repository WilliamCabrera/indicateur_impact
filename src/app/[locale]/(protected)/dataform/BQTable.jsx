"use client";
import React, { useRef, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const BQTable = ({
  columns = [],
  data = [],
  className,
  initialPageSize = 15,
}) => {
  const tableRef = useRef(null);

  // ── États de l'interface ──
  const [columnManagerState, setColumnManagerState] = useState(false);
  const [filterPanelState, setFilterPanelState] = useState(false);
  const [globalFilter, setGlobalFilter] = useState("");

  // ── États de la table ──
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});
  const [columnSizing, setColumnSizing] = useState({});
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: initialPageSize,
  });

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter,
      columnSizing,
      pagination,
    },
    enableColumnResizing: true,
    columnResizeMode: "onChange",
    onColumnSizingChange: setColumnSizing,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <Table className={"border-0"}>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader className="[&_tr]:border-0 ">
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow
            className={"border-0 mb-(--space-800)"}
            key={headerGroup.id}
          >
            {headerGroup.headers.map((header) => (
              <TableHead
                className={" text-(--color-text-neutral-primary) t-body-2"}
                key={header.id}
                style={
                  header.column.getSize() !== 150
                    ? { width: header.getSize(), flexShrink: 0 }
                    : { flex: 1, minWidth: 0 }
                }
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        <tr aria-hidden>
          <td
            className="h-(--space-800)"
            colSpan={table.getAllColumns().length}
          />
        </tr>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id} className="border-0">
            {row.getVisibleCells().map((cell) => (
              <TableCell
                key={cell.id}
                style={
                  cell.column.columnDef.size !== undefined
                    ? {
                        width: `${cell.column.getSize()}px`,
                        maxWidth: `${cell.column.getSize()}px`,
                      }
                    : { width: "100%" }
                }
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
