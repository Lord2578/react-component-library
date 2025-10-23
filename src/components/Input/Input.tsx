import React, { useState } from "react";
import "./Input.css";

interface InputProps {
  type?: "text" | "password" | "number";
  clearable?: boolean;
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({
  type = "text",
  clearable = false,
  placeholder = "",
}) => {
  const [value, setValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClear = () => {
    setValue("");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="input-container">
      <input
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
      {type === "password" && (
        <span className="clear-button" onClick={togglePasswordVisibility}>
          {showPassword ? "○" : "●"}
        </span>
      )}
      {clearable && value && (
        <span className="clear-button" onClick={handleClear}>
          ×
        </span>
      )}
    </div>
  );
};
