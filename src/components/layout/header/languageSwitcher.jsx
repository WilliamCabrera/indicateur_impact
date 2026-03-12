"use client";
import { useParams } from "next/navigation";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LANGUAGES } from "@/lib/utils";
import { Link, usePathname } from "@/i18n/navigation";

export const LanguageSwitcher = () => {
  const params = useParams();
  const { locale } = params;
  const pathname = usePathname();
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
                <Link
                  href={pathname}
                  locale={loc}
                  className="cursor-pointer capitalize"
                >
                  {loc}
                </Link>
              </li>
            );
          })}
        </ul>
      </PopoverContent>
    </Popover>
  );
};
