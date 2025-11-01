
import React from "react";
import ReactDOM from "react-dom";

export default function MenuButton({ 
  children, 
  dropdown: Dropdown, 
  targetId, 
  isOpen, 
  onToggle, 
  ...props 
}) {
  const handleClick = (e) => {
    e.stopPropagation();
    onToggle?.(!isOpen);
  };

  const targetEl = document.getElementById(targetId);

  React.useEffect(() => {
    const handleOutside = (e) => {
      if (!e.target.closest("button")) onToggle(false);
    };
    if (isOpen) document.addEventListener("click", handleOutside);
    return () => document.removeEventListener("click", handleOutside);
  }, [isOpen, onToggle]);

  return (
    <>
      <button {...props} onClick={handleClick}>
        {children}
      </button>

      {isOpen && Dropdown && targetEl
        ? ReactDOM.createPortal(<Dropdown />, targetEl)
        : null}
    </>
  );
}


