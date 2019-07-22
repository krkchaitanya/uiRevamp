import fetch from "node-fetch";
import axios from "axios";

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


