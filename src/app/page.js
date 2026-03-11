import { BQButton } from "@/components/ui/buttons/bqbuttons";

import { BQContainer } from "@/components/ui/bqcontainer";

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
          <BQButton type="bad" state="active">
            Default
          </BQButton>
          {/*
          
           <BQButton type="base">Base</BQButton>
          <BQButton type="good">Good</BQButton>
          <BQButton type="bad">Bad</BQButton>
          <BQButton disabled>Disabled</BQButton>

          <BQContainer type="good" variant="primary">
            Esto es un ejemplo
          </BQContainer>

          <BQButton type="base">Primary Active</BQButton>
          <BQButton disabled>Good Active</BQButton> */}

          {/* <H1 className={"text-blue-600"}>
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
          <TextBody4Bold>ddfjfdjfdgfd </TextBody4Bold> */}
        </div>
      </main>
    </div>
  );
}
