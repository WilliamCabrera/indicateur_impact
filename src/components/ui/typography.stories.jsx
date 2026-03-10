import {
  H1, H2, H3, H4Regular, H4Bold, H5,
  TextBody1, TextBody2, TextBody2Bold,
  TextBody3, TextBody3Bold, TextBody3Italic,
  TextBody4, TextBody4Bold,
} from "./typography";

export default {
  title: "UI/Typography",
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};

const Code = ({ children }) => (
  <pre style={{
    fontFamily: "monospace",
    fontSize: "12px",
    color: "var(--color-neutral-400)",
    background: "var(--color-neutral-25)",
    borderRadius: "4px",
    padding: "6px 10px",
    margin: "4px 0 0 0",
    overflowX: "auto",
  }}>
    {children}
  </pre>
);

const Specimen = ({ varSize, varLineHeight, fontVar, weight, italic, cssClass, code, children }) => (
  <div style={{ borderBottom: "1px solid var(--color-neutral-50)", paddingBottom: "16px", marginBottom: "16px" }}>
    <div className="flex items-baseline gap-6">
      <div
        style={{
          fontFamily: `var(${fontVar})`,
          fontSize: `var(${varSize})`,
          lineHeight: `var(${varLineHeight})`,
          fontWeight: weight,
          fontStyle: italic ? "italic" : "normal",
          flex: 1,
        }}
      >
        {children}
      </div>
      <div style={{ fontFamily: "monospace", fontSize: "11px", color: "var(--color-neutral-300)", whiteSpace: "nowrap", lineHeight: 1.6 }}>
        <div style={{ color: "var(--color-neutral-400)" }}>.{cssClass}</div>
        <div>{varSize}</div>
        <div>{varLineHeight}</div>
        <div>weight: {weight}{italic ? " / italic" : ""}</div>
      </div>
    </div>
    <Code>{code}</Code>
  </div>
);

export const Headings = {
  render: () => (
    <div className="p-4 max-w-3xl">
      <p style={{ fontFamily: "monospace", fontSize: "11px", color: "var(--color-neutral-300)", marginBottom: "16px" }}>
        font-family: var(--font-heading) — Atkinson Hyperlegible
      </p>
      <Specimen cssClass="t-h1" varSize="--font-size-h1" varLineHeight="--line-height-h1" fontVar="--font-heading" weight={700}
        code={`import { H1 } from "@/components/ui/typography";\n\n<H1>Titre principal</H1>`}>
        Titre principal H1
      </Specimen>
      <Specimen cssClass="t-h2" varSize="--font-size-h2" varLineHeight="--line-height-h2" fontVar="--font-heading" weight={700}
        code={`import { H2 } from "@/components/ui/typography";\n\n<H2>Titre secondaire</H2>`}>
        Titre secondaire H2
      </Specimen>
      <Specimen cssClass="t-h3" varSize="--font-size-h3" varLineHeight="--line-height-h3" fontVar="--font-heading" weight={700}
        code={`import { H3 } from "@/components/ui/typography";\n\n<H3>Titre tertiaire</H3>`}>
        Titre tertiaire H3
      </Specimen>
      <Specimen cssClass="t-h4 font-normal" varSize="--font-size-h4" varLineHeight="--line-height-h4" fontVar="--font-heading" weight={400}
        code={`import { H4Regular } from "@/components/ui/typography";\n\n<H4Regular>Sous-titre</H4Regular>`}>
        Sous-titre H4 Regular
      </Specimen>
      <Specimen cssClass="t-h4 font-bold" varSize="--font-size-h4" varLineHeight="--line-height-h4" fontVar="--font-heading" weight={700}
        code={`import { H4Bold } from "@/components/ui/typography";\n\n<H4Bold>Sous-titre</H4Bold>`}>
        Sous-titre H4 Bold
      </Specimen>
      <Specimen cssClass="t-h5" varSize="--font-size-h5" varLineHeight="--line-height-h5" fontVar="--font-heading" weight={400}
        code={`import { H5 } from "@/components/ui/typography";\n\n<H5>Petit titre</H5>`}>
        Petit titre H5
      </Specimen>
    </div>
  ),
};

export const Body = {
  render: () => (
    <div className="p-4 max-w-3xl">
      <p style={{ fontFamily: "monospace", fontSize: "11px", color: "var(--color-neutral-300)", marginBottom: "16px" }}>
        font-family: var(--font-body) — Noto Sans
      </p>
      <Specimen cssClass="t-body-1" varSize="--font-size-body-1" varLineHeight="--line-height-body-1" fontVar="--font-body" weight={400}
        code={`import { TextBody1 } from "@/components/ui/typography";\n\n<TextBody1>Corps de texte</TextBody1>`}>
        Body 1 — Corps de texte grande taille.
      </Specimen>
      <Specimen cssClass="t-body-2" varSize="--font-size-body-2" varLineHeight="--line-height-body-2" fontVar="--font-body" weight={400}
        code={`import { TextBody2 } from "@/components/ui/typography";\n\n<TextBody2>Corps de texte</TextBody2>`}>
        Body 2 — Corps de texte taille standard.
      </Specimen>
      <Specimen cssClass="t-body-2 font-bold" varSize="--font-size-body-2" varLineHeight="--line-height-body-2" fontVar="--font-body" weight={700}
        code={`import { TextBody2Bold } from "@/components/ui/typography";\n\n<TextBody2Bold>Corps de texte</TextBody2Bold>`}>
        Body 2 Bold — Corps de texte gras.
      </Specimen>
      <Specimen cssClass="t-body-3" varSize="--font-size-body-3" varLineHeight="--line-height-body-3" fontVar="--font-body" weight={400}
        code={`import { TextBody3 } from "@/components/ui/typography";\n\n<TextBody3>Corps de texte</TextBody3>`}>
        Body 3 — Corps de texte petite taille.
      </Specimen>
      <Specimen cssClass="t-body-3 font-bold" varSize="--font-size-body-3" varLineHeight="--line-height-body-3" fontVar="--font-body" weight={700}
        code={`import { TextBody3Bold } from "@/components/ui/typography";\n\n<TextBody3Bold>Corps de texte</TextBody3Bold>`}>
        Body 3 Bold — Corps petite taille, gras.
      </Specimen>
      <Specimen cssClass="t-body-3 italic" varSize="--font-size-body-3" varLineHeight="--line-height-body-3" fontVar="--font-body" weight={400} italic
        code={`import { TextBody3Italic } from "@/components/ui/typography";\n\n<TextBody3Italic>Corps de texte</TextBody3Italic>`}>
        Body 3 Italic — Corps petite taille, italique.
      </Specimen>
      <Specimen cssClass="t-body-4" varSize="--font-size-body-4" varLineHeight="--line-height-body-4" fontVar="--font-body" weight={400}
        code={`import { TextBody4 } from "@/components/ui/typography";\n\n<TextBody4>Corps de texte</TextBody4>`}>
        Body 4 — Corps de texte très petite taille.
      </Specimen>
      <Specimen cssClass="t-body-4 font-bold" varSize="--font-size-body-4" varLineHeight="--line-height-body-4" fontVar="--font-body" weight={700}
        code={`import { TextBody4Bold } from "@/components/ui/typography";\n\n<TextBody4Bold>Corps de texte</TextBody4Bold>`}>
        Body 4 Bold — Corps très petite taille, gras.
      </Specimen>
    </div>
  ),
};

export const AllTypography = {
  render: () => (
    <div className="p-4 max-w-3xl flex flex-col gap-8">
      <div>
        <p style={{ fontFamily: "monospace", fontSize: "11px", color: "var(--color-neutral-300)", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
          Titres — Atkinson Hyperlegible
        </p>
        <Specimen cssClass="t-h1" varSize="--font-size-h1" varLineHeight="--line-height-h1" fontVar="--font-heading" weight={700}
          code={`import { H1 } from "@/components/ui/typography";\n\n<H1>Titre principal</H1>`}>
          H1 — Titre principal
        </Specimen>
        <Specimen cssClass="t-h2" varSize="--font-size-h2" varLineHeight="--line-height-h2" fontVar="--font-heading" weight={700}
          code={`import { H2 } from "@/components/ui/typography";\n\n<H2>Titre secondaire</H2>`}>
          H2 — Titre secondaire
        </Specimen>
        <Specimen cssClass="t-h3" varSize="--font-size-h3" varLineHeight="--line-height-h3" fontVar="--font-heading" weight={700}
          code={`import { H3 } from "@/components/ui/typography";\n\n<H3>Titre tertiaire</H3>`}>
          H3 — Titre tertiaire
        </Specimen>
        <Specimen cssClass="t-h4 font-bold" varSize="--font-size-h4" varLineHeight="--line-height-h4" fontVar="--font-heading" weight={700}
          code={`import { H4Bold } from "@/components/ui/typography";\n\n<H4Bold>Sous-titre</H4Bold>`}>
          H4 Bold — Sous-titre
        </Specimen>
        <Specimen cssClass="t-h4 font-normal" varSize="--font-size-h4" varLineHeight="--line-height-h4" fontVar="--font-heading" weight={400}
          code={`import { H4Regular } from "@/components/ui/typography";\n\n<H4Regular>Sous-titre</H4Regular>`}>
          H4 Regular — Sous-titre
        </Specimen>
        <Specimen cssClass="t-h5" varSize="--font-size-h5" varLineHeight="--line-height-h5" fontVar="--font-heading" weight={400}
          code={`import { H5 } from "@/components/ui/typography";\n\n<H5>Petit titre</H5>`}>
          H5 — Petit titre
        </Specimen>
      </div>
      <hr />
      <div>
        <p style={{ fontFamily: "monospace", fontSize: "11px", color: "var(--color-neutral-300)", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
          Corps — Noto Sans
        </p>
        <Specimen cssClass="t-body-1" varSize="--font-size-body-1" varLineHeight="--line-height-body-1" fontVar="--font-body" weight={400}
          code={`import { TextBody1 } from "@/components/ui/typography";\n\n<TextBody1>Corps de texte</TextBody1>`}>
          Body 1 — Corps grand
        </Specimen>
        <Specimen cssClass="t-body-2" varSize="--font-size-body-2" varLineHeight="--line-height-body-2" fontVar="--font-body" weight={400}
          code={`import { TextBody2 } from "@/components/ui/typography";\n\n<TextBody2>Corps de texte</TextBody2>`}>
          Body 2 — Corps standard
        </Specimen>
        <Specimen cssClass="t-body-2 font-bold" varSize="--font-size-body-2" varLineHeight="--line-height-body-2" fontVar="--font-body" weight={700}
          code={`import { TextBody2Bold } from "@/components/ui/typography";\n\n<TextBody2Bold>Corps de texte</TextBody2Bold>`}>
          Body 2 Bold — Corps standard, gras
        </Specimen>
        <Specimen cssClass="t-body-3" varSize="--font-size-body-3" varLineHeight="--line-height-body-3" fontVar="--font-body" weight={400}
          code={`import { TextBody3 } from "@/components/ui/typography";\n\n<TextBody3>Corps de texte</TextBody3>`}>
          Body 3 — Corps petit
        </Specimen>
        <Specimen cssClass="t-body-3 font-bold" varSize="--font-size-body-3" varLineHeight="--line-height-body-3" fontVar="--font-body" weight={700}
          code={`import { TextBody3Bold } from "@/components/ui/typography";\n\n<TextBody3Bold>Corps de texte</TextBody3Bold>`}>
          Body 3 Bold — Corps petit, gras
        </Specimen>
        <Specimen cssClass="t-body-3 italic" varSize="--font-size-body-3" varLineHeight="--line-height-body-3" fontVar="--font-body" weight={400} italic
          code={`import { TextBody3Italic } from "@/components/ui/typography";\n\n<TextBody3Italic>Corps de texte</TextBody3Italic>`}>
          Body 3 Italic — Corps petit, italique
        </Specimen>
        <Specimen cssClass="t-body-4" varSize="--font-size-body-4" varLineHeight="--line-height-body-4" fontVar="--font-body" weight={400}
          code={`import { TextBody4 } from "@/components/ui/typography";\n\n<TextBody4>Corps de texte</TextBody4>`}>
          Body 4 — Corps très petit
        </Specimen>
        <Specimen cssClass="t-body-4 font-bold" varSize="--font-size-body-4" varLineHeight="--line-height-body-4" fontVar="--font-body" weight={700}
          code={`import { TextBody4Bold } from "@/components/ui/typography";\n\n<TextBody4Bold>Corps de texte</TextBody4Bold>`}>
          Body 4 Bold — Corps très petit, gras
        </Specimen>
      </div>
    </div>
  ),
};
