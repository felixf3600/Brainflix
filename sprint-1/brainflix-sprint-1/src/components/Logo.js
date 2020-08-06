import React from "react";

function Logo(props) {
  return (
    <div>
      <img className={props.classes} src={logo}></img>
    </div>
  );
}

export default Logo;
