const express = require("express");
const bodyParser = require("body-parser");

// import dependency modules
const homeComponent = require("./routes/home");
const aboutComponent = require("./routes/about");

// server init
const server = express();


// middlewares
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));
server.use("/api/home", homeComponent);
server.use("/api/about", aboutComponent);


// default route
server.get("/api", (req, res) => {
    res.json({
        title: "NodeJS server default route",
        description: "Residing in the default route of react revamp module server"
    });
});





// port
const port= 2600;
server.listen(port, () => console.log(`server is runnig on port ${port}`));