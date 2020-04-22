const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// dependency routes
const defaultRouter =  require("./routes/defaultRoute");
const parallaxRouter = require("./routes/parallaxRoute");
const stackThingsRouter = require("./routes/stackThingsRoute");
const finalActThemeRouter = require("./routes/finalActThemeRoute");
const gradientRouter = require("./routes/gradientRoute");
const flexboxRouter = require("./routes/flexboxRoute");
const cssEffect1_router = require("./routes/css_effect1");


// server initialization
const mainServer = express();



// ==============Middlewares start===============

mainServer.use(bodyParser.json());
mainServer.use(bodyParser.urlencoded({extended: false}));

// Default route
mainServer.use("/", defaultRouter);
mainServer.use("/zserver", express.static(path.join(__dirname, "./zserver_utils")));

// parallax theme
mainServer.use('/parallaxAssets', express.static(path.join(__dirname,"../parallax/parallaxAssets")));
mainServer.use('/parallax', parallaxRouter);

// stackThings theme
mainServer.use('/stackThings', stackThingsRouter);
mainServer.use('/stackthings_assets', express.static(path.join(__dirname, "../good_themes/stackthings/stackthings_assets")));

// finalActPhotography theme
mainServer.use('/finalActPhotography', finalActThemeRouter);
mainServer.use('/finalact_assets', express.static(path.join(__dirname, "../FinalAct_photography/finalact_assets")));

//css gradient
mainServer.use('/gradient', gradientRouter);
mainServer.use('/cssanim_assets', express.static(path.join(__dirname, "../cssAnimations/cssanim_assets"))); 

// CSS Flex-Box
mainServer.use("/flexbox", flexboxRouter);
mainServer.use("/flexbox_assets", express.static(path.join(__dirname, "./../flex_box/flexbox_assets")));

// static content like bootstrap, jQuery, font-awesome minied files
mainServer.use('/staticFiles', express.static(path.join(__dirname, "./../staticFiles")));

// css effect 1
mainServer.use('/cssEffect1', cssEffect1_router);
mainServer.use('/csseffect1_assets', express.static(path.join(__dirname, "./../good_themes/css_effect_1/csseffect1_assets")));

// ==============Middlewares start===============





// Zserver port
const {PORT = 2800} = process.env;
mainServer.listen(PORT, () => console.log("MainServer is running on the port >>> ", PORT));