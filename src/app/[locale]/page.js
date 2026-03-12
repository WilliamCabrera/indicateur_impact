import { getTranslations } from "next-intl/server";
import { BQButton } from "@/components/ui/buttons/bqbuttons";
import { H4Regular } from "@/components/ui/typography";

export default async function Home() {
  const t = await getTranslations("HomePage");

  return (
    <div className="flex min-h-screen items-center justify-center ">
      <main className="flex min-h-screen w-full max-w-[1440px] flex-col items-center justify-center  ">
        <div className="flex flex-col items-center gap-6 justify-center w-full">
          <BQButton type="good" className={"w-139.5 px-(--p-sm) py-(--p-xm)"}>
            <H4Regular>{t("createAccount")}</H4Regular>
          </BQButton>

          <BQButton
            type="good"
            outlined
            className={
              "w-139.5 px-(--p-sm) py-(--p-xm) text-(--color-surface-good-primary)"
            }
          >
            <H4Regular>{t("signIn")}</H4Regular>
          </BQButton>
        </div>
      </main>
    </div>
  );
}
