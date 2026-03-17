import { BQCard } from "@/components/ui/bqcard";
import { IndicatorTable } from "@/components/ui/indicator-table";
import { Steps } from "@/components/ui/steps";
import { H2, H3, H4Bold, H5, TextBody2 } from "@/components/ui/typography";
import { getPageTranslations } from "@/i18n/getPageTranslations";
import { ResultMap } from "./ResultMap";

export default async function Results() {
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
      </BQCard>
    </div>
  );
}
