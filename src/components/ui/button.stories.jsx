import { fn } from "storybook/test";
import { Button } from "./button";
import { BQButton, BQButtonOutlined } from "./buttons/bqbuttons";

export default {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      description: "Variante visual del botón",
    },
    size: {
      control: "select",
      options: [
        "default",
        "xs",
        "sm",
        "lg",
        "icon",
        "icon-xs",
        "icon-sm",
        "icon-lg",
      ],
      description: "Tamaño del botón",
    },
    disabled: {
      control: "boolean",
      description: "Deshabilitar el botón",
    },
    children: {
      control: "text",
      description: "Contenido del botón",
    },
  },
  args: {
    onClick: fn(),
    children: "Botón",
  },
};

export const AllVariants = {
  render: () => (
    <div className="flex flex-wrap gap-3 p-4">
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
    </div>
  ),
  parameters: { layout: "padded" },
};

export const AllSizes = {
  args: {
    variant: "outline",
    size: "sm",
  },
  render: () => (
    <div className="flex flex-wrap items-center gap-3 p-4">
      <Button size="xs">XSmall</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
  parameters: { layout: "padded" },
};
