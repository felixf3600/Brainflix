import React from "react";

function Avatar(props) {
  return (
    <div>
      <img className={props.className} src={props.image} alt="avatar"></img>
    </div>
  );
}

export default Avatar;
