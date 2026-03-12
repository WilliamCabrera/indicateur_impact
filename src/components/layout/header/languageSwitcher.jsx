"use client";
import { useParams } from "next/navigation";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LANGUAGES } from "@/lib/utils";

export const LanguageSwitcher = () => {
  const params = useParams();
  const { locale } = params;
  const locales = LANGUAGES;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="capitalize">{locale}</div>
      </PopoverTrigger>
      <PopoverContent className="w-fit bg-(--color-surface-base-primary)">
        <ul className="">
          {locales.map((loc) => {
            return loc === locale ? null : (
              <li key={loc}>
                <a href={`/${loc}`} className="cursor-pointer capitalize">
                  {loc}
                </a>
              </li>
            );
          })}
        </ul>
      </PopoverContent>
    </Popover>
  );
};
