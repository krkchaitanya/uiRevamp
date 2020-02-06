const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// dependency routes
const parallaxRouter = require("./routes/parallaxRoute");
const stackThingsRouter = require("./routes/stackThingsRoute");

// server initialization
const mainServer = express();


// ==============Middlewares start===============

mainServer.use(bodyParser.json());
mainServer.use(bodyParser.urlencoded({extended: false}));

// parallax theme
mainServer.use('/parallaxAssets', express.static(path.join(__dirname,"../parallax/assets")));
mainServer.use('/parallax', parallaxRouter);

// stackThings theme
mainServer.use('/stackThings', stackThingsRouter);
mainServer.use(express.static(path.join(__dirname, "../good_themes/stackthings")));


// ==============Middlewares start===============




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