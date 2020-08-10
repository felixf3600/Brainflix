import React from "react";
import Avatar from "./Avatar.jsx";

function SearchForm(props) {
  const avatarImage = "/images/Mohan-muruge.jpg";

  return (
    <form className={props.classes[1]}>
      <input name="searchInput" placeholder="&#128269; Search"></input>
      <button className="header__upLoadButton">&#43; UPLOAD</button>
      <Avatar classes={props.classes[2]} image={avatarImage} />
    </form>
  );
}

export default SearchForm;
