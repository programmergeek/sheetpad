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
  return <div></div>;
};
