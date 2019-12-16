const path = require("path");
const express = require("express");
const app = express();

app.get("", (req, res) => {
    res.send("Tommy likes bagels and butter. Also he smells")
});
app.get("/tommysucks", (req, res) => {
    res.send("Tommy sucks and yes I did this")
});
app.listen(3000, () => {
  console.log("Listening on port 3000");
});

//http://127.0.0.1:3000/