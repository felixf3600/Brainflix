import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import "./Sass/App.css";
import Header from "./components/Header";
import MainVideo from "./components/MainVideo";
import Comments from "./components/Comments";
import VideoList from "./components/VideoList/VideoList";
import Uploads from "./components/Uploads";
import { API_KEY } from "./components/envVariables";

// const uploadEvent = (event) => {
//   event.preventDefault();
// };
const axios_URL = "https://project-2-api.herokuapp.com/videos";
const videoListURL = `${axios_URL}?api_key=${API_KEY}`;
const getVideobyId = (id) => `${axios_URL}/${id}?api_key=${API_KEY}`;
let homeVideo = "";
class App extends Component {
  state = {
    videos: [],
    videoDetails: {},
  };

  componentDidMount() {
    this.getVideoList("");
  }
  getVideoList = (id) => {
    axios.get(videoListURL).then((response) => {
      let newList = response.data;
      if (id) {
        this.setState({
          videos: newList.filter((video) => video.id !== id),
        });
        this.displayMainVideo(id);
      } else {
        homeVideo = newList.shift();
        this.setState({ videos: newList });
        this.displayMainVideo(homeVideo.id);
      }
    });
  };
  displayMainVideo = (id) => {
    if (id === undefined) id = homeVideo.id;
    axios.get(getVideobyId(id)).then((response) => {
      this.setState({
        videoDetails: response.data,
      });
    });
  };
  render() {
    return (
      <div className="brainflix">
        <Header />
        <Switch>
          <Route path="/uploads" render={() => <Uploads />} />
          <Route
            path="/"
            exact
            render={(props) => (
              <>
                <MainVideo video={this.state.videoDetails} />
                <Comments
                  video={this.state.videoDetails}
                  // onClick={clickHandler}
                />
                <VideoList
                  videos={this.state.videos}
                  {...props}
                  displayMainVideo={this.displayMainVideo}
                  getVideoList={this.getVideoList}
                />
              </>
            )}
          />
          <Route
            path="/:id"
            render={(props) => (
              <>
                <MainVideo video={this.state.videoDetails} />
                <Comments
                  video={this.state.videoDetails}
                  // onClick={clickHandler}
                />
                <VideoList
                  videos={this.state.videos}
                  {...props}
                  displayMainVideo={this.displayMainVideo}
                  getVideoList={this.getVideoList}
                />
              </>
            )}
          />
        </Switch>
      </div>
    );
  }
}
export default App;
