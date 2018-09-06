// server1
// relative path and absolute path ?
// path.join()
//path.resove()
// cors --> cross origin request access
// lodash --> npm module used to validate and structure the data
const express = require("express");
const path=require("path");
const cors= require("cors");
const fs=require("fs");
const _ = require("lodash");
const app=express();

const {urlPatterns} = require("./urlPatterns/url_patterns");
// import urlPatterns from "./urlPatterns/url_patterns";

app.use(cors());

// res.sendFile.......
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, "/../basic_html.html"));
});

// readFileSync(Sync ...blocking executuin of other stmt) vs readFile(Asynchronous ...runs in background...no blocking)
app.get(urlPatterns.user_information,(req,res)=>{
    const userCardsFile=fs.readFileSync(path.join(__dirname,"mockResponses/getUserInformation.json"), "utf-8", (error,data) => {
        if(error){
            console.log(`Error fetching data...`);
        }
        return data;
    });
    console.log(!_.isEmpty(userCardsFile));
    if(!_.isEmpty(userCardsFile)){
        res.send(userCardsFile);
    }
});

app.get(urlPatterns.machine_information, (req,res)=>{
    const machinesDataFile = fs.readFileSync(path.join(__dirname,"mockResponses/getMachineInformation.json"), "utf-8", (error,data) => {
        if(error){
            console.log("Error in readingTheJsonFile",error);
        }
        return data;
    });
    if(!_.isEmpty(machinesDataFile)){
        res.send(machinesDataFile);
    }
});


const port="3034";
app.listen(port, () => {
    console.log(`app is running on prot ${port}`);
});