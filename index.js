var mongoose = require("mongoose");
var express = require("express");
var routesfile = require("./Router");
var bodyParser = require("body-parser");


mongoose.connect("mongodb://localhost:27017/product").then(() => {
    console.log("Database connected");

    var app = express();
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use("/api", routesfile);

    // app.get('/', (req,res)=>{
    //     res.sendFile('index.html',{root:__dirname})
    // })
    
    app.listen(process.env.PORT || 3000, () => {
      console.log("server started");
    });
  })
  .catch((e) => {
    console.log(e.toString());
  });
