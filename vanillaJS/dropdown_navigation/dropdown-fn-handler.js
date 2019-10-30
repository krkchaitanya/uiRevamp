const express = require(express);
const fs = require("file-system");
const path= require("path");

const dropdownapp = express();
let userssJsonFile = path.join(__dirname, "./json_data/users_json_data.json");
let StringifiedUserData = fs.readFileSync(userssJsonFile);
const userData = JSON.parse(StringifiedUserData);

console.log(userData);