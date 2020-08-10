import React from "react";
import VideoItem from "./VideoItem";

function VideoList(props) {
  const classes = [
    "video-list__item",
    "video-list__image",
    "video-list__title",
    "video-list__channel",
  ];
  let idNotShown = props.videoList[0].id;
  console.log(idNotShown);
  return (
    <ul className={props.classes}>
      <h2>NEXT VIDEO</h2>
      {props.videoList
        .filter((video) => video.id !== idNotShown)
        .map((video) => (
          <VideoItem key={video.id} classes={classes} videoList={video} />
        ))}
    </ul>
  );
}

export default VideoList;
