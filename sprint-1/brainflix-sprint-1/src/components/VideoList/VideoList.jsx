import React from "react";
import VideoItem from "./VideoItem";

function VideoList(props) {
  const classes = [
    "video-list__item",
    "video-list__image",
    "video-list__title",
    "video-list__channel",
  ];
  return (
    <ul className={props.classes}>
      <h2>Next Video</h2>
      {props.videoList.map((video) => (
        <VideoItem key={video.id} classes={classes} videoList={video} />
      ))}
    </ul>
  );
}

export default VideoList;
