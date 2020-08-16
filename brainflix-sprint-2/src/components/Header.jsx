import React from "react";
import SearchForm from "./SearchForm.jsx";
import Logo from "./Logo.jsx";

function Header() {
  return (
    <header className="header">
      <Logo />
      <SearchForm />
    </header>
  );
}

export default Header;
