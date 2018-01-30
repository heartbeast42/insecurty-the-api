const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
// import routes/api.js and router

const path = require('path');

// use routes ...

app.listen(port, function() {
  console.log(`listening on ${port}`);
})
