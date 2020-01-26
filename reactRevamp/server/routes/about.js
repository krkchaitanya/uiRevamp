const express = require("express");
const aboutComponent = express.Router();

aboutComponent.get("/", (req, res) => {
    
    let title= "About component";
    let description= "Currently residing in the about component";
    
    res.json({
        title,
        description
    });

});


module.exports = aboutComponent;