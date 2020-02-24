import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../logo.svg";
import "./navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="logo" height="40px" />
      </Link>
    </div>
  );
};
