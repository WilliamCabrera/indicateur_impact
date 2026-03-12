import { LANGUAGES } from "@/lib/utils";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: LANGUAGES,
  defaultLocale: "fr",
  localePrefix: "always",
});
