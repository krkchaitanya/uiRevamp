const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
// initializing APP
const app = express();

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use("/assets", express.static('assets'));

// sending loading HTML page
app.get('/parallax', (req,res) => {
    console.log(path.join(__dirname));
    res.sendFile(path.join(__dirname,"/parallax.html"));
});

// server1
app.get("/", (req,res) => {
    res.send({
        "name": "mikeljohn",
        "addres": {
            "street": "123 street",
            "apt": "123",
            "city": "austin",
            "postal_code": "37483"
        }
    });
});


// port_Number 
const port = 8989;
app.listen(port, () => {
    console.log(`Parallax app is running on port ${port}`);
});