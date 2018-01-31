const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

// process requests and returns as json // I THINK THERE IS A MASTERY FOR THIS
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// middleware
const cors = require("cors")
app.use(cors())

// get that api!
const api = require("./routes/api.js");
app.use("/", api);

// server
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
