import React from "react";

function VideoItem(props) {
  return (
    <li className={props.classes[0]}>
      <img
        className={props.classes[1]}
        src={props.videoList.image}
        alt={props.videoList.title}
      ></img>
      <h3 className={props.classes[2]}>{props.videoList.title}</h3>
      <p className={props.classes[3]}>{props.videoList.channel}</p>
    </li>
  );
}

export default VideoItem;
