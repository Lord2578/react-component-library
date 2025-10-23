import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    type: { control: "select", options: ["text", "password", "number"] },
    clearable: { control: "boolean" },
    placeholder: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const TextInput: Story = {
  args: {
    type: "text",
    placeholder: "Enter text",
  },
};

export const PasswordInput: Story = {
  args: {
    type: "password",
    placeholder: "Enter password",
  },
};

export const NumberInput: Story = {
  args: {
    type: "number",
    placeholder: "Enter number",
  },
};

export const ClearableInput: Story = {
  args: {
    type: "text",
    clearable: true,
    placeholder: "Clearable text",
  },
};
