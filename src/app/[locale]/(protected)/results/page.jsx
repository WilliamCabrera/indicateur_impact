import { BQCard } from "@/components/ui/bqcard";
import { IndicatorTable } from "@/components/ui/indicator-table";
import { Steps } from "@/components/ui/steps";
import { H2, H3, H4Bold, H5, TextBody2 } from "@/components/ui/typography";
import { getPageTranslations } from "@/i18n/getPageTranslations";
import { ResultMap } from "./ResultMap";
import { IndicatorResultsSummary } from "./IndicatorResultsSummary";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BQButton } from "@/components/ui/buttons/bqbuttons";

export default async function Results() {
  const t = await getPageTranslations("DataFormPage");
  return (
    <div className="w-full flex-1 flex flex-col gap-(--scale-800) pb-8">
      <BQCard
        className={
          "shadow-none bg-(--color-surface-base-primary) border-(--color-border-neutral-secondary) flex flex-col gap-(--scale-800) rounded-bq-lg p-bq-md"
        }
      >
        <H2 className="text-(--color-text-neutral-primary)">Café Williams</H2>
        <Steps />
        <IndicatorTable />
      </BQCard>
      <BQCard
        className={
          "shadow-none bg-(--color-surface-base-primary) border-(--color-border-neutral-secondary) flex flex-col gap-(--scale-800) rounded-bq-lg p-bq-md"
        }
      >
        <div className="flex flex-col p-0 gap-(--scale-300)">
          <H3 className="text-(--color-text-neutral-primary)">Résultats</H3>
          <H5 className="text-(--color-text-neutral-primary)">Café Williams</H5>
        </div>
        <ResultMap />
        <IndicatorResultsSummary />
      </BQCard>
      <BQCard
        className={
          "shadow-none bg-(--color-surface-base-primary) border-(--color-border-neutral-secondary) flex flex-col gap-(--scale-800) rounded-bq-lg p-bq-md"
        }
      >
        <H3 className="text-(--color-text-neutral-primary)">
          Résumé de la saisie de données
        </H3>
        <BQCard className="w-full flex  items-end flex-row bg-(--color-surface-neutral-secondary) rounded-(--scale-500) p-(--scale-500) gap-(--scale-500) border-none shadow-none">
          <Accordion
            type="multiple"
            defaultValue={[
              "informationsGenerales",
              "localisationProjet",
              "activitesIndustrielles",
              "emissionsPolluantes",
            ]}
            className="w-full"
          >
            <AccordionItem
              value="informationsGenerales"
              className={"border-b-0 border-t mb-(--scale-800)"}
            >
              <AccordionTrigger>
                <div className="flex justify-center items-center gap-(--scale-400) ">
                  <H4Bold className={"text-(--color-text-neutral-primary)"}>
                    {t("informationsGenerales")}
                  </H4Bold>
                  <img
                    src="/icons/information.svg"
                    alt="informationsGenerales"
                  />
                </div>
              </AccordionTrigger>
              <AccordionContent className={""}>
                <div className="flex flex-col p-1 w-full gap-(--scale-600)">
                  <div className="w-full flex items-center gap-(--scale-700)">
                    <TextBody2 className="w-fit shrink-0 min-w-37.5 text-(--color-text-neutral-primary)">
                      Nom de l’analyste : Julianne Carrera
                      <br />
                      Nom du projet : Café William
                      <br />
                      Nom du promoteur : Promoteur 1
                      <br />
                      Secteur d’activité : Industrie de la restauration
                    </TextBody2>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="localisationProjet"
              className={"border-b-0 border-t mb-(--scale-800)"}
            >
              <AccordionTrigger>
                <div className="flex justify-center items-center gap-(--scale-400) ">
                  <H4Bold className={"text-(--color-text-neutral-primary)"}>
                    {t("localisationProjet")}
                  </H4Bold>
                  <img src="/icons/information.svg" alt="localisationProjet" />
                </div>
              </AccordionTrigger>
              <AccordionContent className={""}>
                <div className="flex flex-col p-1 w-full gap-(--scale-600)">
                  <div className="w-full flex items-center gap-(--scale-700)">
                    <TextBody2 className="w-fit shrink-0 min-w-37.5 text-(--color-text-neutral-primary)">
                      Emprise géospatiale : nom-du-projet.geojson
                    </TextBody2>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="activitesIndustrielles"
              className={"border-b-0 border-t mb-(--scale-800)"}
            >
              <AccordionTrigger>
                <div className="flex justify-center items-center gap-(--scale-400) ">
                  <H4Bold className={"text-(--color-text-neutral-primary)"}>
                    {t("activitesIndustrielles")}
                  </H4Bold>
                  <img
                    src="/icons/information.svg"
                    alt="activitesIndustrielles"
                  />
                </div>
              </AccordionTrigger>
              <AccordionContent className={""}>
                <div className="flex flex-col p-1 w-full gap-(--scale-600)">
                  <div className="w-full flex items-center gap-(--scale-700)">
                    <TextBody2 className="w-fit shrink-0 min-w-37.5 text-(--color-text-neutral-primary)">
                      Déplacement de matériel en contact avec des sols
                      organiques <br />
                      Des mesures d’atténuation sont-elles considérées ?
                      <br />
                      Mesure 1 <br />
                      Mesure 2
                      <br />
                    </TextBody2>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="emissionsPolluantes"
              className={"border-b-0 border-t mb-(--scale-800)"}
            >
              <AccordionTrigger>
                <div className="flex justify-center items-center gap-(--scale-400) ">
                  <H4Bold className={"text-(--color-text-neutral-primary)"}>
                    {t("emissionsPolluantes")}
                  </H4Bold>
                  <img src="/icons/information.svg" alt="emissionsPolluantes" />
                </div>
              </AccordionTrigger>
              <AccordionContent className={""}>
                <div className="flex flex-col p-1 w-full gap-(--scale-600)">
                  <div className="w-full flex items-center gap-(--scale-700)">
                    <TextBody2 className="w-fit shrink-0 min-w-37.5 text-(--color-text-neutral-primary)">
                      75-07-0 Acetaldehyde <br />
                      75-05-8 Acetonitrile <br />
                      101-68-8 Methylenebis (phenylisocyanate)
                    </TextBody2>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </BQCard>
      </BQCard>
      <div className="flex w-full justify-end items-start gap-2.5 pb-(--scale-700)">
        <BQButton
          type="good"
          variant={"primary"}
          className={"px-(--scale-500) t-h4"}
        >
          <p className="t-h4"> Exporter</p>
        </BQButton>
      </div>
    </div>
  );
}
