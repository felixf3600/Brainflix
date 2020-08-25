const fs = require("fs"); // file system module
const path = require("path");
const { v4: uuidv4 } = require("uuid");

// json data to read and write
const videosFile = path.join(__dirname, "../db/videos.json");

// video Object Constructor
function Video(title, description) {
  this.id = uuidv4();
  this.title = title;
  this.channel = "Mohan Muruge";
  this.image = "/images/Upload-video-preview.jpg";
  this.description = description;
  this.views = 0;
  this.likes = 0;
  this.duration = "5:00";
  this.video = "https://project-2-api.herokuapp.com/stream";
  this.timestamp = new Date();
  this.comments = [];
}

// list videos array data from json file
function list(callback) {
  const data = fs.readFile(videosFile, (err, data) => {
    if (err) throw err;
    const videos = JSON.parse(data);
    callback(videos);
  });
}

function fullList() {
  const data = fs.readFileSync(videosFile);
  return JSON.parse(data);
}

// add video to json file
function add(data) {
  const videosArr = fullList();
  const video = new Video(data.title, data.description);
  videosArr.push(video);
  fs.writeFileSync(videosFile, JSON.stringify(videosArr));
  return videosArr;
}

// get video by id param /videos/:id
function getByID(id) {
  const videosArr = fullList();
  return videosArr.filter((video) => video.id === id).shift();
}

// delete video by id
// function deleteVideo(id) {
//   const videosArr = list();
//   const videoIndex = videosArr.findIndex((video) => video.id === id);
//   videosArr.splice(videoIndex, 1);
//   fs.writeFileSync(videosFile, JSON.stringify(videosArr));
//   return videosArr;
// }

// update video by id
// function updateVideo(id, data) {
//   const videosArr = list();
//   const videoIndex = videosArr.findIndex((video) => video.id === id);
//   videosArr.splice(videoIndex, 1, {
//     id: id,
//     title: data.title,
//     description: data.description,
//   });
//   fs.writeFileSync(videosFile, JSON.stringify(videosArr));
//   return videosArr;
// }

// export multiple functions
module.exports = {
  list,
  add,
  getByID,
  //   deleteVideo,
  // updateVideo
};
