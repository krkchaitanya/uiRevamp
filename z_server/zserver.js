const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// dependency routes
const defaultRouter =  require("./routes/defaultRoute");
const parallaxRouter = require("./routes/parallaxRoute");
const stackThingsRouter = require("./routes/stackThingsRoute");
const finalActThemeRouter = require("./routes/finalActThemeRoute");
const gradientRouter = require("./routes/gradientRoute");


// server initialization
const mainServer = express();



// ==============Middlewares start===============

mainServer.use(bodyParser.json());
mainServer.use(bodyParser.urlencoded({extended: false}));

// Default route
mainServer.use("/", defaultRouter);
mainServer.use("/zserver", express.static(path.join(__dirname, "./zserver_utils")));

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





// Zserver port
const {PORT = 2800} = process.env;
mainServer.listen(PORT, () => console.log("MainServer is running on the port >>> ", PORT));