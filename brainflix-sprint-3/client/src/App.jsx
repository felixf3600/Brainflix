import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import "./Sass/App.css";
import Header from "./components/Header";
import MainVideo from "./components/MainVideo";
import Comments from "./components/Comments";
import VideoList from "./components/VideoList/VideoList";
import Uploads from "./components/Uploads";
// import { API_KEY } from "./components/envVariables";

// const axios_URL = "https://project-2-api.herokuapp.com/videos";
const axios_URL = "http://localhost:5000/videos";

// const videoListURL = `${axios_URL}?api_key=${API_KEY}`;
const videoListURL = `${axios_URL}`;
// const getVideobyId = (id) => `${axios_URL}/${id}?api_key=${API_KEY}`;
const getVideobyId = (id) => `${axios_URL}/${id}`;

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
    console.log(id);
    if (id === undefined) id = homeVideo.id;
    axios.get(getVideobyId(id)).then((response) => {
      console.log(response.data);
      this.setState({
        videoDetails: response.data,
      });
      console.log(this.state.videoDetails);
    });
  };
  uploadEvent = (event) => {
    // event.preventDefault();
    const form = document.querySelector(".uploads__form");
    console.log(form.uploadsVideoDescription.value);
    const data = {
      title: form.uploadsVideoTitle.value,
      description: form.uploadsVideoDescription.value,
    };
    console.log(data);
    axios.post(videoListURL, data).then(this.getVideoList(""));
    alert("thank you for your submission");
    return <Link to="/" />;
  };

  render() {
    return (
      <div className="brainflix">
        <Header />
        <Switch>
          <Route
            path="/uploads"
            render={() => <Uploads upload={this.uploadEvent} />}
          />
          <Route
            path="/"
            exact
            render={(props) => (
              <>
                <MainVideo video={this.state.videoDetails} />
                <Comments video={this.state.videoDetails} />
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
                <Comments video={this.state.videoDetails} />
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
