import React from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

function Comments(props) {
  const classes = ["comments__form", "comments__list"];
  return (
    <div className={props.classes}>
      <h2>{props.comments.length} Comments</h2>
      <CommentForm classes={classes[0]} onClick={props.clickHandler} />
      <CommentList classes={classes[1]} commentList={props.comments} />
    </div>
  );
}

export default Comments;
