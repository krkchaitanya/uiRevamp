const express = require("express");
const path = require("path");

const cssEffect1_router = express.Router();

cssEffect1_router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../good_themes/css_effect_1/index.html"));
});

module.exports = cssEffect1_router;