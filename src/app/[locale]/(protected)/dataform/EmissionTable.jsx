"use client";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { TextBody2, TextBody3 } from "@/components/ui/typography";
import { Search } from "lucide-react";
import { BQInput } from "@/components/ui/bqinput";
import { BQSimpleSelect } from "@/components/ui/bqsimpleselect";
import { BQButton } from "@/components/ui/buttons/bqbuttons";
import { cn } from "@/lib/utils";
import { BQTable } from "./BQTable";
import { useTranslations } from "next-intl";

const EMPTY_INPUT = {
  cas: "",
  nom: "",
  quantite: "0.000",
  unite: "unités",
  parUnite: "unité",
};

const UNITES = [
  { value: "unités", label: "unités" },
  { value: "grammes", label: "grammes" },
  { value: "kilogrammes", label: "kilogrammes" },
  { value: "milligrammes", label: "milligrammes" },
  { value: "tonnes", label: "tonnes" },
];
const PAR_UNITES = [
  { value: "unité", label: "unité" },
  { value: "minute", label: "minute" },
  { value: "heure", label: "heure" },
  { value: "jour", label: "jour" },
  { value: "an", label: "an" },
];

const INITIAL_ROWS = [
  {
    id: 1,
    cas: "101-68-8",
    nom: "Methylenebis (phenylisocyanate)",
    quantite: "1.090",
    unite: "grammes",
    parUnite: "minute",
  },
  {
    id: 2,
    cas: "000-00-0",
    nom: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum...",
    quantite: "0.000",
    unite: "unités",
    parUnite: "unité",
  },
  {
    id: 3,
    cas: "000-00-0",
    nom: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum...",
    quantite: "0.000",
    unite: "unités",
    parUnite: "unité",
  },
  {
    id: 4,
    cas: "000-00-0",
    nom: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum...",
    quantite: "0.000",
    unite: "unités",
    parUnite: "unité",
  },
  {
    id: 5,
    cas: "000-00-0",
    nom: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum...",
    quantite: "0.000",
    unite: "unités",
    parUnite: "unité",
  },
  {
    id: 6,
    cas: "000-00-0",
    nom: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum...",
    quantite: "0.000",
    unite: "unités",
    parUnite: "unité",
  },
  {
    id: 7,
    cas: "000-00-0",
    nom: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum...",
    quantite: "0.000",
    unite: "unités",
    parUnite: "unité",
  },
];

function CellNumberInput({ value, onChange, muted = false }) {
  return (
    <BQInput
      type="number"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={cn(
        "t-body-3 text-(--color-text-neutral-primary)  border-solid border border-(--color-border-neutral-primary) bg-(--color-surface-neutral-secondary) border-none rounded-bq-sm pt-(--space-150)",
        "pb - (--p - xm) px - (--space - 500) placeholder:text-(--color-text-disabled)"
      )}
    />
  );
}

function SearchInput({ value, onChange, placeholder }) {
  return (
    <div className="relative flex items-center w-full">
      <Search className="absolute right-2 size-3.5 text-(--color-text-neutral-primary) shrink-0 pointer-events-none" />
      <BQInput
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}

export const EmissionTable = ({ data = INITIAL_ROWS }) => {
  const t = useTranslations("EmissionTable");
  const [rows, setRows] = useState(data);
  const [input, setInput] = useState(EMPTY_INPUT);

  const handleDelete = useCallback((id) => {
    setRows((prev) => prev.filter((r) => r.id !== id));
  }, []);

  const dataTableColums = useMemo(() => {
    return [
      {
        accessorKey: "cas",
        id: "cas",
        size: 180,
        header: () => (
          <div className="flex flex-col  gap-(--space-200) ">
            <div className="flex items-center gap-2">
              <TextBody2 className="text-(--color-text-neutral-primary) truncate block">
                {t("numeroCas")}
              </TextBody2>
              <img
                src="/icons/information.svg"
                alt="info"
                className="size-3 shrink-0"
              />
            </div>
            <SearchInput
              value={input.cas}
              onChange={(v) => setInput((p) => ({ ...p, cas: v }))}
              placeholder="Ex : 107-02-8"
            />
          </div>
        ),
        cell: ({ row }) => {
          {
            return <TextBody2>{row.getValue("cas")}</TextBody2>;
          }
        },
      },
      {
        accessorKey: "nom",
        id: "nom",
        size: 540,
        header: () => (
          <div className="flex flex-col  gap-(--space-200) ">
            <div className="flex items-center gap-2 ">
              <TextBody2 className="text-(--color-text-neutral-primary) truncate block">
                {t("nomSubstance")}
              </TextBody2>
              <img
                src="/icons/information.svg"
                alt="info"
                className="size-3 shrink-0"
              />
            </div>
            <SearchInput
              value={input.nom}
              onChange={(v) => setInput((p) => ({ ...p, nom: v }))}
              placeholder="Ex : Acrolein"
            />
          </div>
        ),
        cell: ({ row }) => {
          {
            return <TextBody2>{row.getValue("nom")}</TextBody2>;
          }
        },
      },
      {
        accessorKey: "quantite",
        id: "quantite",
        size: 160,
        header: () => {
          return (
            <div className="flex flex-col  gap-(--space-200) w-full ">
              <TextBody2 className="text-(--color-text-neutral-primary) truncate block">
                {t("quantite")}
              </TextBody2>
              <CellNumberInput
                className="w-full"
                value={input.quantite}
                onChange={(v) => setInput((p) => ({ ...p, quantite: v }))}
                muted
              />
            </div>
          );
        },
        cell: ({ row }) => {
          {
            return (
              <div className="rounded-(--space-200) p-(--space-200) flex justify-center text-(--color-text-neutral-primary) bg-transparent border-solid border border-(--color-border-neutral-primary)">
                <p className="t-body-3">{row.getValue("quantite")}</p>
              </div>
            );
          }
        },
      },
      {
        accessorKey: "unites",
        id: "unites",
        size: 250,
        header: () => {
          return (
            <div className="flex flex-col  gap-(--space-200)">
              <div className="flex items-center gap-2 ">
                <TextBody2 className="text-(--color-text-neutral-primary) truncate block">
                  {t("unitesRejet")}
                </TextBody2>
              </div>
              <div className="flex items-center gap-2.5 w-full ">
                <BQSimpleSelect
                  value={input.unite}
                  items={UNITES}
                  onChange={(v) => setInput((p) => ({ ...p, unite: v }))}
                  className="min-w-42.5"
                />
                <TextBody3 className="text-(--color-text-neutral-secondary)">
                  {t("par")}
                </TextBody3>
                <BQSimpleSelect
                  value={input.parUnite}
                  items={PAR_UNITES}
                  onChange={(v) => setInput((p) => ({ ...p, parUnite: v }))}
                  className="min-w-42.5"
                />
              </div>
            </div>
          );
        },

        cell: ({ row }) => {
          return (
            <div className="flex items-center gap-2.5 w-full ">
              <div className="min-w-42.5 rounded-(--space-200) p-(--space-200) flex justify-center text-(--color-text-neutral-primary) bg-transparent border-solid border border-(--color-border-neutral-primary)">
                <p className="t-body-3">unités</p>
              </div>
              <TextBody3 className="text-(--color-text-neutral-secondary)">
                {t("par")}
              </TextBody3>
              <div className="min-w-42.5 rounded-(--space-200) p-(--space-200) flex justify-center text-(--color-text-neutral-primary) bg-transparent border-solid border border-(--color-border-neutral-primary)">
                <p className="t-body-3">unités</p>
              </div>
            </div>
          );
        },
      },
      {
        accessorKey: "action",
        id: "action",
        size: 100,
        header: () => {
          return (
            <div className="flex w-full h-full items-end">
              <BQButton>
                <span className="t-h5 text-(--color-text-neutral-primary)">
                  OK
                </span>
              </BQButton>
            </div>
          );
        },
        cell: ({ row }) => {
          return (
            <div
              role="button"
              onClick={() => handleDelete(row.original.id)}
              className="w-8.5 h-8.5 flex justify-center items-center hover:cursor-pointer"
            >
              <img src="/icons/delete.svg" alt="info" className="shrink-0" />
            </div>
          );
        },
      },
    ];
  }, [input, handleDelete, t]);

  return <BQTable columns={dataTableColums} data={rows} />;
};
