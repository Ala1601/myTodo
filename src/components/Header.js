import React from "react";
import AlaLogo from "../assets/my logo.PNG";
import "../index.css";
export const Header = () => {
  return (
    <header>
      <span className="logo">
        <img src={AlaLogo} alt="" />
        <span>Create your Todo List</span>
      </span>
    </header>
  );
};
