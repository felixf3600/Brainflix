import React from "react";
import { Link } from "react-router-dom";

function Uploads(props) {
  return (
    <div className="uploads">
      <h1 className="uploads__title">Upload Video</h1>
      <form className="uploads__form">
        <div className="uploads__inner-container">
          <div className="uploads__thumbnail-container">
            <label htmlFor="upload__thumbnail" className="uploads__label">
              VIDEO THUMBNAIL
            </label>
            <br />
            <img
              src="/images/Upload-video-preview.jpg"
              alt="upload video"
              className="uploads__thumbnail"
            />
          </div>
          <div className="uploads__input-container">
            <label htmlFor="uploads__video-title" className="uploads__label">
              TITLE YOUR VIDEO
            </label>
            <br />
            <textarea
              name="uploadsVideoTitle"
              id="uploads__video-title"
              className="uploads__video-title"
              placeholder="Add a title to your video"
            ></textarea>
            <br />
            <label
              htmlFor="uploads__video-description"
              className="uploads__label"
            >
              ADD A VIDEO DESCRIPTION
            </label>
            <br />
            <textarea
              name="uploadsVideoDescription"
              id="uploads__video-description"
              className="uploads__video-description"
              placeholder="Add a descriptopm of your video"
            ></textarea>
          </div>
        </div>
        <div className="uploads__button-container">
          <Link to="/">
            <button
              type="submit"
              onClick={props.upload}
              className="uploads__button"
            >
              PUBLISH
            </button>
          </Link>
          <Link to="/">
            <button className="uploads__button uploads__button-cancel">
              CANCEL
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Uploads;
