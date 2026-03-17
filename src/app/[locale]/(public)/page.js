import { getPageTranslations } from "@/i18n/getPageTranslations";
import { BQButton } from "@/components/ui/buttons/bqbuttons";
import { H4Bold, H4Regular } from "@/components/ui/typography";
import { BQCard } from "@/components/ui/bqcard";
import { BQInput } from "@/components/ui/bqinput";
import { ShapeLeaf } from "@/components/ui/svg/shapeLeaf";
import { ShapeFlower } from "@/components/ui/svg/shapeFlower";
import { ShapeDuck } from "@/components/ui/svg/shapeDuck";

export default async function Home() {
  const t = await getPageTranslations("HomePage");

  return (
    <div className="flex flex-col items-center gap-22.5 justify-start w-full min-h-screen pt-33.5">
      <div className="flex flex-col  w-fit  gap-4.5 ">
        <img
          src="/logo/logo_horizontal.svg"
          alt="Logo Indicateur Impact"
          className="w-191.25  object-fit"
        />
        <H4Regular className={"w-83 whitespace-pre-line"}>
          {t("subtitle")}
        </H4Regular>
      </div>
      <div className="flex flex-col  w-full h-148 px-22.5 gap-(--scale-1100)">
        <div className="flex  w-full t-h5 gap-(--scale-800)">
          <p className="m-0 p-0">{t("description1")}</p>
          <p className="m-0 p-0">{t("description2")}</p>
          <p className="m-0 p-0">{t("description3")}</p>
        </div>
        <BQCard className="w-full flex items-center bg-(--color-neutral-500) gap-2.5  pb-(--scale-1100) pt-(--scale-1000) rounded-bq-lg">
          <form className="flex flex-col min-w-139.5 gap-(--scale-600)">
            <H4Regular className={"text-(--color-text-neutral-active)"}>
              {t("loginTitle")}
            </H4Regular>
            <div className="flex flex-col w-full gap-(--scale-300) t-body-2">
              <BQInput placeholder={t("usernamePlaceholder")} />
              <BQInput placeholder={t("passwordPlaceholder")} />
            </div>
            <BQButton
              type="good"
              variant={"primary"}
              className="w-full t-h4 text-(--color-surface-good-primary)  hover:text-(--color-border-good-primary-hover)"
              outlined
            >
              {t("signIn")}
            </BQButton>

            <BQButton type="good" variant={"primary"} className="w-full t-h4">
              {t("createAccount")}
            </BQButton>
          </form>
        </BQCard>
      </div>
      <div className=" -black w-full h-[1072px] relative text-(--color-text-neutral-active) flex flex-col justify-end items-center pb-[120px] bg-(--color-neutral-500) ">
        <img
          src="/images/homepage-bg-img.jpg"
          alt="Placeholder"
          className="absolute top-0 left-0 h-[470px] w-full object-cover"
        />
        <div className="absolute top-0 left-0 h-117.5 w-full bg-linear-to-b from-transparent to-(--color-neutral-500)" />

        <div className="flex flex-col gap-[99px]  items-center">
          <div className="flex justify-center items-center gap-(--scale-500)">
            <BQCard
              className={
                "bg-(--color-surface-good-primary) text-(--color-text-neutral-active) flex flex-row  relative py-(space-600) border-0"
              }
            >
              <div className="flex flex-row">
                <p className="t-h5 w-85.5 h-39.25">
                  Quod cum ita sit, paucae domus studiorum seriis cultibus antea
                  celebratae nunc ludibriis ignaviae torpentis exundant, vocali
                  sonu, perflabili tinnitu fidium resultantes.
                </p>
                <div className="flex flex-col h-full flex-1 justify-end">
                  <img src="/icons/white-flower-arrow.svg" alt="arrow down" />
                </div>
              </div>
            </BQCard>
            <BQCard
              className={
                "bg-(--color-surface-good-primary) text-(--color-text-neutral-active) flex flex-row  relative py-(space-600) border-0"
              }
            >
              <div className="flex flex-row">
                <p className="t-h5 w-85.5 h-39.25">
                  Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum
                  gentilitatem oppressi. praediximus enim Montium sub ipso
                  vivendi termino his vocabulis appellatos fabricarum culpasse
                  tribunos.
                </p>
                <div className="flex flex-col h-full flex-1 justify-end">
                  <img src="/icons/white-rouded-flower-arrow.svg" alt="duck" />
                </div>
              </div>
            </BQCard>
            <BQCard
              className={
                "bg-(--color-surface-good-primary) text-(--color-text-neutral-active) flex flex-row  relative py-(space-600) border-0"
              }
            >
              <div className="flex flex-row">
                <p className="t-h5 w-85.5 h-39.25">
                  Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum
                  gentilitatem oppressi. praediximus enim Montium sub ipso
                  vivendi termino his vocabulis appellatos fabricarum culpasse
                  tribunos.
                </p>
                <div className="flex flex-col h-full flex-1 justify-end">
                  <img src="/icons/duck-white-arrow.svg" alt="duck" />
                </div>
              </div>
            </BQCard>
          </div>
          <div className="flex justify-between items-start text-black w-[1078px] h-[316.05] ">
            <div className="flex flex-col gap-(--scale-1000) justify-center items-center">
              <div className="w-[171.64px] h-[164.05px] ">
                <ShapeFlower color="#FFAA50" />
              </div>
              <H4Bold className="max-w-[296px] text-(--color-text-neutral-active)  text-center ">
                Vivendi termino his vocabulis appellatos fabricarum culpasse
                tribunos
              </H4Bold>
            </div>
            <div className="flex flex-col gap-(--scale-1000) justify-center items-center">
              <div className="w-[171.64px] h-[164.05px] ">
                <ShapeDuck color="#638FFF" />
              </div>
              <H4Bold className="max-w-[296px] text-(--color-text-neutral-active)  text-center ">
                Ultima Syriarum est Palaestina per intervalla magna protenta
              </H4Bold>
            </div>
            <div className="flex flex-col gap-(--scale-1000) justify-center items-center">
              <div className="w-[171.64px] h-[164.05px]  rotate-270 translate-1">
                <ShapeLeaf />
              </div>
              <H4Bold className="max-w-[296px] text-(--color-text-neutral-active)  text-center ">
                Quod cum ita sit, paucae domus studiorum serii cultibus antea
                celebratae
              </H4Bold>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
