import React from "react";
import { getTranslations } from "next-intl/server";
import {
  TextBody2Bold,
  TextBody2,
  TextBody3,
  TextBody4,
} from "../ui/typography";
import { Separator } from "@/components/ui/separator";
import { BQButton } from "../ui/buttons/bqbuttons";

export const Footer = async () => {
  const t = await getTranslations("Footer");

  return (
    <footer className="w-full p-bq-lg flex flex-col justify-center items-center text-(--color-text-neutral-primary) gap-(--space-800)">
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-(--space-200)">
          <TextBody2Bold>{t("partners")}</TextBody2Bold>
          <TextBody3>{t("partner1")}</TextBody3>
          <TextBody3>{t("partner2")}</TextBody3>
        </div>
        <div className="flex flex-col gap-(--space-200)">
          <TextBody2Bold>{t("project")}</TextBody2Bold>
          <TextBody3>{t("team")}</TextBody3>
          <TextBody3>{t("otherInfo")}</TextBody3>
        </div>
        <div className="flex flex-col gap-(--space-200)">
          <TextBody2Bold>{t("indicators")}</TextBody2Bold>
          <TextBody3>{t("indicatorsInfo")}</TextBody3>
          <TextBody3>{t("analysisLimits")}</TextBody3>
        </div>
        <div className="flex flex-col gap-(--space-200)">
          <TextBody2Bold>{t("about")}</TextBody2Bold>
          <TextBody3>{t("aboutLink")}</TextBody3>
          <TextBody3>{t("terms")}</TextBody3>
        </div>
      </div>
      <div className="bg-(--color-surface-neutral-active) w-full h-0 border-[0.25px]" />
      <div className="flex flex-col items-center w-full ">
        <div className="flex gap-(--space-500) w-full">
          <TextBody4>{t("copyright")}</TextBody4>
          <TextBody4>{t("privacyPolicy")}</TextBody4>
        </div>
        <div className="w-full flex justify-end gap-(--space-500) ">
          <BQButton className="t-body-2 w-56">{t("information")}</BQButton>
          <BQButton className="t-body-2 w-56">{t("version")}</BQButton>
        </div>
      </div>
    </footer>
  );
};
