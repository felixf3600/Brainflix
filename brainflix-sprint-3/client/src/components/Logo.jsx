import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/Logo/Logo-brainflix.svg";

function Logo() {
  return (
    <Link to="/">
      <img className="header__logo" src={logoImage} alt="logo"></img>
    </Link>
  );
}

export default Logo;
