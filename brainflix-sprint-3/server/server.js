const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
const { PORT, BACKEND_URL } = process.env;
const videoRoute = require("./routes/videoRoute");

// add middleware to help work with req.body
app.use(cors());
// app.use(express.static("public"));
app.use(express.json());

// root url of server
app.get("/", (_req, res) => {
  res.send("<h1>Hello Express</h1>");
});

// products endpoint, setup using express.Router()
app.use("/videos", videoRoute);

// listen, start the application
app.listen(PORT, () => console.log(`listening at: ${BACKEND_URL}:${PORT}`));
