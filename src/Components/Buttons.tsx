import React from "react";

type IconProps = {
  onClick?: () => void; // event listener for if clicked
};

/**
 * Purpose: Creates circular button component with image or svg graphic in the center
 * @param {string} icon - icon image/svg graphic location [string]
 * @param {() => void} onClick - [option] click event listener
 */

export const IconButton: React.FC<IconProps> = ({ ...props }) => {
  return (
    <button
      className="w-15 rounded-full h-15 shadow-icon m-4 p-2 bg-white"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
