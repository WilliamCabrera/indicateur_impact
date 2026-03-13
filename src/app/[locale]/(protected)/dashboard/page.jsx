import { BQCard } from "@/components/ui/bqcard";
import { BQButton } from "@/components/ui/buttons/bqbuttons";
import { H4Bold } from "@/components/ui/typography";
import DashboardTableSection, {
  enDeveloppementColumns,
  enDeveloppementData,
  historiqueColumns,
  historiqueData,
  ProjectTable,
  projetsActifsColumns,
  projetsActifsData,
} from "./DashboardTableSection";

export default async function Dashboard() {
  return (
    <div className="w-full flex-1 relative pt-(--space-800) px-(--space-500) gap-2.75 flex justify-between">
      <img
        src="/images/homepage-bg-img.jpg"
        alt="Placeholder"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="flex flex-col gap-(--space-300) z-10">
        <H4Bold> Bonjour Julianne</H4Bold>
        <BQButton type="good" variant={"primary"} className="w-full t-h4">
          {"Créer un nouveau projet"}
        </BQButton>
      </div>
      <div className="flex flex-col z-10 gap-(--space-700) flex-1 max-w-230">
        <BQCard
          className={
            "bg-(--color-surface-base-secondary)/80 rounded-(--space-500)"
          }
        >
          <ProjectTable
            title="Projets actifs"
            columns={projetsActifsColumns}
            data={projetsActifsData}
          />
        </BQCard>

        <BQCard
          className={
            "bg-(--color-surface-base-secondary)/80 rounded-(--space-500)"
          }
        >
          <ProjectTable
            title="En développement"
            columns={enDeveloppementColumns}
            data={enDeveloppementData}
          />
          <ProjectTable
            title="Historique"
            columns={historiqueColumns}
            data={historiqueData}
          />
        </BQCard>
      </div>
    </div>
  );
}
