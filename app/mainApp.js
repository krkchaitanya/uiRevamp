const express=require("express");
var app=express();





const port=3004;
app.listen(port,() => {
console.warn(`App is running on port-->`,port);
});
