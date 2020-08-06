import React from "react";
import searchIcon from "../assets/Icons/SVG/Icon-search.svg";

function SearchForm(props) {
  const searchimage = <img src={searchIcon} alt="search icon"></img>;
  return (
    <div>
      <form className={props.classes}>
        <input name="searchInput" placeholder={`${searchimage} search`}></input>
      </form>
    </div>
  );
}

export default SearchForm;
