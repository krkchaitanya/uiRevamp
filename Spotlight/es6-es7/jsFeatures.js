import fetch from "node-fetch";
import axios from "axios";
import {ageCalculator, survivorInfMaker} from "./jsFeatures2";

// Temaplate literals

const templateStrings = 
`
Template literals
------------------
`;
document.querySelector("#z-template-literals").innerText = templateStrings; 
const templateStrings1 = 
    `Here is the best way 
    to define 
    the template literals`;

document.getElementById("z-template-literals-1").innerText = templateStrings1;

// Object destructuring
const objectDestructuring = `Object Destructuring`;
document.querySelector("#z-object-destructuring").innerText = 
`
${objectDestructuring}
-----------------------------
`;

const addressMaker = (addressObj) => {
    const {street, city, state, zipcode} = addressObj;
    return {street, city, state, zipcode};
};

const addrResp = addressMaker({street: "123 state street", city: "Murray", state: "Utah", zipcode: "84101"});
document.querySelector("#z-object-destructuring-1").innerText =
`${addrResp.street}, ${addrResp.city}, ${addrResp.state}, ${addrResp.zipcode}`;

const survivorInf = {
    name: "octavia",
    clan: "skycrew",
    moto: "Raise above the ashes",
    location: "arkedia"
};

document.querySelector('#z-object-destructuring-2').innerText = 
    `
    ..Skycrew survivor information..
    name: ${survivorInf.name} 
    clan: ${survivorInf.clan} 
    moto: ${survivorInf.moto} 
    location: ${survivorInf.location}
    `;

// Array destructuring
const arrayDestructuring = `Array destructuring`;
document.getElementById("z-array-destructuring").innerText = 
`
${arrayDestructuring}
--------------------------
`;

const [clan1, clan2, clan3, clan4] = ["skycrew",  "skymountain", "grounder", "trikru"];
document.getElementById("z-array-destructuring-1").innerText = 
`-> ${clan1}
-> ${clan2}`;

const complicatedObj = {
    arrayProp: [
        `Zazz`,
        {bass: "Heavy Bass"}
    ]
}; 
const {arrayProp: [first, {bass}]} = complicatedObj;
document.getElementById("z-array-destructuring-2").innerText = 
`
${first} , ${bass}
`;


// For of loop
const forOfLoop = `
For Of Loop
-----------------
`;
document.querySelector("#z-for-of-loop").innerText = forOfLoop;;

const userList = axios.get('https://jsonplaceholder.typicode.com/users');
userList
.then(userLst => console.log(userLst.data))
.catch(error => console.log(error));


userList
.then (usersList => {
    for(var user of usersList.data) {
        let ul = document.getElementById("z-for-of-loop-1");
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(`${user.id} - ${user.name}   ---  ${user.website}`));
        ul.appendChild(li);
    };
});


// =====================================================================================
// Es6 - spread & Rest operator's
// The spread operator allows us to expand elements. 
// With rest parameters we were able to get a list of arguments into an array. 
// Packing elements in an array to single/individual argument and can pass it to a function.
// Javascript's (...)Dot's can be used for both Rest and Spread operators
// =====================================================================================

const spreadOperator = `
Spread Operator
---------------------------
`;
document.getElementById("z-spread-oper").innerText = spreadOperator;
const smartArray1 = [1,2,3];
const smartArray2 = [...smartArray1];
smartArray2.push(4,5);
document.querySelector("#z-spread-oper-1").innerText = smartArray2;


const survivorInfoMaker = (name, email, community) => {
    return {name, email, community};
};
const survivorEngineer = ["Monty", "montyscint22@yahoo.com", "skycrew"];
const survivorObj =  survivorInfoMaker(...survivorEngineer);
document.querySelector("#z-spread-oper-2").innerText = 
    `${survivorObj.name}, ${survivorObj.email}, ${survivorObj.community}`;

// rest operator 
const restOperator = `
Rest Operator (Collects remaining elements into an Array)
Rest parameter have to be at last argument
-------------------
`;

function restAdd(...args) {
    console.log('--Entering restAdd function of jsFeatures.js file--');
    let restAddFnResult = 0;
    for (let num of args) restAddFnResult += num;
    console.log('--Entering restAdd function of jsFeatures.js file--');
    return restAddFnResult;
};
console.log("--restAdd fn result--" + restAdd(1,2,3,4));


document.getElementById("z-rest-oper").innerText = restOperator;
const survivorInfoMaker2 = (name, email, ...communityBlood) => {
    const [community, blood] = communityBlood;
    return {name, email, community, blood};
};

const aObj = survivorInfoMaker2("Jasper", "jasperskycrew22@gmail.com", "skycrew", "redBlood");
document.getElementById("z-rest-oper-1").innerText = 
`Name: ${aObj.name}
   Email: ${aObj.email}
     Community: ${aObj.community}
        Blood: ${aObj.blood}`

// Array concatenation
const fruitArr1 = ["grape", "orange", "watermelon"];
const fruitArr2 = ["Apple", "Kewi", "strwberry"];
console.log(`-- Array concatenation -- ${[...fruitArr1, ...fruitArr2]}`);


// Object Literals
const objLiteralsHead = `Object Literals
--------------------`;
function es6ObjLiteFn(tech1, tech2, tech3) {
    return {tech1, tech2, tech3};
}
console.log("--Object Literals--", es6ObjLiteFn('node', 'express', 'mongoDB'));
document.querySelector("#z-obj-literals").innerText = objLiteralsHead;
document.querySelector("#z-obj-literals-1").innerText = `--------------------------------------------------------------
{tech1: "node", tech2: "express", tech3: "mongoDB"}
--------------------------------------------------------------
tech1: ${es6ObjLiteFn('node', 'express', 'mongoDB').tech1}
tech2: ${es6ObjLiteFn('node', 'express', 'mongoDB').tech2}
tech3: ${es6ObjLiteFn('node', 'express', 'mongoDB').tech3}`;


// reduce() Methos
// Reduces an Array into a single variable

const reduceMethodHead= `
Javascript Reduce()
Reduces an array into a single variable
---------------------------------------------------
`;
const randomNums = [1,2,3,4];
const reduceResult = randomNums.reduce((acc, val) => acc+val, 100);
document.getElementById("z-js-reduce").innerText = reduceMethodHead;
document.getElementById("z-js-reduce-1").innerText = `Summing up [1,2,3,4] and adding +100 = ${reduceResult}`;


// Default parameters
// Setting default value to a variable
const getBunkerInformation = (name="Default Bunker", desc= "Helps to protect Humankind from severe natural disasters") => {
    return {name, desc};
};

console.log('-- ES6 Default parameters--', getBunkerInformation('Woncrew Bunker'));

// Includes
const clansInfo = ["skycrew", "woncrew", "mountainMan", "heilncrew"];
console.log("--Javascript inclued method--", clansInfo.includes("skycrew"));


// export & import
const jsExportImport = `
JS export & import
-------------------------
`;
document.querySelector("#z-export-import").innerText = jsExportImport;
document.querySelector("#z-export-import-1").innerText = `importing the ageCalculator, survivorInfMaker functions from jsFeatures2.js
ageCalculator(1993) = ${ageCalculator(1993)}
survivorInfMaker()
    --name: ${survivorInfMaker("Jasper", "Arkadia", "kjrn wrkjnwkrj wrkjgkrw").name} 
    --community: ${survivorInfMaker("Jasper", "Arkadia", "kjrn wrkjnwkrj wrkjgkrw").community}
`;

// callback functions -> Passing functions as arguments to another function
// Promises
// Async Await
const processUerInput = (personInfObj, callback) => {
    setTimeout(() => {
        callback(`name: ${personInfObj.name}  email: ${personInfObj.email}`);
    }, 2000);
};
const logUserInput = (info) => {
    console.log('--Logged user input-->', info);
};

processUerInput({name: "Maya", email: "Mayauniverse@gmail.com"}, logUserInput);




