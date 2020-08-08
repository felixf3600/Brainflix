import React, { Component } from "react";
import "./Sass/App.css";
import Header from "./components/Header";
import MainVideo from "./components/MainVideo";
import Comments from "./components/Comments";
import VideoList from "./components/VideoList/VideoList";
import { v4 as uuid4 } from "uuid";

// class Videos extends React.Component {
//   state = {
//     currentVideoId: "",
//   };
// }
class App extends Component {
  state = {
    sideVideo: [
      {
        id: uuid4(),
        title: "BMX Rampage: 2018 Highlights",
        channel: "Red Cow",
        image: "/images/video-list-0.jpg",
      },
      {
        id: uuid4(),
        title: "Become A Travel Pro In One Easy Lesson",
        channel: "Todd Welch",
        image: "/images/video-list-1.jpg",
      },
      {
        id: uuid4(),
        title: "Les Houches The Hidden Gem Of The Chamonix",
        channel: "Cornelia Blair",
        image: "/images/video-list-2.jpg",
      },
      {
        id: uuid4(),
        title: "Travel Health Useful Medical Information For",
        channel: "Glen Harper",
        image: "/images/video-list-3.jpg",
      },
      {
        id: uuid4(),
        title: "Cheap Airline Tickets Great Ways To Save",
        channel: "Emily Harper",
        image: "/images/video-list-4.jpg",
      },
      {
        id: uuid4(),
        title: "Take A Romantic Break In A Boutique Hotel",
        channel: "Ethan Owen",
        image: "/images/video-list-5.jpg",
      },
      {
        id: uuid4(),
        title: "Choose The Perfect Accommodations",
        channel: "Lydia Perez",
        image: "/images/video-list-6.jpg",
      },
      {
        id: uuid4(),
        title: "Cruising Destination Ideas",
        channel: "Timothy Austin",
        image: "/images/video-list-7.jpg",
      },
      {
        id: uuid4(),
        title: "Train Travel On Track For Safety",
        channel: "Scotty Cranmer",
        image: "/images/video-list-8.jpg",
      },
    ],
    mainVideo: {
      id: uuid4(),
      title: "BMX Rampage: 2018 Highlights",
      description:
        "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
      channel: "Red Cow",
      image: "/images/video-list-0.jpg",
      views: "3423553",
      likes: "342234",
      duration: "5:00",
      video: "/video/BrainStationSampleVideo.mp4",
      timestamp: "12/18/2018",
      comments: [
        {
          id: uuid4(),
          name: "Micheal Lyons",
          timeStamp: "12/18/2018",
          comment:
            "They BLEW the ROOF off at their last show, once everyone started figuring out they were going, This is still simply the greatest opening of a concert I have EVER witnessed.",
        },
        {
          id: uuid4(),
          name: "Gary Wong",
          timeStamp: "12/12/2018",
          comment:
            "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
        },
        {
          id: uuid4(),
          name: "Theodore Duncan",
          timeStamp: "11/15/2018",
          comment:
            "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
        },
      ],
    },
  };

  render() {
    const classes = ["header", "main-video", "comments", "video-list"];
    return (
      <div className="brainflix">
        <Header classes={classes[0]} />
        <MainVideo classes={classes[1]} video={this.state.mainVideo} />
        <Comments
          classes={classes[2]}
          comments={this.state.mainVideo.comments}
          // onClick={clickHandler}
        />
        <VideoList classes={classes[3]} videoList={this.state.sideVideo} />
      </div>
    );
  }
}
export default App;
