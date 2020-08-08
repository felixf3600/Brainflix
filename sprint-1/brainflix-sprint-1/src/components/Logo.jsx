import React from "react";

function Logo(props) {
  return (
    // <div>
    <img className={props.classes} src={props.logo} alt="logo"></img>
    // </div>
  );
}

export default Logo;
