const express = require("express");
const path = require("path");

const finalActThemeRouter = express.Router();

finalActThemeRouter.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../FinalAct_photography/index.html"));
});

module.exports = finalActThemeRouter;