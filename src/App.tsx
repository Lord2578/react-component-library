import { useState } from "react";
import "./App.css";
import { Input } from "./components/Input/Input";
import { SidebarMenu } from "./components/SidebarMenu/SidebarMenu";
import { Toast } from "./components/Toast/Toast";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { label: "Home" },
    {
      label: "Products",
      submenu: [{ label: "Product A" }, { label: "Product B" }],
    },
    {
      label: "Settings",
      submenu: [{ label: "Profile" }, { label: "Account" }],
    },
  ];
  return (
    <>
      <h1>Component Library</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <Input type="text" placeholder="Type here" clearable />
        <Input type="password" placeholder="Enter password" />
        <Toast message="This is a toast notification!" duration={5000} />
        <button onClick={() => setIsOpen(true)}>Open Sidebar</button>
        <SidebarMenu
          items={menuItems}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </div>
    </>
  );
}

export default App;
