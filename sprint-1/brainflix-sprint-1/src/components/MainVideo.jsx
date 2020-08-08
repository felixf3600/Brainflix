import React from "react";
import likesIcon from "../assets/Icons/SVG/Icon-likes.svg";
import viewsIcon from "../assets/Icons/SVG/Icon-views.svg";

function MainVideo(props) {
  const classes = [
    "main-video__video",
    "main-video__title",
    "main-video__channel",
    "main-video__date",
    "main-video__views",
    "main-video__likes",
    "main-video__description",
    "main-video__text-container",
  ];

  return (
    <div className={props.classes} key={props.video.id}>
      <video
        className={classes[0]}
        controls
        // autoplay="false"
        poster={props.video.image}
      >
        <source src={props.video.video} type="video/mp4"></source>
        Your browser does not support the video tag
      </video>
      <div className={classes[7]}>
        <h2 className={classes[1]}>{props.video.title}</h2>
        <h3 className={classes[2]}>by {props.video.channel}</h3>
        <p className={classes[3]}>{props.video.timestamp}</p> <br></br>
        <img src={viewsIcon} alt="views icon" />
        <p className={classes[4]}>{props.video.views}</p>
        <img src={likesIcon} alt="like icon" />
        <p className={classes[5]}>{props.video.likes}</p>
        <p className={classes[6]}>{props.video.description}</p>
      </div>
    </div>
  );
}

export default MainVideo;
