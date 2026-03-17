"use client";

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";
import { cn } from "@/lib/utils";
import {
  H4Bold,
  H5,
  TextBody2Bold,
  TextBody3,
} from "@/components/ui/typography";

const ch = createColumnHelper();

// ─── Colonne Actions partagée ──────────────────────────────────

const ACTIONS = [
  {
    icon: "/icons/visualise.svg",
    label: "Visualiser",
    className: "",
  },
  {
    icon: "/icons/modify.svg",
    label: "Modifier",
    className: "",
  },
  {
    icon: "/icons/duplicate.svg",
    label: "Dupliquer",
    className: "",
  },
  {
    icon: "/icons/archive.svg",
    label: "Archiver",
    className: "",
  },
  {
    icon: "/icons/delete.svg",
    label: "Supprimer",
    className: "",
  },
];

function ActionCell() {
  return (
    <div className="flex items-center gap-2.5 max-h-8.5 justify-center">
      {ACTIONS.map(({ icon, label, className: clsn }) => (
        <button
          key={label}
          title={label}
          className={cn(
            clsn,
            "opacity-100 hover:opacity-100 transition-opacity cursor-pointer"
          )}
        >
          <img
            src={icon}
            alt={label}
            className="size-5 object-contain w-full h-full"
          />
        </button>
      ))}
    </div>
  );
}

const actionColumn = ch.display({
  id: "actions",
  header: "Action",
  cell: () => <ActionCell />,
});

// ─── Colonnes de base ──────────────────────────────────────────

function makeBaseColumns() {
  return [
    ch.accessor("nom", {
      header: "",
      cell: (info) => (
        <TextBody2Bold className=" text-(--color-text-neutral-primary)">
          {info.getValue()}
        </TextBody2Bold>
      ),
    }),
    ch.accessor("responsable", {
      header: "Responsable",
      cell: (info) => (
        <TextBody3 className="text-sm text-(--color-text-neutral-primary)">
          {info.getValue()}
        </TextBody3>
      ),
    }),
    ch.accessor("date", {
      header: "Date",
      cell: (info) => (
        <TextBody3 className="text-sm text-(--color-text-neutral-primary)">
          {info.getValue()}
        </TextBody3>
      ),
    }),
    ch.accessor("confidentialite", {
      header: "Confidentialité",
      cell: (info) => (
        <TextBody3 className="text-sm text-(--color-text-neutral-primary)">
          {info.getValue()}
        </TextBody3>
      ),
    }),
    actionColumn,
  ];
}

// ─── Colonnes par table ────────────────────────────────────────

export const projetsActifsColumns = makeBaseColumns();
export const enDeveloppementColumns = makeBaseColumns();
export const historiqueColumns = makeBaseColumns();

// ─── Données ──────────────────────────────────────────────────

export const projetsActifsData = [
  {
    nom: "Café William",
    responsable: "Julianne Carrera",
    date: "21.09.25",
    confidentialite: "Individu",
  },
  {
    nom: "Mine Lac Dana",
    responsable: "Julianne Carrera",
    date: "12.07.25",
    confidentialite: "Équipe",
  },
  {
    nom: "Projet 3",
    responsable: "Julianne Carrera",
    date: "15.08.25",
    confidentialite: "Organisation",
  },
  {
    nom: "Projet 4",
    responsable: "Julianne Carrera",
    date: "10.10.25",
    confidentialite: "Individu",
  },
  {
    nom: "…",
    responsable: "Julianne Carrera",
    date: "10.12.25",
    confidentialite: "Individu",
  },
];

export const enDeveloppementData = [
  {
    nom: "Projet 5",
    responsable: "Julianne Carrera",
    date: "21.09.25",
    confidentialite: "Individu",
  },
  {
    nom: "Projet 6",
    responsable: "Julianne Carrera",
    date: "12.07.25",
    confidentialite: "Équipe",
  },
];

export const historiqueData = [
  {
    nom: "Projet 7",
    responsable: "Julianne Carrera",
    date: "21.09.25",
    confidentialite: "Individu",
  },
  {
    nom: "Projet 8",
    responsable: "Julianne Carrera",
    date: "12.07.25",
    confidentialite: "Équipe",
  },
  {
    nom: "…",
    responsable: "Julianne Carrera",
    date: "15.08.25",
    confidentialite: "Organisation",
  },
];

// ─── Composant principal ──────────────────────────────────────

export default function DashboardTableSection() {
  return (
    <div className="flex flex-col gap-6">
      <ProjectTable
        title="Projets actifs"
        columns={projetsActifsColumns}
        data={projetsActifsData}
      />
      <ProjectTable
        title="En développement"
        columns={enDeveloppementColumns}
        data={enDeveloppementData}
      />
      <ProjectTable
        title="Historique"
        columns={historiqueColumns}
        data={historiqueData}
      />
    </div>
  );
}

// ─── Table réutilisable ───────────────────────────────────────

export const ProjectTable = ({ title, columns, data }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex flex-col gap-8">
      {/* Header : titre de section + en-têtes de colonnes */}
      <div className="flex px-2 pb-1">
        {table.getHeaderGroups().map((headerGroup) =>
          headerGroup.headers.map((header, i) => (
            <div key={header.id} className={i === 0 ? "flex-2" : "flex-1"}>
              {i === 0 ? (
                <H4Bold className="f text-(--color-text-neutral-primary)">
                  {title}
                </H4Bold>
              ) : (
                <H5 className="text-(--color-text-neutral-primary) t-h5">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </H5>
              )}
            </div>
          ))
        )}
      </div>

      {/* Lignes dans une card */}
      <div className="rounded-bq-md bg-(--color-surface-base-secondary) opacity-100 shadow-sm border border-(--color-border-neutral-secondary) overflow-hidden p-(--space-500)">
        {table.getRowModel().rows.map((row) => (
          <div
            key={row.id}
            className={cn(
              "flex items-center px-4 py-3",
              "hover:bg-(--color-surface-neutral-secondary) transition-colors cursor-default"
            )}
          >
            {row.getVisibleCells().map((cell, j) => (
              <div key={cell.id} className={j === 0 ? "flex-2" : "flex-1"}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
