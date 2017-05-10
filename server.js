const express = require('express');

// Create our app
const app = express();
const PORT = 3000;

app.use(express.static('public'));

const port = process.env.PORT || "3000";

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
