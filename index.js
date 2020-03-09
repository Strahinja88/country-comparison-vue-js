//Install express server
const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

// destination.txt will be created or overwritten by default.
fs.copyFile("logo.png", "/dist", err => {
  if (err) throw err;
  console.log("source.txt was copied to destination.txt");
});

// Serve only the static files form the dist directory
app.use(express.static(__dirname + "/dist"));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 5000);
