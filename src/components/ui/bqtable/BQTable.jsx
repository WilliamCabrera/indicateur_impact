"use client";

import React, { useState, useRef, useCallback } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import {
  ChevronUp,
  ChevronDown,
  ChevronsUpDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Search,
  SlidersHorizontal,
  Columns3,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ─────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────

function GlobalFilterInput({ value, onChange }) {
  return (
    <div className="relative flex items-center">
      <Search className="absolute left-2.5 size-4 text-(--color-text-neutral-secondary)" />
      <input
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Rechercher…"
        className={cn(
          "pl-8 pr-3 py-1.5 text-sm rounded-bq-sm border",
          "bg-(--color-surface-neutral-secondary) border-(--color-border-neutral-secondary)",
          "placeholder:text-(--color-text-neutral-secondary) focus:outline-none focus:ring-2 focus:ring-(--color-border-brand-primary)",
        )}
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-2 text-(--color-text-neutral-secondary) hover:text-(--color-text-neutral-primary)"
        >
          <X className="size-3.5" />
        </button>
      )}
    </div>
  );
}

function ColumnManagerPanel({ table, onClose }) {
  return (
    <div className="absolute top-full right-0 mt-1 z-50 min-w-48 rounded-bq-sm border shadow-lg bg-(--color-surface-base-secondary) border-(--color-border-neutral-secondary) p-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold text-(--color-text-neutral-secondary) uppercase tracking-wide">
          Colonnes
        </span>
        <button onClick={onClose} className="text-(--color-text-neutral-secondary) hover:text-(--color-text-neutral-primary)">
          <X className="size-3.5" />
        </button>
      </div>
      <div className="flex flex-col gap-1">
        <label className="flex items-center gap-2 cursor-pointer text-sm py-0.5">
          <input
            type="checkbox"
            checked={table.getIsAllColumnsVisible()}
            onChange={table.getToggleAllColumnsVisibilityHandler()}
            className="rounded accent-(--color-border-brand-primary)"
          />
          <span className="font-medium">Tout afficher</span>
        </label>
        <hr className="border-(--color-border-neutral-secondary) my-1" />
        {table.getAllLeafColumns().map((column) => {
          if (!column.getCanHide()) return null;
          return (
            <label key={column.id} className="flex items-center gap-2 cursor-pointer text-sm py-0.5">
              <input
                type="checkbox"
                checked={column.getIsVisible()}
                onChange={column.getToggleVisibilityHandler()}
                className="rounded accent-(--color-border-brand-primary)"
              />
              <span>{typeof column.columnDef.header === "string" ? column.columnDef.header : column.id}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}

function FilterPanel({ table }) {
  const filterableColumns = table
    .getAllLeafColumns()
    .filter((col) => col.getCanFilter() && col.getIsVisible());

  if (filterableColumns.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-3 p-3 rounded-bq-sm border bg-(--color-surface-neutral-secondary) border-(--color-border-neutral-secondary)">
      {filterableColumns.map((column) => (
        <div key={column.id} className="flex flex-col gap-1 min-w-36">
          <label className="text-xs font-medium text-(--color-text-neutral-secondary)">
            {typeof column.columnDef.header === "string" ? column.columnDef.header : column.id}
          </label>
          <input
            value={column.getFilterValue() ?? ""}
            onChange={(e) => column.setFilterValue(e.target.value)}
            placeholder={`Filtrer…`}
            className={cn(
              "px-2 py-1 text-sm rounded-bq-sm border",
              "bg-(--color-surface-base-secondary) border-(--color-border-neutral-secondary)",
              "placeholder:text-(--color-text-neutral-secondary) focus:outline-none focus:ring-1 focus:ring-(--color-border-brand-primary)",
            )}
          />
        </div>
      ))}
      <div className="flex items-end">
        <button
          onClick={() => table.resetColumnFilters()}
          className="text-xs px-2 py-1 rounded-bq-sm border border-(--color-border-neutral-secondary) text-(--color-text-neutral-secondary) hover:bg-(--color-surface-neutral-secondary) transition-colors"
        >
          Effacer tout
        </button>
      </div>
    </div>
  );
}

function SortIcon({ sorted }) {
  if (sorted === "asc") return <ChevronUp className="size-3.5 shrink-0" />;
  if (sorted === "desc") return <ChevronDown className="size-3.5 shrink-0" />;
  return <ChevronsUpDown className="size-3.5 shrink-0 opacity-40" />;
}

function ResizeHandle({ header }) {
  return (
    <div
      onMouseDown={header.getResizeHandler()}
      onTouchStart={header.getResizeHandler()}
      className={cn(
        "absolute right-0 top-0 h-full w-1 cursor-col-resize select-none touch-none",
        "hover:bg-(--color-border-brand-primary) transition-colors",
        header.column.getIsResizing() ? "bg-(--color-border-brand-primary)" : "bg-(--color-border-neutral-secondary)",
      )}
    />
  );
}

// ─────────────────────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────────────────────

/**
 * BQTable — composant de tableau réutilisable basé sur @tanstack/react-table.
 *
 * Props:
 *  - columns   : définition des colonnes (ColumnDef[])
 *  - data      : tableau de données
 *  - className : classes supplémentaires pour le conteneur
 *  - initialPageSize : taille de page initiale (défaut 15)
 */
export function BQTable({
  columns,
  data = [],
  className,
  initialPageSize = 15,
}) {
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

  const selectedCount = Object.keys(rowSelection).length;
  const { pageIndex, pageSize } = pagination;
  const totalRows = table.getFilteredRowModel().rows.length;
  const pageCount = table.getPageCount();

  const closeColumnManager = useCallback(() => setColumnManagerState(false), []);

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {/* ── Toolbar ── */}
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-2">
          <GlobalFilterInput value={globalFilter} onChange={setGlobalFilter} />
          {selectedCount > 0 && (
            <span className="text-xs text-(--color-text-neutral-secondary)">
              {selectedCount} sélectionné{selectedCount > 1 ? "s" : ""}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Filter panel toggle */}
          <button
            onClick={() => setFilterPanelState((p) => !p)}
            className={cn(
              "flex items-center gap-1.5 px-2.5 py-1.5 text-sm rounded-bq-sm border transition-colors",
              filterPanelState
                ? "bg-(--color-surface-brand-primary) border-(--color-border-brand-primary) text-(--color-text-brand-primary)"
                : "bg-(--color-surface-neutral-secondary) border-(--color-border-neutral-secondary) text-(--color-text-neutral-secondary) hover:bg-(--color-surface-neutral-tertiary)",
            )}
            title="Filtres par colonne"
          >
            <SlidersHorizontal className="size-4" />
            <span>Filtres</span>
            {columnFilters.length > 0 && (
              <span className="ml-0.5 rounded-full bg-(--color-border-brand-primary) text-white text-[10px] size-4 flex items-center justify-center font-bold">
                {columnFilters.length}
              </span>
            )}
          </button>

          {/* Column manager toggle */}
          <div className="relative">
            <button
              onClick={() => setColumnManagerState((p) => !p)}
              className={cn(
                "flex items-center gap-1.5 px-2.5 py-1.5 text-sm rounded-bq-sm border transition-colors",
                columnManagerState
                  ? "bg-(--color-surface-brand-primary) border-(--color-border-brand-primary) text-(--color-text-brand-primary)"
                  : "bg-(--color-surface-neutral-secondary) border-(--color-border-neutral-secondary) text-(--color-text-neutral-secondary) hover:bg-(--color-surface-neutral-tertiary)",
              )}
              title="Gérer les colonnes"
            >
              <Columns3 className="size-4" />
              <span>Colonnes</span>
            </button>
            {columnManagerState && (
              <ColumnManagerPanel table={table} onClose={closeColumnManager} />
            )}
          </div>
        </div>
      </div>

      {/* ── Filter panel ── */}
      {filterPanelState && <FilterPanel table={table} />}

      {/* ── Table ── */}
      <div className="w-full overflow-auto rounded-bq-sm border border-(--color-border-neutral-secondary)">
        <table
          ref={tableRef}
          style={{ width: table.getTotalSize() }}
          className="min-w-full text-sm border-collapse"
        >
          <thead className="bg-(--color-surface-neutral-secondary) sticky top-0 z-10">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    style={{ width: header.getSize() }}
                    className="relative px-3 py-2.5 text-left font-semibold text-(--color-text-neutral-secondary) border-b border-(--color-border-neutral-secondary) select-none whitespace-nowrap"
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        className={cn(
                          "flex items-center gap-1",
                          header.column.getCanSort() && "cursor-pointer hover:text-(--color-text-neutral-primary)",
                        )}
                        onClick={header.column.getCanSort() ? header.column.getToggleSortingHandler() : undefined}
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {header.column.getCanSort() && (
                          <SortIcon sorted={header.column.getIsSorted()} />
                        )}
                      </div>
                    )}
                    {header.column.getCanResize() && (
                      <ResizeHandle header={header} />
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="text-center py-10 text-(--color-text-neutral-secondary)"
                >
                  Aucun résultat
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className={cn(
                    "border-b border-(--color-border-neutral-secondary) transition-colors",
                    row.getIsSelected()
                      ? "bg-(--color-surface-brand-secondary)"
                      : "hover:bg-(--color-surface-neutral-secondary)",
                  )}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      style={{ width: cell.column.getSize() }}
                      className="px-3 py-2.5 text-(--color-text-neutral-primary)"
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* ── Pagination ── */}
      <div className="flex items-center justify-between gap-2 flex-wrap text-sm text-(--color-text-neutral-secondary)">
        {/* Rows info */}
        <span>
          {totalRows === 0
            ? "Aucun résultat"
            : `${pageIndex * pageSize + 1}–${Math.min((pageIndex + 1) * pageSize, totalRows)} sur ${totalRows}`}
        </span>

        {/* Page size selector */}
        <div className="flex items-center gap-2">
          <span>Lignes par page :</span>
          <select
            value={pageSize}
            onChange={(e) =>
              setPagination((p) => ({ ...p, pageSize: Number(e.target.value), pageIndex: 0 }))
            }
            className="rounded-bq-sm border border-(--color-border-neutral-secondary) bg-(--color-surface-neutral-secondary) px-2 py-1 text-sm focus:outline-none"
          >
            {[10, 15, 25, 50, 100].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center gap-1">
          <PaginationButton
            onClick={() => table.firstPage()}
            disabled={!table.getCanPreviousPage()}
            title="Première page"
          >
            <ChevronsLeft className="size-4" />
          </PaginationButton>
          <PaginationButton
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            title="Page précédente"
          >
            <ChevronLeft className="size-4" />
          </PaginationButton>

          <span className="px-2 text-sm">
            Page {pageIndex + 1} / {pageCount || 1}
          </span>

          <PaginationButton
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            title="Page suivante"
          >
            <ChevronRight className="size-4" />
          </PaginationButton>
          <PaginationButton
            onClick={() => table.lastPage()}
            disabled={!table.getCanNextPage()}
            title="Dernière page"
          >
            <ChevronsRight className="size-4" />
          </PaginationButton>
        </div>
      </div>
    </div>
  );
}

function PaginationButton({ onClick, disabled, title, children }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={cn(
        "p-1 rounded-bq-sm border border-(--color-border-neutral-secondary) transition-colors",
        disabled
          ? "opacity-40 cursor-not-allowed"
          : "hover:bg-(--color-surface-neutral-secondary) cursor-pointer",
      )}
    >
      {children}
    </button>
  );
}
