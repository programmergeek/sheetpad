import React from "react";

type IconProps = {
  image?: string; // string value for image
  svgImage?: Element; // accepts svg graphic container
  onClick?: () => void; // event listener for if clicked
};

/**
 * Purpose: Creates circular button component with image or svg graphic in the center
 * @param {string} image - [optional] image location
 * @param {Element} svgImage - [optional] svg container
 * @param {() => void} onClick - [option] click event listener
 */

export const IconButton: React.FC<IconProps> = ({ ...props }: IconProps) => {
  return (
    <button
      className="w-10 rounded-full h-10 shadow-icon m-4"
      onClick={props.onClick}
    >
      {/*if image is provided use that else assume svg graphic has been provided */}
      {props.image ? (
        <img src={props.image} alt="icon-button" className="w-9 h-9" />
      ) : (
        props.svgImage
      )}
    </button>
  );
};
