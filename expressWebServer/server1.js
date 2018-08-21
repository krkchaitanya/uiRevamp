// server1
// relative path and absolute path ?
// path.join()
//path.resove()
// cors --> cross origin request access
// lodash --> npm module used to validate and structure the data
const express = require("express");
const path=require("path");
const cors= require("cors");
const bodyParser=require("body-parser");
const fs=require("fs");
const _ = require("lodash");
const app=express();

app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// res.sendFile.......
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, "/../basic_html.html"));
});

// readFileSync(Sync ...blocking executuin of other stmt) vs readFile(Asynchronous ...runs in background...no blocking)
app.get('/getUserInformation',(req,res)=>{
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

app.get('/getMachinesInformation', (req,res)=>{
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