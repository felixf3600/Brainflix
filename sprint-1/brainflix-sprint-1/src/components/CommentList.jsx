import React from "react";

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
            <p className={classes[2]}>{comment.timeStamp}</p>
            <p className={classes[3]}>{comment.comment}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
