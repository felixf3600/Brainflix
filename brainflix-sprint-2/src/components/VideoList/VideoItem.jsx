import React from "react";
import { Link } from "react-router-dom";

function VideoItem({ videoList, match }) {
  return (
    <Link to={`/${videoList.id}`} className="video-list__item">
      <div className="video-list__left-side">
        <img
          className="video-list__image"
          src={videoList.image}
          alt={videoList.title}
        ></img>
      </div>
      <div className="video-list__right-side">
        <h3 className="video-list__title">{videoList.title}</h3>
        <p className="video-list__channel">{videoList.channel}</p>
      </div>
    </Link>
  );
}

export default VideoItem;
