const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
// initializing APP
const app = express();

// middlewares
app.use(bodyParser.json());
app.use(cors());

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