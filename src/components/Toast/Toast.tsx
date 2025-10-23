import React, { useEffect, useState } from "react";
import "./Toast.css";

interface ToastProps {
  message: string;
  type?: "info" | "success" | "error" | "warning";
  duration?: number;
  onClose?: () => void;
  showCloseButton?: boolean;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type = "info",
  duration = 3000,
  onClose,
  showCloseButton = false,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getBackgroundColor = () => {
    switch (type) {
      case "success":
        return "#4caf50";
      case "error":
        return "#f44336";
      case "warning":
        return "#ff9800";
      default:
        return "#2196f3";
    }
  };

  return isVisible ? (
    <div className="toast" style={{ backgroundColor: getBackgroundColor() }}>
      {message}
      {showCloseButton && (
        <span className="close-button" onClick={() => setIsVisible(false)}>
          ×
        </span>
      )}
    </div>
  ) : null;
};
