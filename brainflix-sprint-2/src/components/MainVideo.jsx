import React from "react";
import playButton from "../assets/Icons/SVG/Icon-play.svg";
import fullScreenButton from "../assets/Icons/SVG/Icon-fullscreen.svg";
import volumeButton from "../assets/Icons/SVG/Icon-volume.svg";
import { API_KEY } from "../components/envVariables";

export default function MainVideo({ video }) {
  return (
    <div className="main-video" key={video.id}>
      <div className="main-video__container">
        <div className="main-video__controls">
          <button className="main-video__button">
            <img src={playButton} alt="" />
          </button>
          <div className="main-video__progress-bar">
            <div className="main-video__progress-timeline">
              <div className="main-video__progress-scrubber"></div>
            </div>
            <div className="main-video__progress-text">
              0:00/{video.duration}
            </div>
          </div>
          <div className="main-video__button-group">
            <button className="main-video__button">
              <img src={fullScreenButton} alt="" />
            </button>
            <button className="main-video__button">
              <img src={volumeButton} alt="" />
            </button>
          </div>
        </div>
        <video className="main-video__video" poster={video.image}>
          <source
            src={`${video.video}?api_key=${API_KEY}`}
            type="video/mp4"
          ></source>
          Your browser does not support the video tag
        </video>
      </div>
    </div>
  );
}
