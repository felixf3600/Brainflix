import React from "react";

function CommentForm(props) {
  const classes = [
    "comments__image",
    "comments__label",
    "comments__comment",
    "comments__left-side",
    "comments__rigth-side",
    "comments__button",
  ];

  return (
    <form className={props.classes} onSubmit={props.onClick}>
      <div className={classes[3]}>
        <img
          src="/images/Mohan-muruge.jpg"
          alt="avatar"
          className={classes[0]}
        ></img>
      </div>
      <div className={classes[4]}>
        <label htmlFor="searchInput" className={classes[1]}>
          JOIN THE CONVERSATION
        </label>
        <br />
        <textarea
          type="text"
          name={"searchInput"}
          placeholder="Write comment here"
          className={classes[2]}
        />
        <button className={classes[5]}>COMMENT</button>
      </div>
    </form>
  );
}
export default CommentForm;
