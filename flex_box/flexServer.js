const express = require("express");
const path = require("path");
const cors = require("cors");

// app init
const app = express();

app.use(cors());
app.use("/utils", express.static(path.join(__dirname,"./utils")));

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname,"./index.html"));
});


//port
const port = process.env.PORT || 5657;

// Run app on server
app.listen(port, () => {
    console.log('App is running on port -->', port);
});

