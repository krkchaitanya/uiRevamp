const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// dependency routes
const parallaxRouter = require("./routes/parallaxRoute");
const stackThingsRouter = require("./routes/stackThingsRoute");
const finalActThemeRouter = require("./routes/finalActThemeRoute");
const gradientRouter = require("./routes/gradientRoute");


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

// finalActPhotography theme
mainServer.use('/finalActPhotography', finalActThemeRouter);
mainServer.use(express.static(path.join(__dirname, "../FinalAct_photography")));

//css gradient
mainServer.use('/gradient', gradientRouter);
mainServer.use(express.static(path.join(__dirname, "../cssAnimations"))); 

// ==============Middlewares start===============




// default route
mainServer.get("/", (req, res) => {
    res.send({
        title: "Main server",
        Description: "Currently we are in the default route of the mainServer"
    });
});



// Zserver port
const {PORT = 2800} = process.env;
mainServer.listen(PORT, () => console.log("MainServer is running on the port >>> ", PORT));