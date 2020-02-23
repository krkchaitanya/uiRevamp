const express = require("express");
const path = require("path");

const flexboxRouter = express.Router();


flexboxRouter.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./../../flex_box/index.html"));
});

flexboxRouter.get("/theme", (req, res) => {
    res.sendFile(path.join(__dirname, "./../../flex_box/theme/flexTheme.html"));
});

module.exports = flexboxRouter;