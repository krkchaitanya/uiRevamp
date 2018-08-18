// server1
// relative path and absolute path ?
// path.join()
//path.resove()
// cors --> cross origin request access
const express = require("express");
const path=require("path");
const app=express();

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, "/../basic_html.html"));
});


const port="3034";
app.listen(port, () => {
    console.log(`app is running on prot ${port}`);
});