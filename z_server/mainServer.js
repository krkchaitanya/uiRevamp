const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// dependency routes
const parallaxRouter = require("./routes/parallaxRoute");

// server initialization
const mainServer = express();


// middlewares
mainServer.use(bodyParser.json());
mainServer.use(bodyParser.urlencoded({extended: false}));
mainServer.use('/parallaxAssets', express.static(path.join(__dirname,"../parallax/assets")));
mainServer.use('/parallax', parallaxRouter);


// default route
mainServer.get("/", (req, res) => {
    res.send({
        title: "Main server",
        Description: "Currently we are in the default route of the mainServer"
    });
});



// main server port
const {PORT = 2800} = process.env;
mainServer.listen(PORT, () => console.log("MainServer is running on the port >>> ", PORT));