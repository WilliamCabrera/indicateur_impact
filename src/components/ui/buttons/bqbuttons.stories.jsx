import { fn } from "storybook/test";
import { BQButton, BQButtonOutlined } from "./bqbuttons";

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
        meta={{ variant: "default", state: "—" }}
        code={`import { BQButton } from "@/components/ui/buttons/bqbuttons";\n\n<BQButton variant="default">Default</BQButton>`}
      >
        <BQButton variant="default">Default</BQButton>
      </ButtonSpecimen>

      <ButtonSpecimen
        meta={{ variant: "default", state: "active" }}
        code={`import { BQButton } from "@/components/ui/buttons/bqbuttons";\n\n<BQButton variant="default" state="active">Default Active</BQButton>`}
      >
        <BQButton variant="default" state="active">Default Active</BQButton>
      </ButtonSpecimen>

      <ButtonSpecimen
        meta={{ variant: "base", state: "—" }}
        code={`import { BQButton } from "@/components/ui/buttons/bqbuttons";\n\n<BQButton variant="base">Base</BQButton>`}
      >
        <BQButton variant="base">Base</BQButton>
      </ButtonSpecimen>

      <ButtonSpecimen
        meta={{ variant: "good", state: "—" }}
        code={`import { BQButton } from "@/components/ui/buttons/bqbuttons";\n\n<BQButton variant="good">Good</BQButton>`}
      >
        <BQButton variant="good">Good</BQButton>
      </ButtonSpecimen>

      <ButtonSpecimen
        meta={{ variant: "good", state: "active" }}
        code={`import { BQButton } from "@/components/ui/buttons/bqbuttons";\n\n<BQButton variant="good" state="active">Good Active</BQButton>`}
      >
        <BQButton variant="good" state="active">Good Active</BQButton>
      </ButtonSpecimen>

      <ButtonSpecimen
        meta={{ variant: "bad", state: "—" }}
        code={`import { BQButton } from "@/components/ui/buttons/bqbuttons";\n\n<BQButton variant="bad">Bad</BQButton>`}
      >
        <BQButton variant="bad">Bad</BQButton>
      </ButtonSpecimen>

      <ButtonSpecimen
        meta={{ variant: "bad", state: "active" }}
        code={`import { BQButton } from "@/components/ui/buttons/bqbuttons";\n\n<BQButton variant="bad" state="active">Bad Active</BQButton>`}
      >
        <BQButton variant="bad" state="active">Bad Active</BQButton>
      </ButtonSpecimen>

      <ButtonSpecimen
        meta={{ variant: "disabled", state: "—" }}
        code={`import { BQButton } from "@/components/ui/buttons/bqbuttons";\n\n<BQButton variant="disabled">Disabled</BQButton>`}
      >
        <BQButton variant="disabled">Disabled</BQButton>
      </ButtonSpecimen>
    </div>
  ),
};

// ─── BQButtonOutlined ────────────────────────────────────────────────────────

export const BQButtonOutlinedVariants = {
  name: "BQButtonOutlined / Variants",
  render: () => (
    <div className="p-4 max-w-2xl">
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
        meta={{ type: "neutral", variant: "primary", state: "default" }}
        code={`import { BQButtonOutlined } from "@/components/ui/buttons/bqbuttons";\n\n<BQButtonOutlined type="neutral" variant="primary">Neutral Primary</BQButtonOutlined>`}
      >
        <BQButtonOutlined type="neutral" variant="primary" state="default">
          Neutral Primary
        </BQButtonOutlined>
      </ButtonSpecimen>

      <ButtonSpecimen
        meta={{ type: "neutral", variant: "primary", state: "active" }}
        code={`import { BQButtonOutlined } from "@/components/ui/buttons/bqbuttons";\n\n<BQButtonOutlined type="neutral" variant="primary" state="active">Neutral Primary Active</BQButtonOutlined>`}
      >
        <BQButtonOutlined type="neutral" variant="primary" state="active">
          Neutral Primary Active
        </BQButtonOutlined>
      </ButtonSpecimen>

      <ButtonSpecimen
        meta={{ type: "neutral", variant: "secondary", state: "default" }}
        code={`import { BQButtonOutlined } from "@/components/ui/buttons/bqbuttons";\n\n<BQButtonOutlined type="neutral" variant="secondary">Neutral Secondary</BQButtonOutlined>`}
      >
        <BQButtonOutlined type="neutral" variant="secondary" state="default">
          Neutral Secondary
        </BQButtonOutlined>
      </ButtonSpecimen>

      <ButtonSpecimen
        meta={{ type: "neutral", variant: "secondary", state: "active" }}
        code={`import { BQButtonOutlined } from "@/components/ui/buttons/bqbuttons";\n\n<BQButtonOutlined type="neutral" variant="secondary" state="active">Neutral Secondary Active</BQButtonOutlined>`}
      >
        <BQButtonOutlined type="neutral" variant="secondary" state="active">
          Neutral Secondary Active
        </BQButtonOutlined>
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
        meta={{ type: "bad", variant: "primary", state: "default" }}
        code={`import { BQButtonOutlined } from "@/components/ui/buttons/bqbuttons";\n\n<BQButtonOutlined type="bad" variant="primary">Bad Primary</BQButtonOutlined>`}
      >
        <BQButtonOutlined type="bad" variant="primary" state="default">
          Bad Primary
        </BQButtonOutlined>
      </ButtonSpecimen>

      <ButtonSpecimen
        meta={{ type: "bad", variant: "primary", state: "active" }}
        code={`import { BQButtonOutlined } from "@/components/ui/buttons/bqbuttons";\n\n<BQButtonOutlined type="bad" variant="primary" state="active">Bad Primary Active</BQButtonOutlined>`}
      >
        <BQButtonOutlined type="bad" variant="primary" state="active">
          Bad Primary Active
        </BQButtonOutlined>
      </ButtonSpecimen>

      <ButtonSpecimen
        meta={{ type: "bad", variant: "secondary", state: "default" }}
        code={`import { BQButtonOutlined } from "@/components/ui/buttons/bqbuttons";\n\n<BQButtonOutlined type="bad" variant="secondary">Bad Secondary</BQButtonOutlined>`}
      >
        <BQButtonOutlined type="bad" variant="secondary" state="default">
          Bad Secondary
        </BQButtonOutlined>
      </ButtonSpecimen>

      <ButtonSpecimen
        meta={{ type: "bad", variant: "secondary", state: "active" }}
        code={`import { BQButtonOutlined } from "@/components/ui/buttons/bqbuttons";\n\n<BQButtonOutlined type="bad" variant="secondary" state="active">Bad Secondary Active</BQButtonOutlined>`}
      >
        <BQButtonOutlined type="bad" variant="secondary" state="active">
          Bad Secondary Active
        </BQButtonOutlined>
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
        meta={{ type: "good", variant: "primary", state: "default" }}
        code={`import { BQButtonOutlined } from "@/components/ui/buttons/bqbuttons";\n\n<BQButtonOutlined type="good" variant="primary">Good Primary</BQButtonOutlined>`}
      >
        <BQButtonOutlined type="good" variant="primary" state="default">
          Good Primary
        </BQButtonOutlined>
      </ButtonSpecimen>

      <ButtonSpecimen
        meta={{ type: "good", variant: "primary", state: "active" }}
        code={`import { BQButtonOutlined } from "@/components/ui/buttons/bqbuttons";\n\n<BQButtonOutlined type="good" variant="primary" state="active">Good Primary Active</BQButtonOutlined>`}
      >
        <BQButtonOutlined type="good" variant="primary" state="active">
          Good Primary Active
        </BQButtonOutlined>
      </ButtonSpecimen>

      <ButtonSpecimen
        meta={{ type: "good", variant: "secondary", state: "default" }}
        code={`import { BQButtonOutlined } from "@/components/ui/buttons/bqbuttons";\n\n<BQButtonOutlined type="good" variant="secondary">Good Secondary</BQButtonOutlined>`}
      >
        <BQButtonOutlined type="good" variant="secondary" state="default">
          Good Secondary
        </BQButtonOutlined>
      </ButtonSpecimen>

      <ButtonSpecimen
        meta={{ type: "good", variant: "secondary", state: "active" }}
        code={`import { BQButtonOutlined } from "@/components/ui/buttons/bqbuttons";\n\n<BQButtonOutlined type="good" variant="secondary" state="active">Good Secondary Active</BQButtonOutlined>`}
      >
        <BQButtonOutlined type="good" variant="secondary" state="active">
          Good Secondary Active
        </BQButtonOutlined>
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
        meta={{ variant: "disabled" }}
        code={`import { BQButtonOutlined } from "@/components/ui/buttons/bqbuttons";\n\n<BQButtonOutlined variant="disabled">Disabled</BQButtonOutlined>`}
      >
        <BQButtonOutlined variant="disabled">Disabled</BQButtonOutlined>
      </ButtonSpecimen>
    </div>
  ),
};

// ─── Showcase completo ────────────────────────────────────────────────────────

export const AllBQButtons = {
  name: "All BQButtons",
  render: () => (
    <div className="p-4 max-w-2xl flex flex-col gap-8">
      <div>
        <p
          style={{
            fontFamily: "monospace",
            fontSize: "11px",
            color: "var(--color-neutral-300)",
            marginBottom: "4px",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          BQButton
        </p>

        <ButtonSpecimen
          meta={{ variant: "default", state: "—" }}
          code={`<BQButton variant="default">Default</BQButton>`}
        >
          <BQButton variant="default">Default</BQButton>
        </ButtonSpecimen>

        <ButtonSpecimen
          meta={{ variant: "default", state: "active" }}
          code={`<BQButton variant="default" state="active">Default Active</BQButton>`}
        >
          <BQButton variant="default" state="active">Default Active</BQButton>
        </ButtonSpecimen>

        <ButtonSpecimen
          meta={{ variant: "base", state: "—" }}
          code={`<BQButton variant="base">Base</BQButton>`}
        >
          <BQButton variant="base">Base</BQButton>
        </ButtonSpecimen>

        <ButtonSpecimen
          meta={{ variant: "good", state: "—" }}
          code={`<BQButton variant="good">Good</BQButton>`}
        >
          <BQButton variant="good">Good</BQButton>
        </ButtonSpecimen>

        <ButtonSpecimen
          meta={{ variant: "good", state: "active" }}
          code={`<BQButton variant="good" state="active">Good Active</BQButton>`}
        >
          <BQButton variant="good" state="active">Good Active</BQButton>
        </ButtonSpecimen>

        <ButtonSpecimen
          meta={{ variant: "bad", state: "—" }}
          code={`<BQButton variant="bad">Bad</BQButton>`}
        >
          <BQButton variant="bad">Bad</BQButton>
        </ButtonSpecimen>

        <ButtonSpecimen
          meta={{ variant: "bad", state: "active" }}
          code={`<BQButton variant="bad" state="active">Bad Active</BQButton>`}
        >
          <BQButton variant="bad" state="active">Bad Active</BQButton>
        </ButtonSpecimen>

        <ButtonSpecimen
          meta={{ variant: "disabled" }}
          code={`<BQButton variant="disabled">Disabled</BQButton>`}
        >
          <BQButton variant="disabled">Disabled</BQButton>
        </ButtonSpecimen>
      </div>

      <hr />

      <div>
        <p
          style={{
            fontFamily: "monospace",
            fontSize: "11px",
            color: "var(--color-neutral-300)",
            marginBottom: "4px",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          BQButtonOutlined
        </p>

        <ButtonSpecimen
          meta={{ type: "neutral", variant: "primary", state: "default" }}
          code={`<BQButtonOutlined type="neutral" variant="primary">Neutral Primary</BQButtonOutlined>`}
        >
          <BQButtonOutlined type="neutral" variant="primary">Neutral Primary</BQButtonOutlined>
        </ButtonSpecimen>

        <ButtonSpecimen
          meta={{ type: "neutral", variant: "primary", state: "active" }}
          code={`<BQButtonOutlined type="neutral" variant="primary" state="active">Neutral Primary Active</BQButtonOutlined>`}
        >
          <BQButtonOutlined type="neutral" variant="primary" state="active">Neutral Primary Active</BQButtonOutlined>
        </ButtonSpecimen>

        <ButtonSpecimen
          meta={{ type: "neutral", variant: "secondary", state: "default" }}
          code={`<BQButtonOutlined type="neutral" variant="secondary">Neutral Secondary</BQButtonOutlined>`}
        >
          <BQButtonOutlined type="neutral" variant="secondary">Neutral Secondary</BQButtonOutlined>
        </ButtonSpecimen>

        <ButtonSpecimen
          meta={{ type: "bad", variant: "primary", state: "default" }}
          code={`<BQButtonOutlined type="bad" variant="primary">Bad Primary</BQButtonOutlined>`}
        >
          <BQButtonOutlined type="bad" variant="primary">Bad Primary</BQButtonOutlined>
        </ButtonSpecimen>

        <ButtonSpecimen
          meta={{ type: "bad", variant: "secondary", state: "active" }}
          code={`<BQButtonOutlined type="bad" variant="secondary" state="active">Bad Secondary Active</BQButtonOutlined>`}
        >
          <BQButtonOutlined type="bad" variant="secondary" state="active">Bad Secondary Active</BQButtonOutlined>
        </ButtonSpecimen>

        <ButtonSpecimen
          meta={{ type: "good", variant: "primary", state: "default" }}
          code={`<BQButtonOutlined type="good" variant="primary">Good Primary</BQButtonOutlined>`}
        >
          <BQButtonOutlined type="good" variant="primary">Good Primary</BQButtonOutlined>
        </ButtonSpecimen>

        <ButtonSpecimen
          meta={{ type: "good", variant: "secondary", state: "active" }}
          code={`<BQButtonOutlined type="good" variant="secondary" state="active">Good Secondary Active</BQButtonOutlined>`}
        >
          <BQButtonOutlined type="good" variant="secondary" state="active">Good Secondary Active</BQButtonOutlined>
        </ButtonSpecimen>

        <ButtonSpecimen
          meta={{ variant: "disabled" }}
          code={`<BQButtonOutlined variant="disabled">Disabled</BQButtonOutlined>`}
        >
          <BQButtonOutlined variant="disabled">Disabled</BQButtonOutlined>
        </ButtonSpecimen>
      </div>
    </div>
  ),
};
