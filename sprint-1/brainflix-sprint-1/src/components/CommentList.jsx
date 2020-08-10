import React from "react";

function proccessedDate(commentTime) {
  const now = new Date();
  const old = new Date(commentTime);
  const timeDifference = (now - old) / 1000;
  const timeFrame = {
    minute: 60,
    hour: 3600,
    day: 86400,
    week: 604800,
    month: 259200,
    year: 31536000,
  };
  let returnTime = "";
  if (timeDifference < timeFrame.minute) {
    returnTime = `${Math.ceil(timeDifference)} sec ago`;
  } else if (timeDifference < timeFrame.hour) {
    returnTime = `${Math.floor(timeDifference / timeFrame.minute)} min ago`;
  } else if (timeDifference < timeFrame.day) {
    returnTime = `${Math.floor(timeDifference / timeFrame.hour)} hours ago`;
  } else if (timeDifference < timeFrame.week) {
    returnTime = `${Math.floor(timeDifference / timeFrame.day)} days ago`;
  } else if (timeDifference < timeFrame.month) {
    returnTime = `${Math.floor(timeDifference / timeFrame.week)} week ago`;
  } else if (timeDifference < timeFrame.year) {
    returnTime = `${Math.floor(timeDifference / timeFrame.month)} months ago`;
  } else {
    returnTime = `${Math.floor(timeDifference / timeFrame.year)} year ago`;
  }
  return returnTime;
}

function CommentList(props) {
  const classes = [
    "comments__image",
    "comments__name",
    "comments__timeStamp",
    "comments__comment-display",
    "comments__left-side",
    "comments__rigth-side",
  ];

  return (
    <ul className={props.classes}>
      {props.commentList.map((comment) => (
        <li key={comment.id}>
          <div className={classes[4]}>
            <div className={classes[0]}></div>
          </div>
          <div className={classes[5]}>
            <p className={classes[1]}>{comment.name}</p>
            <p className={classes[2]}>{proccessedDate(comment.timeStamp)}</p>
            <p className={classes[3]}>{comment.comment}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
