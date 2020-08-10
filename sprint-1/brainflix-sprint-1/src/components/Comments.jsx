import React from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import likesIcon from "../assets/Icons/SVG/Icon-likes.svg";
import viewsIcon from "../assets/Icons/SVG/Icon-views.svg";

function Comments(props) {
  const classes = [
    "comments__main-video-title",
    "comments__main-video-channel",
    "comments__main-video-date",
    "comments__main-video-views",
    "comments__main-video-likes",
    "comments__main-video-text-container",
    "comments__main-video-channel-details",
    "comments__main-video-left-side",
    "comments__main-video-right-side",
    "comments__form",
    "comments__list",
    "comments__main-video-description",
  ];

  return (
    <div className={props.classes}>
      <div className={classes[5]}>
        <h1 className={classes[0]}>{props.video.title}</h1>
        <div className={classes[6]}>
          <div className={classes[7]}>
            <h3 className={classes[1]}>by {props.video.channel}</h3>
            <p className={classes[2]}>{props.video.timestamp}</p> <br></br>
          </div>
          <div className={classes[8]}>
            <img src={viewsIcon} alt="views icon" />
            <p className={classes[3]}>{props.video.views}</p>
            <img src={likesIcon} alt="like icon" />
            <p className={classes[4]}>{props.video.likes}</p>
          </div>
        </div>
      </div>

      <p className={classes[11]}>{props.video.description}</p>

      <h2>{props.video.comments.length} Comments</h2>
      <CommentForm classes={classes[9]} onClick={props.clickHandler} />
      <CommentList classes={classes[10]} commentList={props.video.comments} />
    </div>
  );
}

export default Comments;
