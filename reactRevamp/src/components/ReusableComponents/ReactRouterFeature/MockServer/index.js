const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

// middleware
app.use(cors());

app.get("/", (req,res) => {
    res.send({
        title: "Mock server",
        description: "Data for testing react router"

    });
});


app.get("/writers", (req,res) => {
    res.sendFile(path.join(__dirname,"/writersinfo.json"));
});

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
    res.status(404).send("What??");
  });
  

const port = 2625;
app.listen(port, () => {
    console.log('App is running on port ..', port);
});