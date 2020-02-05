const express = require("express");
const path = require("path");

const parallaxRouter = express.Router();


parallaxRouter.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../parallax/parallax.html"));
});


module.exports = parallaxRouter;