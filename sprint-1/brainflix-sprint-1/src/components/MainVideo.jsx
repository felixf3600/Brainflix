import React from "react";
import playButton from "../assets/Icons/SVG/Icon-play.svg";
import fullScreenButton from "../assets/Icons/SVG/Icon-fullscreen.svg";
import volumeButton from "../assets/Icons/SVG/Icon-volume.svg";

function MainVideo(props) {
  const classes = [
    "main-video__video",
    "main-video__container",
    "main-video__controls",
    "main-video__button",
    "main-video__progress-bar",
    "main-video__progress-timeline",
    "main-video__progress-scrubber",
    "main-video__progress-text",
    "main-video__button-group",
  ];

  return (
    <div className={props.classes} key={props.video.id}>
      <div className={classes[1]}>
        <div className={classes[2]}>
          <button className={classes[3]}>
            <img src={playButton} alt="" />
          </button>
          <div className={classes[4]}>
            <div className={classes[5]}>
              <div className={classes[6]}></div>
            </div>
            <div className={classes[7]}>0:00/{props.video.duration}</div>
          </div>
          <div className={classes[8]}>
            <button className={classes[3]}>
              <img src={fullScreenButton} alt="" />
            </button>
            <button className={classes[3]}>
              <img src={volumeButton} alt="" />
            </button>
          </div>
        </div>
        <video className={classes[0]} poster={props.video.image}>
          <source src={props.video.video} type="video/mp4"></source>
          Your browser does not support the video tag
        </video>
      </div>
    </div>
  );
}

export default MainVideo;
