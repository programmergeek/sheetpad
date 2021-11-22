import React from "react";

type IconProps = {
  icon: string; // icon image/svg location
  className?: string; // class names for icon
  onClick?: () => void; // event listener for if clicked
};

const Icon: React.FC<{ icon: string; className: string }> = ({ ...props }) => {
  return (
    <div>
      <img
        src={props.icon}
        alt="icon"
        className={`w-10 h-10 ${props.className}`}
      />
    </div>
  );
};

/**
 * Purpose: Creates circular button component with image or svg graphic in the center
 * @param {string} icon - icon image/svg graphic location [string]
 * @param {() => void} onClick - [option] click event listener
 */

export const IconButton: React.FC<IconProps> = ({ ...props }: IconProps) => {
  return (
    <button
      className="w-15 rounded-full h-15 shadow-icon m-4 p-2 bg-white"
      onClick={props.onClick}
    >
      {/*if image is provided use that else assume svg graphic has been provided */}
      <Icon
        icon={props.icon}
        className={`${props.className ? props.className : ""}`}
      />
    </button>
  );
};
