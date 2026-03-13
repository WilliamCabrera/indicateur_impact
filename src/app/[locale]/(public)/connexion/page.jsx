import { BQCard } from "@/components/ui/bqcard";
import { BQInput } from "@/components/ui/bqinput";
import { BQButton } from "@/components/ui/buttons/bqbuttons";
import { H4Bold } from "@/components/ui/typography";
import { getPageTranslations } from "@/i18n/getPageTranslations";

export default async function Connexion() {
  const t = await getPageTranslations("ConnexionPage");

  return (
    <div className="flex flex-col items-center  justify-start w-full min-h-[70vh] bg-(--color-surface-base-primary)">
      <div className="w-full  p-(--space-800) pt-(--space-200)">
        <img src="/logo/logo_vertical.svg" />
      </div>
      <div className="w-full flex-1 relative pt-(--space-800) px-(--space-500)">
        <img
          src="/images/homepage-bg-img.jpg"
          alt="Placeholder"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <BQCard
          className={
            "relative z-10 w-114.75 h-90 rounded-(--space-500) bg-(--color-surface-base-primary) p-(--space-500) gap-(--space-500)"
          }
        >
          <H4Bold
            className={
              "w-full text-(--color-text-neutral-primary) text-left first-letter:uppercase"
            }
          >
            {t("createAccount")}
          </H4Bold>
          <form className="flex flex-col gap-(--space-300) t-body-2">
            <BQInput placeholder={t("usernamePlaceholder")} />
            <BQInput placeholder={t("organisationPlaceholder")} />
            <BQInput placeholder={t("emailPlaceholder")} />
            <BQInput placeholder={t("passwordPlaceholder")} />
            <BQInput placeholder={t("privacyPlaceholder")} />
            <BQButton type="good" variant={"primary"} className="w-full t-h4">
              {t("createAccount")}
            </BQButton>
          </form>
        </BQCard>
      </div>
    </div>
  );
}
