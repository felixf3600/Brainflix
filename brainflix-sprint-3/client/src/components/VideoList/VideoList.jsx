import React, { Component } from "react";
import VideoItem from "./VideoItem";

export default class VideoList extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      if (this.props.match.params.id)
        this.props.getVideoList(this.props.match.params.id);
      else this.props.getVideoList("");
    }
  }

  render() {
    const { videos, match } = this.props;

    if (videos === undefined) {
      return <p>loading</p>;
    }
    const newList = videos.map((video) => (
      <VideoItem key={video.id} videoList={video} match={match} />
    ));

    return (
      <ul className="video-list">
        <h2>NEXT VIDEO</h2>
        {newList}
      </ul>
    );
  }
}
