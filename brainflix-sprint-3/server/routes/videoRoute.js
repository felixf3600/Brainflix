const express = require("express");
const router = express.Router();
const videosControllers = require("../controllers/videosController"); // import controller

// product routes
router.get("/", videosControllers.listVideos);
router.post("/", videosControllers.addVideos);
router.get("/:id", videosControllers.getVideosByID);
// router.put("/:id", videosControllers.updateVideos);
// router.delete("/:id", videosControllers.deleteVideos);

// export routes
module.exports = router;
