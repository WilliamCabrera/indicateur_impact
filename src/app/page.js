import {
  BQButton,
  BQButtonOutlined,
  BQButtonV1,
} from "@/components/ui/buttons/bqbuttons";
import { Button } from "@/components/ui/button";
import { BQContainer } from "@/components/ui/bqcontainer";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { borderVariants, surfaceVariants } from "@/components/variants";
import {
  H1,
  H2,
  H3,
  H4Bold,
  H4Regular,
  H5,
  TextBody1,
  TextBody2,
  TextBody2Bold,
  TextBody3,
  TextBody3Bold,
  TextBody3Italic,
  TextBody4,
  TextBody4Bold,
} from "@/components/ui/typography";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <BQButton state="active">Default</BQButton>
          <BQButton variant="base">Base</BQButton>
          <BQButton variant="good" state="active">
            Good
          </BQButton>
          <BQButton variant="bad">Bad</BQButton>
          <BQButton variant="disabled">Disabled</BQButton>
          <BQButtonOutlined type="neutral" variant="primary">
            Neutral Primary
          </BQButtonOutlined>

          <BQButtonOutlined type="neutral" variant="secondary">
            Secondary
          </BQButtonOutlined>

          <BQButtonOutlined type="bad" variant="primary">
            Bad Primary
          </BQButtonOutlined>

          <BQButtonOutlined type="bad" variant="secondary">
            Bad Secondary
          </BQButtonOutlined>

          <BQButtonOutlined type="good" variant="primary">
            Good Primary
          </BQButtonOutlined>

          <BQButtonOutlined type="good" variant="secondary">
            Good Secondary
          </BQButtonOutlined>

          <BQButtonOutlined type="good" variant="disabled">
            Disabled
          </BQButtonOutlined>

          <BQContainer type="good" variant="primary" />
          <BQButtonV1 variant="primary" state="active">
            Primary Active
          </BQButtonV1>
          <BQButtonV1 variant="primary" state="default">
            Primary Default
          </BQButtonV1>
          <BQButtonV1 variant="primary" state="disabled">
            Primary Disabled
          </BQButtonV1>
          <H1 className={"text-blue-600"}>
            To get started, edit the page.js file.
          </H1>
          <H2>To get started, edit the page.js file.</H2>
          <H3>To get started, edit the page.js file.</H3>
          <H4Regular>To get started, edit the page.js file.</H4Regular>
          <H4Bold>To get started, edit the page.js file.</H4Bold>
          <H5>To get started, edit the page.js file.</H5>
          <h1 className="text-(length:--font-size-h1) leading-(--line-height-h1) font-bold font-heading">
            To get started, edit the page.js file.
          </h1>

          <TextBody1>ddfjfdjfdgfd </TextBody1>
          <TextBody2>ddfjfdjfdgfd </TextBody2>
          <TextBody2Bold>ddfjfdjfdgfd </TextBody2Bold>
          <TextBody3>ddfjfdjfdgfd </TextBody3>
          <TextBody3Bold>ddfjfdjfdgfd </TextBody3Bold>
          <TextBody3Italic>ddfjfdjfdgfd </TextBody3Italic>
          <TextBody4>ddfjfdjfdgfd </TextBody4>
          <TextBody4Bold>ddfjfdjfdgfd </TextBody4Bold>
        </div>
      </main>
    </div>
  );
}
