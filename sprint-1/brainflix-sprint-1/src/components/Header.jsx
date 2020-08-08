import React from "react";
import logoImage from "../assets/Logo/Logo-brainflix.svg";
import Logo from "./Logo.jsx";
import SearchForm from "./SearchForm.jsx";

function Header(props) {
  const classes = ["header__logo", "header__searchForm", "header__avatar"];
  return (
    <header className={props.classes}>
      <Logo classes={classes[0]} logo={logoImage} />
      <SearchForm classes={classes} />
    </header>
  );
}

export default Header;
