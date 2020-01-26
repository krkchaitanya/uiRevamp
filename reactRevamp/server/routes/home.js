const express = require("express");
const homeComponent = express.Router();

homeComponent.get("/", (req, res) => {
    
    let title= "Home component";
    let description= "Currently residing in the home component";
    
    res.json({
        title,
        description
    });

});


module.exports = homeComponent;