import React, { useState } from "react";
import "./SidebarMenu.css";

interface MenuItem {
  label: string;
  submenu?: MenuItem[];
}

interface SidebarMenuProps {
  items: MenuItem[];
  isOpen: boolean;
  onClose: () => void;
}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({
  items,
  isOpen,
  onClose,
}) => {
  const [openSubmenus, setOpenSubmenus] = useState<Record<number, boolean>>({});

  const toggleSubmenu = (index: number) => {
    setOpenSubmenus((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <>
      {isOpen && <div className="overlay" onClick={onClose} />}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul>
          {items.map((item, index) => (
            <li key={index} className="mb-2">
              <div
                className="cursor-pointer"
                onClick={() => item.submenu && toggleSubmenu(index)}
              >
                {item.label}
                {item.submenu && (
                  <span className="ml-2">
                    {openSubmenus[index] ? "▲" : "▼"}
                  </span>
                )}
              </div>
              {item.submenu && openSubmenus[index] && (
                <ul className="pl-4 mt-1">
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex} className="py-1">
                      {subItem.label}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
