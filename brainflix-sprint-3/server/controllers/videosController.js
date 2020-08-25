// load model
const videos = require("../models/videoModels");
// const { list } = require("../models/videoModels");

// get video array
function listVideos(_req, res) {
  videos.list((videos) => {
    const sidebarVideos = videos.map((video) => {
      return {
        id: video.id,
        channel: video.channel,
        title: video.title,
        image: video.image,
      };
    });
    res.json(sidebarVideos);
  });
}

// get Video by id
function getVideosByID(req, res) {
  console.log(req.params);
  res.json(videos.getByID(req.params.id));
}

// post new Video
function addVideos(req, res) {
  console.log(req.body.title);
  if (!req.body.title || !req.body.description) {
    res.status(400).json({
      error: "POST body must contain all required Properties",
      requiredProperties: ["title", "description"],
    });
  }
  res.json(videos.add(req.body));
}

// delete Video
// function deleteVideos(req, res) {
//   res.json(videos.deleteVideo(req.params.id));
// }

// update Video, pass id and body
// function updateVideo(req, res) {
//   res.json(videos.updateVideo(req.params.id, req.body));
// }

// export functions
module.exports = {
  listVideos,
  addVideos,
  getVideosByID,
  //   deleteVideos,
  //   updateVideo,
};
