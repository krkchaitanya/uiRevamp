const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");

// App init
var app = express();

app.use("/css", express.static(path.join(__dirname,"/css")));

app.get("/", (req,res) => {
    res.sendFile((__dirname+"/index/index.html"));
});



// Defining port
const port = process.env.PORT || 3938;

// Running app on server
app.listen(port, () => {
    console.log("App is running on port --", port);
});