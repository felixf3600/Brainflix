import React from "react";
import Avatar from "./Avatar.jsx";
import { Link } from "react-router-dom";

function SearchForm() {
  return (
    <div className="header__searchForm">
      <input name="searchInput" placeholder="&#128269; Search"></input>
      <Link to="/uploads">
        <button
          className="header__upLoadButton"
          onClick={(event) => event.preventDefault}
        >
          &#43; UPLOAD
        </button>
        {/* <button className="header__upLoadButton" onClick={props.uploadEvent}>
          &#43; UPLOAD
        </button> */}
      </Link>
      <Avatar />
    </div>
  );
}

export default SearchForm;
