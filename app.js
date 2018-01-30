const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

const path = require('path');

app.listen(port, function() {
  console.log(`listening on ${port}`);
})
