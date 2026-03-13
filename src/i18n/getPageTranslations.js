import { createTranslator } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

export async function getPageTranslations(namespace) {
  const [locale, messages] = await Promise.all([getLocale(), getMessages()]);
  const merged = { ...messages.Commons, ...(messages[namespace] ?? {}) };
  return createTranslator({ locale, messages: merged, namespace: undefined });
}
