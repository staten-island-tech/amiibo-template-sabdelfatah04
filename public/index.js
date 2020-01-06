const path = require("path");
const hbs = require("hbs");
const express = require("express");
const app = express();

//define paths for express
const publicDirectoryPath = path.join(__dirname, "../public");
const partialsPath = path.join(__dirname, "../templates/partials");

const viewsPath = path.join(__dirname, "../templates/views");
//setup handlebars engine and views and location
app.set("view engine", "hbs"); //Telling express/node to use handlebars for our templates
app.set("views", viewsPath);//telling express to get templates from tamples/views folder
hbs.registerPartials(partialsPath);
//set up our static asset directory 
app.use(express.static(publicDirectoryPath));
app.get("", async (req, res) => {
    try {
      res.render("index", {
          title: "Our First Express App"
      }); 
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
app.get("/about/:id", async (req, res) => {
    const name = req.params.id;
    try {
      res.render("index", {
          title: `${name}`
      }); 
    } catch(error) {
        res.status(500).send();
    }
}); 
//http://127.0.0.1:3000/
app.get("/swag", async (req, res) => {
    const name = req.params.id;
    try {
      res.render("swag", {
          title: `${name}`
      }); 
    } catch(error) {
        res.status(500).send();
    }
});
app.get("/showcase/:id", async (req, res) => {
    const title = req.params.id;
    try {
      res.render("showcase",  {
          title: `${title}`
      }); 
    } catch(error) {
        res.status(500).send();
    }
});
