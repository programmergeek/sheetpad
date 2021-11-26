import React from "react";
import { AddCircle } from "@styled-icons/fluentui-system-filled/AddCircle";

export const Navbar: React.FC = () => {
  return (
    <div className="grid grid-cols-2">
      {/*link home/top of page*/}
      <a href="">
        <img src="" alt="logo" />
      </a>
      {/*TODO: Create search bar component */}
      {/*Button to create new post */}
      <a href="">
        <AddCircle className="w-12 h-12" />
      </a>
    </div>
  );
};
