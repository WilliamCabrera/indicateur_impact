import { fn } from "storybook/test";
import { BQButton } from "./bqbuttons";

export default {
  title: "UI/BQButtons",
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  args: { onClick: fn() },
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

const Code = ({ children }) => (
  <pre
    style={{
      fontFamily: "monospace",
      fontSize: "12px",
      color: "var(--color-neutral-400)",
      background: "var(--color-neutral-25)",
      borderRadius: "4px",
      padding: "6px 10px",
      margin: "4px 0 0 0",
      overflowX: "auto",
    }}
  >
    {children}
  </pre>
);

const ButtonSpecimen = ({ meta, code, children }) => (
  <div
    style={{
      borderBottom: "1px solid var(--color-neutral-50)",
      paddingBottom: "16px",
      marginBottom: "16px",
    }}
  >
    <div className="flex items-center gap-6">
      <div style={{ flex: 1 }}>{children}</div>
      <div
        style={{
          fontFamily: "monospace",
          fontSize: "11px",
          color: "var(--color-neutral-300)",
          whiteSpace: "nowrap",
          lineHeight: 1.6,
        }}
      >
        {Object.entries(meta).map(([k, v]) => (
          <div key={k}>
            <span style={{ color: "var(--color-neutral-400)" }}>{k}:</span> {v}
          </div>
        ))}
      </div>
    </div>
    <Code>{code}</Code>
  </div>
);

// ─── BQButton ─────────────────────────────────────────────────────────────────

export const BQButtonVariants = {
  name: "BQButton / Variants",
  render: () => (
    <div className="p-4 max-w-2xl">
      <ButtonSpecimen
        meta={{ variant: "primary", state: "—" }}
        code={`import { BQButton } from "@/components/ui/buttons/bqbuttons";\n\n<BQButton >Default</BQButton>`}
      >
        <BQButton variant="primary">Default / Variant primary</BQButton>
      </ButtonSpecimen>

      <ButtonSpecimen
        meta={{ variant: "secondary" }}
        code={`import { BQButton } from "@/components/ui/buttons/bqbuttons";\n\n<BQButton variant="secondary">Variant secondary</BQButton>`}
      >
        <BQButton variant="secondary">Variant secondary</BQButton>
      </ButtonSpecimen>

      <ButtonSpecimen
        meta={{ variant: "disabled", state: "—" }}
        code={`import { BQButton } from "@/components/ui/buttons/bqbuttons";\n\n<BQButton disabled>Base</BQButton>`}
      >
        <BQButton disabled>Disabled</BQButton>
      </ButtonSpecimen>
    </div>
  ),
};

export const BQButtonTypes = {
  name: "BQButton / Types",
  render: () => (
    <div className="p-4 max-w-2xl">
      <ButtonSpecimen
        meta={{ type: "neutral", state: "—" }}
        code={`import { BQButton } from "@/components/ui/buttons/bqbuttons";\n\n<BQButton >Default / Type neutral</BQButton>`}
      >
        <BQButton type="neutral">Default / Type neutral</BQButton>
      </ButtonSpecimen>

      <ButtonSpecimen
        meta={{ type: "good", state: "—" }}
        code={`import { BQButton } from "@/components/ui/buttons/bqbuttons";\n\n<BQButton  type="good"> Type good</BQButton>`}
      >
        <BQButton type="good"> Type good</BQButton>
      </ButtonSpecimen>
      <ButtonSpecimen
        meta={{ type: "bad", state: "—" }}
        code={`import { BQButton } from "@/components/ui/buttons/bqbuttons";\n\n<BQButton  type="bad"> Type bad</BQButton>`}
      >
        <BQButton type="bad"> Type bad</BQButton>
      </ButtonSpecimen>
      <ButtonSpecimen
        meta={{ type: "base", state: "—" }}
        code={`import { BQButton } from "@/components/ui/buttons/bqbuttons";\n\n<BQButton  type="base"> Type base</BQButton>`}
      >
        <BQButton type="base"> Type base</BQButton>
      </ButtonSpecimen>
    </div>
  ),
};

export const BQButtonState = {
  name: "BQButton / State",
  render: () => (
    <div className="p-4 max-w-2xl">
      <ButtonSpecimen
        meta={{ type: "neutral", state: "active" }}
        code={`import { BQButton } from "@/components/ui/buttons/bqbuttons";\n\n<BQButton >Default / Type neutral</BQButton>;\n\n<BQButton state="active" >Default / Type neutral</BQButton>`}
      >
        <div className="flex gap-2">
          <BQButton type="neutral">Default / Type neutral</BQButton>
          <BQButton type="neutral" state="active">
            Default / Type neutral
          </BQButton>
        </div>
      </ButtonSpecimen>

      <ButtonSpecimen
        meta={{ type: "good", state: "active" }}
        code={`import { BQButton } from "@/components/ui/buttons/bqbuttons";\n\n<BQButton  type="good"> Type good</BQButton>; \n\n<BQButton  type="good" state="active" > Type good</BQButton>`}
      >
        <div className="flex gap-2">
          <BQButton type="good">Type good</BQButton>
          <BQButton type="good" state="active">
            Type good
          </BQButton>
        </div>
      </ButtonSpecimen>
      <ButtonSpecimen
        meta={{ type: "bad", state: "active" }}
        code={`import { BQButton } from "@/components/ui/buttons/bqbuttons";\n\n<BQButton  type="bad"> Type bad</BQButton> ;\n\n<BQButton  type="bad" state="active"> Type bad</BQButton> `}
      >
        <div className="flex gap-2">
          <BQButton type="bad">Type bad</BQButton>
          <BQButton type="bad" state="active">
            Type bad
          </BQButton>
        </div>
      </ButtonSpecimen>
      <ButtonSpecimen
        meta={{ type: "base", state: "—" }}
        code={`import { BQButton } from "@/components/ui/buttons/bqbuttons";\n\n<BQButton  type="base"> Type base</BQButton>`}
      >
        <BQButton type="base"> Type base</BQButton>
      </ButtonSpecimen>
    </div>
  ),
};

// ─── BQButton outlined ────────────────────────────────────────────────────────

export const BQButtonOutlinedVariants = {
  name: "BQButton / Outlined",
  render: () => (
    <div className="p-4 max-w-2xl">
      <p className="font-bold"> IMPORTANT!!!!</p>
      <p className="">
        {" "}
        When setting the prop outlined you might need to set the color any text
        inside (children). Since if not it could match with the background and
        the user will not see it.{" "}
      </p>
      <p
        style={{
          fontFamily: "monospace",
          fontSize: "11px",
          color: "var(--color-neutral-300)",
          marginBottom: "16px",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
        }}
      >
        Neutral
      </p>

      <ButtonSpecimen
        meta={{
          outlined: "true",
          type: "neutral",
          variant: "primary",
          state: "",
        }}
        code={`import { BQButton } from "@/components/ui/buttons/bqbuttons";\n\n<BQButton outlined type="neutral" variant="primary">Default/ Neutral Primary</BQButton>`}
      >
        <BQButton outlined type="neutral" variant="primary">
          Default /Neutral Primary
        </BQButton>
      </ButtonSpecimen>

      <p
        style={{
          fontFamily: "monospace",
          fontSize: "11px",
          color: "var(--color-neutral-300)",
          margin: "24px 0 16px",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
        }}
      >
        Bad
      </p>

      <ButtonSpecimen
        meta={{
          outlined: "true",
          type: "bad",
          variant: "primary",
          state: "",
        }}
        code={`import { BQButton } from "@/components/ui/buttons/bqbuttons";
          \n\n<BQButton outlined type="bad" variant="primary" state="active" className={"text-(--color-text-bad-active)">Bad Primary Active</BQButton>`}
      >
        <BQButton
          outlined
          type="bad"
          variant="primary"
          className={"text-(--color-text-bad-active)"}
        >
          Bad Primary
        </BQButton>
      </ButtonSpecimen>

      <p
        style={{
          fontFamily: "monospace",
          fontSize: "11px",
          color: "var(--color-neutral-300)",
          margin: "24px 0 16px",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
        }}
      >
        Good
      </p>

      <ButtonSpecimen
        meta={{
          outlined: "true",
          type: "good",
          variant: "primary",
          state: "",
        }}
        code={`import { BQButton } from "@/components/ui/buttons/bqbuttons";
          \n\n<BQButton outlined type="good" variant="primary" state="active" className={"text-(--color-text-good-active)">Good Primary Active</BQButton>`}
      >
        <BQButton
          outlined
          type="good"
          variant="primary"
          className={"text-(--color-text-good-active)"}
        >
          Good Primary
        </BQButton>
      </ButtonSpecimen>

      <p
        style={{
          fontFamily: "monospace",
          fontSize: "11px",
          color: "var(--color-neutral-300)",
          margin: "24px 0 16px",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
        }}
      >
        Disabled
      </p>

      <ButtonSpecimen
        meta={{ outlined: "true", disabled: "true" }}
        code={`import { BQButton } from "@/components/ui/buttons/bqbuttons";\n\n<BQButton outlined disabled>Disabled</BQButton>`}
      >
        <BQButton outlined disabled>
          Disabled
        </BQButton>
      </ButtonSpecimen>
    </div>
  ),
};

// ─── Showcase completo ────────────────────────────────────────────────────────
