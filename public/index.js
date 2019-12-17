const path = require("path");
const express = require("express");
const app = express();

//define paths for express
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
//setup handlebars engine and views and location
app.set("views engine", "hbs"); //Telling express/node to use handlebars for our templates
app.set("views", viewsPath);//telling express to get templates from tamples/views folder
app.get("", async (req, res) => {
    try {
      res.render("index"); 
    } catch(error) {
        res.status(500).send();
    }
});
app.get("/tommysucks", (req, res) => {
    res.send("Tommy sucks and yes I did this")
});
app.listen(3000, () => {
  console.log("Listening on port 3000");
  console.log(viewsPath);
});

//http://127.0.0.1:3000/