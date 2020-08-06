import React from "react";
import logoImage from "../assets/Logo/Logo-brainflix.svg";
import avatarImage from "../assets/Images/Mohan-muruge.jpg";

function Header() {
  const classes = [header__logo, header__searchForm, header__avatar];
  return (
    <header className="header">
      <Logo classes={classes[0]} logo={logoImage} />
      <SearchForm classes={classes[1]} />
      <Avatar classes={classes[2]} image={avatarImage} />
    </header>
  );
}

export default Header;
