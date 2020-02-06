const express = require("express");
const path = require("path");

const gradientRouter = express.Router();


gradientRouter.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../../cssAnimations/animIndex.html'));
});


module.exports = gradientRouter;