import React from "react";
import { AddCircle } from "@styled-icons/fluentui-system-filled/AddCircle";
import Logo from "./../assets/images/Logo.svg";

export const Navbar: React.FC = () => {
  return (
    <div className="grid grid-cols-2">
      {/*link home/top of page*/}
      <a href="" className="col-start-1 w-32 ml-2">
        <img src={Logo} alt="logo" className="w-32" />
      </a>
      {/*TODO: Create search bar component */}
      {/*Button to create new post */}
      <div className="flex justify-end mr-5">
        <a href="" className="w-12">
          <AddCircle className="w-12 h-12" style={{ color: "#f3bd91" }} />
        </a>
      </div>
    </div>
  );
};
