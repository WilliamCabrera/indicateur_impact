import { BQCard } from "@/components/ui/bqcard";
import { Steps } from "@/components/ui/steps";
import { H2, H3, H4Bold, TextBody2 } from "@/components/ui/typography";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BQInput } from "@/components/ui/bqinput";
import { BQSimpleSelect } from "@/components/ui/bqsimpleselect";
import { BQButton } from "@/components/ui/buttons/bqbuttons";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { getPageTranslations } from "@/i18n/getPageTranslations";
import { EmissionTable } from "./EmissionTable";

export default async function DataForm() {
  const t = await getPageTranslations("DataFormPage");

  const secteurs = [
    { value: "restauration", label: t("secteurRestauration") },
    { value: "commerce", label: t("secteurCommerce") },
    { value: "technologie", label: t("secteurTechnologie") },
    { value: "sante", label: t("secteurSante") },
    { value: "education", label: t("secteurEducation") },
    { value: "agriculture", label: t("secteurAgriculture") },
    { value: "industrie", label: t("secteurIndustrie") },
    { value: "services", label: t("secteurServices") },
  ];

  return (
    <div className="w-full flex-1 flex flex-col gap-(--scale-800) pb-8">
      <BQCard
        className={
          "shadow-none bg-(--color-surface-base-primary) border-(--color-border-neutral-secondary) flex flex-col gap-(--scale-300) rounded-bq-lg p-bq-md"
        }
      >
        <H2 className="text-(--color-text-neutral-primary)">{t("title")}</H2>
        <Steps />
      </BQCard>
      <BQCard
        className={
          "shadow-none bg-(--color-surface-base-primary) border-(--color-border-neutral-secondary) flex flex-col gap-(--scale-1100) rounded-bq-lg p-bq-md"
        }
      >
        <H3 className="text-(--color-text-neutral-primary)">
          {t("saisieTitle")}
        </H3>

        <div className="flex flex-col w-full text-(--color-text-neutral-primary)">
          <Accordion
            type="multiple"
            defaultValue={[
              "informationsGenerales",
              "localisationProjet",
              "activitesIndustrielles",
              "emissionsPolluantes",
            ]}
            className=""
          >
            <AccordionItem
              value="informationsGenerales"
              className={"border-b-0 border-t mb-(--scale-800)"}
            >
              <AccordionTrigger>
                <div className="flex justify-center items-center gap-(--scale-400) p-(--scale-400)">
                  <H4Bold className={"text-(--color-text-neutral-primary)"}>
                    {t("informationsGenerales")}
                  </H4Bold>
                  <img src="/icons/information.svg" alt="" />
                </div>
              </AccordionTrigger>
              <AccordionContent className={"mt-(--scale-800)"}>
                <div className="flex flex-col p-1 w-full gap-(--scale-600)">
                  <div className="w-full flex items-center gap-(--scale-700)">
                    <TextBody2 className="w-fit shrink-0 min-w-37.5">
                      {t("nomProjet")}
                    </TextBody2>
                    <BQInput
                      placeholder={t("nomProjetPlaceholder")}
                      className={"flex-1 t-body-2 placeholder:t-body-2"}
                    />
                  </div>
                  <div className="w-full flex items-center gap-(--scale-700)">
                    <TextBody2 className="w-fit shrink-0 min-w-37.5">
                      {t("nomPromoteur")}
                    </TextBody2>
                    <BQInput
                      placeholder={t("nomPromoteurPlaceholder")}
                      className={"flex-1 t-body-2 placeholder:t-body-2"}
                    />
                  </div>
                  <div className="w-full flex items-center gap-(--scale-700)">
                    <TextBody2 className="w-fit shrink-0 min-w-37.5">
                      {t("secteurActivite")}
                    </TextBody2>
                    <BQSimpleSelect
                      placeholder={t("selectSecteur")}
                      items={secteurs}
                      className="flex-1 min-w-0"
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="localisationProjet"
              className={"border-b-0 border-t mb-(--scale-800)"}
            >
              <AccordionTrigger>
                <div className="flex justify-center items-center gap-(--scale-400) p-(--scale-400)">
                  <H4Bold className={"text-(--color-text-neutral-primary)"}>
                    {t("localisationProjet")}
                  </H4Bold>
                  <img src="/icons/information.svg" alt="" />
                </div>
              </AccordionTrigger>
              <AccordionContent className={"mt-(--scale-800)"}>
                <div className="flex flex-col p-1 w-full gap-(--scale-600)">
                  <div className="w-full flex items-center gap-(--scale-700)">
                    <div className="flex gap-2.5 ">
                      <TextBody2 className="w-fit shrink-0 min-w-37.5">
                        {t("empriseGeospatiale")}
                      </TextBody2>
                      <img src="/icons/information.svg" alt="" />
                    </div>
                    <BQButton>
                      <span className="t-h5 text-(--color-text-neutral-primary)">
                        {t("telecharger")}
                      </span>
                    </BQButton>
                  </div>
                  <div className="w-full flex items-center gap-(--scale-700)">
                    <div className="flex  gap-2.5">
                      <TextBody2 className="w-fit shrink-0 min-w-37.5">
                        {t("aireInfluence")}
                      </TextBody2>
                      <img src="/icons/information.svg" alt="" />
                    </div>

                    <div className="flex min-w-175 gap-(--scale-400)">
                      <BQInput
                        placeholder={t("valeur")}
                        className={"flex-1 t-body-2 placeholder:t-body-2"}
                      />
                      <BQSimpleSelect
                        placeholder={t("selectSecteur")}
                        items={secteurs}
                        className="flex-1 min-w-0"
                      />
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="activitesIndustrielles"
              className={"border-b-0 border-t mb-(--scale-800)"}
            >
              <AccordionTrigger>
                <div className="flex justify-center items-center gap-(--scale-400) p-(--scale-400)">
                  <H4Bold className={"text-(--color-text-neutral-primary)"}>
                    {t("activitesIndustrielles")}
                  </H4Bold>
                  <img src="/icons/information.svg" alt="" />
                </div>
              </AccordionTrigger>
              <AccordionContent
                className={"flex flex-col mt-(--scale-800) gap-(--scale-800)"}
              >
                <div className="w-full flex items-center gap-(--scale-700) border-b pb-(--scale-400)">
                  <Switch id="switch-palettes" />
                  <div className="flex gap-2.5 ">
                    <TextBody2 className="w-fit shrink-0 min-w-37.5">
                      {t("palettes")}
                    </TextBody2>
                    <img src="/icons/information.svg" alt="" />
                  </div>
                </div>
                <div className="w-full flex items-center gap-(--scale-700) pb-(--scale-400)">
                  <Switch id="switch-sols-organiques" />
                  <div className="flex gap-2.5 ">
                    <TextBody2 className="w-fit shrink-0 min-w-37.5">
                      {t("solsOrganiques")}
                    </TextBody2>
                    <img src="/icons/information.svg" alt="" />
                  </div>
                </div>
                <div className="w-full flex items-center gap-(--scale-700) border-b pb-(--scale-400)">
                  <div className="flex gap-(--scale-500) ">
                    <TextBody2 className="w-fit shrink-0 min-w-37.5">
                      {t("solsOrganiques")}
                    </TextBody2>
                    <RadioGroup
                      defaultValue="comfortable"
                      className="flex flex-row gap-(--scale-600)"
                      orientation="horizontal"
                    >
                      <div className="flex items-center gap-3">
                        <RadioGroupItem
                          value="default"
                          id="r1"
                          className="size-5! shrink-0"
                        />
                        <TextBody2>{t("oui")}</TextBody2>
                      </div>
                      <div className="flex items-center gap-3">
                        <RadioGroupItem
                          value="comfortable"
                          id="r2"
                          className="size-5! shrink-0"
                        />
                        <TextBody2>{t("non")}</TextBody2>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
                <div className="w-full flex items-center gap-(--scale-700) border-b pb-(--scale-400)">
                  <Switch id="switch-plans-eau" />
                  <div className="flex gap-2.5 ">
                    <TextBody2 className="w-fit shrink-0 min-w-37.5">
                      {t("plansEau")}
                    </TextBody2>
                    <img src="/icons/information.svg" alt="" />
                  </div>
                </div>
                <div className="w-full flex items-center gap-(--scale-700) border-b pb-(--scale-400)">
                  <Switch id="switch-canalisation" />
                  <div className="flex gap-2.5 ">
                    <TextBody2 className="w-fit shrink-0 min-w-37.5">
                      {t("canalisation")}
                    </TextBody2>
                    <img src="/icons/information.svg" alt="" />
                  </div>
                </div>
                <div className="w-full flex items-center gap-(--scale-700) border-b pb-(--scale-400)">
                  <Switch id="switch-milieux-aquatiques" />
                  <div className="flex gap-2.5 ">
                    <TextBody2 className="w-fit shrink-0 min-w-37.5">
                      {t("milieuxAquatiques")}
                    </TextBody2>
                    <img src="/icons/information.svg" alt="" />
                  </div>
                </div>
                <div className="w-full flex items-center gap-(--scale-700) border-b pb-(--scale-400)">
                  <Switch id="switch-sols-interregional" />
                  <div className="flex gap-2.5 ">
                    <TextBody2 className="w-fit shrink-0 min-w-37.5">
                      {t("solsInterregional")}
                    </TextBody2>
                    <img src="/icons/information.svg" alt="" />
                  </div>
                </div>
                <div className="w-full flex items-center gap-(--scale-700) border-b pb-(--scale-400)">
                  <Switch id="switch-especes-non-indigenes" />
                  <div className="flex gap-2.5 ">
                    <TextBody2 className="w-fit shrink-0 min-w-37.5">
                      {t("especesNonIndigenes")}
                    </TextBody2>
                    <img src="/icons/information.svg" alt="" />
                  </div>
                </div>
                <div className="w-full flex items-center gap-(--scale-700) border-b pb-(--scale-400)">
                  <Switch id="switch-produits-ligneux" />
                  <div className="flex gap-2.5 ">
                    <TextBody2 className="w-fit shrink-0 min-w-37.5">
                      {t("produitsLigneux")}
                    </TextBody2>
                    <img src="/icons/information.svg" alt="" />
                  </div>
                </div>
                <div className="w-full flex items-center gap-(--scale-700) pb-(--scale-400)">
                  <Switch id="switch-transport-maritime" />
                  <div className="flex gap-2.5 ">
                    <TextBody2 className="w-fit shrink-0 min-w-37.5">
                      {t("transportMaritime")}
                    </TextBody2>
                    <img src="/icons/information.svg" alt="" />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="emissionsPolluantes"
              className={"border-b-0 border-t mb-(--scale-800)"}
            >
              <AccordionTrigger>
                <div className="flex justify-center items-center gap-(--scale-400) p-(--scale-400)">
                  <H4Bold className={"text-(--color-text-neutral-primary)"}>
                    {t("emissionsPolluantes")}
                  </H4Bold>
                </div>
              </AccordionTrigger>
              <AccordionContent className={"mt-(--scale-800) flex"}>
                <EmissionTable />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </BQCard>
      <div className="flex w-full justify-end items-start gap-2.5 pb-(--scale-700)">
        <BQButton
          type="good"
          variant={"primary"}
          className=" t-h4 text-(--color-surface-good-primary) hover:text-(--color-border-good-primary-hover)"
          outlined
        >
          {t("enregistrer")}
        </BQButton>
        <BQButton type="good" variant={"primary"} className=" t-h4">
          {t("enregistrerSoumettre")}
        </BQButton>
      </div>
    </div>
  );
}
