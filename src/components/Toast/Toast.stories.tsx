import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Toast } from "./Toast";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  argTypes: {
    type: {
      control: "select",
      options: ["info", "success", "error", "warning"],
    },
    duration: { control: "number" },
    showCloseButton: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

const ToastWrapper = (args: any) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleShow = () => setIsVisible(true);
  const handleClose = () => setIsVisible(false);

  return (
    <div>
      <button onClick={handleShow}>Show Toast</button>
      {isVisible && <Toast {...args} onClose={handleClose} />}
    </div>
  );
};

export const InfoToast: Story = {
  args: {
    duration: 1000000
  },

  render: (args) => (
    <ToastWrapper {...args} message="Info message" type="info" />
  )
};

export const SuccessToast: Story = {
  render: (args) => (
    <ToastWrapper {...args} message="Success message" type="success" />
  ),
};

export const ErrorToast: Story = {
  render: (args) => (
    <ToastWrapper {...args} message="Error message" type="error" />
  ),
};

export const WarningToast: Story = {
  render: (args) => (
    <ToastWrapper {...args} message="Warning message" type="warning" />
  ),
};

export const WithCloseButton: Story = {
  args: {
    duration: 10000000
  },

  render: (args) => (
    <ToastWrapper {...args} message="Close me" showCloseButton={true} />
  )
};

export const LongDuration: Story = {
  render: (args) => (
    <ToastWrapper {...args} message="Long duration" duration={5000} />
  ),
};
