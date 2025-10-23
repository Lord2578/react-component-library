import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { SidebarMenu } from "./SidebarMenu";

const meta: Meta<typeof SidebarMenu> = {
  title: "Components/SidebarMenu",
  component: SidebarMenu,
};

export default meta;
type Story = StoryObj<typeof SidebarMenu>;

const items1Level = [
  { label: "Home" },
  { label: "About" },
  { label: "Contact" },
];

const items2Level = [
  { label: "Home" },
  {
    label: "Products",
    submenu: [{ label: "Product A" }, { label: "Product B" }],
  },
  { label: "Settings", submenu: [{ label: "Profile" }, { label: "Account" }] },
];

const SidebarMenuWrapper = ({ items }: { items: any[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Sidebar</button>
      <SidebarMenu
        items={items}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export const OneLevel: Story = {
  render: () => <SidebarMenuWrapper items={items1Level} />,
};

export const TwoLevels: Story = {
  render: () => <SidebarMenuWrapper items={items2Level} />,
};
