const express = require("express");
const path = require("path");

const stackThingsRouter = express.Router();


stackThingsRouter.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../good_themes/stackthings/stackthings.html")); 
});


module.exports = stackThingsRouter;
