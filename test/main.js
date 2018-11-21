console.log('==test start==');
const personinfo = {
    name:"mikel",
    lastName:"john",
    phnumber:"8989898989",
    city:"Austn",
    state:"texas",
    postalCode:"78327"
};
console.log('--person info--', personinfo);

// callback functionsco
const calage = (dob, cb) => {
    let urAge = 2018-dob;
    cb(urAge);
};

calage(1992, (resdata) => {
    console.log('--ur age--',resdata);
});

// promises
const datahandler = (data) => {
    let datapromise = new Promise((resolve,reject) => {
        resolve(data);
    });
    return datapromise;
}

datahandler("he is doing great").then((datainfo) => {
    console.log(datainfo);
}).catch((errorinfo)=>{
    console.log(errorinfo);
});

console.log('=================');

const yearsLeftForRetirement = (age) => {
    return new Promise((resolve,reject) => {
        resolve(60-age);
    });
};

yearsLeftForRetirement(25).then((datares) => {
    console.log(datares);
}).catch((dataerr) => {
    console.log(dataerr);
});

// call apply bind
let rabbitinfo = {
    namedata:"greatRabiit"
};

const rabbithandler = () => {
    console.log(this.namedata);
};

let arrdata = ["secondarabbbit","thirdrabbit","Fourthrabbit"];

const passparamfun = rabbithandler.bind(rabbitinfo);
passparamfun();
