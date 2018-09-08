const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

// app initializes
const app =express();

// middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/assets', express.static(path.join(__dirname,"/assets")));

// parallax API for HTML
app.get("/parallax", (req,res) => {
    res.sendFile(path.join(__dirname,"/parallax.html"));
});

// getJsonData API
app.get("/jsonHandler", (req,res) => {
    res.send({
        "personVO": {
            "name":"great Person",
            "last name" : "user",
            "phone no": "1231231231",
            "address": "13 some great address",
            "postal code": "34534"
        }
    });
});

// prot
const port = process.env.port || "3535";
// running app on server
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});