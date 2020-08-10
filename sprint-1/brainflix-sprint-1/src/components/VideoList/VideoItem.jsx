import React from "react";

function VideoItem(props) {
  return (
    <li className={props.classes[0]}>
      <div className="video-list__left-side">
        <img
          className={props.classes[1]}
          src={props.videoList.image}
          alt={props.videoList.title}
        ></img>
      </div>
      <div className="video-list__right-side">
        <h3 className={props.classes[2]}>{props.videoList.title}</h3>
        <p className={props.classes[3]}>{props.videoList.channel}</p>
      </div>
    </li>
  );
}

export default VideoItem;
