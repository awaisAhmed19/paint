
import React, { useEffect } from "react";
import ReactDOM from "react-dom";

export default function ToolButton({
  id,
  className = "",
  toolName,
  ToolPanel,
  targetId,
  isActive,
  onToggle,
  children,
  ...props
}) {
  const handleClick = (e) => {
    e.stopPropagation();
    onToggle?.(isActive ? null : toolName);
  };


import { createRoot } from "react-dom/client";

useEffect(() => {
  const targetEl = document.getElementById(targetId);
  if (!targetEl) return;

  let root = null;

  if (isActive && ToolPanel) {
    root = createRoot(targetEl);
    root.render(<ToolPanel />);
  } else {
    if (targetEl._reactRootContainer) targetEl._reactRootContainer.unmount();
  }

  return () => root?.unmount();
}, [isActive, ToolPanel, targetId]);


  return (
    <button
      id={id}
      {...props}
      onClick={handleClick}
      className={`tool-btn ${isActive ? "active" : ""} ${className}`}
      title={toolName}
    >
      {children && <span className="tool-label">{children}</span>}
    </button>
  );
}

