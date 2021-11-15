import React from "react";

export const Tag: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="bg-orange-lightOrange w-min px-5 py-1 rounded font-openSans cursor-pointer text-white text-base">
      {text}
    </div>
  );
};
