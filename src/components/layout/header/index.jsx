import React from "react";
import { getTranslations } from "next-intl/server";
import { LanguageSwitcher } from "./languageSwitcher";

export const Header = async () => {
  const t = await getTranslations("Header");

  return (
    <header className="p-8 flex items-center w-full">
      <nav className="flex justify-between items-center w-full">
        <div role="button" className="cursor-pointer">
          <img src="/icons/burger.svg" alt="" />
        </div>
        <ul className="flex gap-(--scale-1100) t-h5 ">
          <li className="cursor-pointer">{t("home")}</li>
          <li className="cursor-pointer">
            <LanguageSwitcher />
          </li>
          <li className="cursor-pointer">{t("login")}</li>
        </ul>
      </nav>
    </header>
  );
};
