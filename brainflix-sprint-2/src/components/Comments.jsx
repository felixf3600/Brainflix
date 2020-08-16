import React from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import likesIcon from "../assets/Icons/SVG/Icon-likes.svg";
import viewsIcon from "../assets/Icons/SVG/Icon-views.svg";

function Comments({ video }) {
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

    "comments__main-video-description",
  ];
  if (video.comments === undefined) {
    return <p>loading</p>;
  }
  console.log(video);
  const date = new Date(video.timestamp);
  const timeStamp = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
  return (
    <div className="comments">
      <div className={classes[5]}>
        <h1 className={classes[0]}>{video.title}</h1>
        <div className={classes[6]}>
          <div className={classes[7]}>
            <h3 className={classes[1]}>by {video.channel}</h3>
            <p className={classes[2]}>{timeStamp}</p> <br></br>
          </div>
          <div className={classes[8]}>
            <img src={viewsIcon} alt="views icon" />
            <p className={classes[3]}>{video.views}</p>
            <img src={likesIcon} alt="like icon" />
            <p className={classes[4]}>{video.likes}</p>
          </div>
        </div>
      </div>

      <p className={classes[9]}>{video.description}</p>

      <h2>{video.comments.length} Comments</h2>
      <CommentForm onClick={video.clickHandler} />
      <CommentList commentList={video.comments} />
    </div>
  );
}

export default Comments;
