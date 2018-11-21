const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

// app init
let app = express();


// middlewares
app.use(cors());
app.use(bodyParser.json());
app.use("/utils", express.static(path.join(__dirname,"/utils")));

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname,"/index.html"));
});


// port 
const port = process.env.PORT || 4546;

app.listen(port, () => {
    console.log("App is running on port --", port);
});