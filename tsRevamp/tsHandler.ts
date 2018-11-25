// Requirement ==>> npm i typescript --g
// Start ==>> run command tsc example.ts -w


// Typescript------>>>>>> is superset of JavaScript
// Transcompile the Ts to regular browser understandable JavaScript
// Used in larger applictions


// Offers::
// Type check
// class based objects
// Modularity
// Es6 Features
// Syntax is closer to JAVA and other high level languages

// String Number Boolean Array Any Void Null Tuple Enum Generics

// USE ==>  Object oriented programming in JS / No Prototypes / Encapsulation - Functionality and resources all are at 1 place

//  TS Variables
let myName: string;
let myNumber: number;
let myBool:boolean;
let myvar:any;
let cars:string[];

myName="greatName";
myNumber=982742983;
myBool=false;
myvar="wergjlw";
cars=['Honda','toyota','Ford','subaru'];

let stringArr:Array<string>;
let numberArr:Array<number>;

stringArr=['one','two','three'];
numberArr=[2,3,43434];


console.log(stringArr);
console.log(numberArr);
console.log(myName.slice(0,3));


// TS Functions
let getSum = function(a:number,b:number):number {
    return a+b;
}

let mySum = function(m:any,n:any):number {
    if(typeof(m) == 'string') {
        m = parseInt(m);
    }
    if(typeof(n) == 'string') {
        n = parseInt(n);
    }
    return m+n;
}

console.log(mySum('4','5'));

let getUserInformation = function(data:{
    name:string,
    phnumber:number,
    address:string,
    isArmyOfficer:boolean
}):string {
    return `user details were as follows -NAME: ${data.name}, PHNO: ${data.phnumber}, ADDRESS: ${data.address}, ISARMYofficer: ${data.isArmyOfficer}`;
};

const userInfoObject = {
    name: "great User",
    phnumber: 6438768437,
    address: 'Austin tx',
    isArmyOfficer: false
};

console.log(getUserInformation(userInfoObject));

// Interfaces
interface Person{
    name:string,
    email:string,
    phnumber:number,
    address:string
};

let getPersonData = (person:Person) => {
    return person;
};

const personDataResponse = getPersonData({
    name:'great person',
    email: 'great email',
    phnumber: 32234234324,
    address: 'Houston tx'
});

console.log('***********');
console.log(personDataResponse);
console.log('***********');

// classes
// A class can have properties and methods.
class User {
    name:string;
    email:string;
    age:number;
    constructor(name:string, email:string,age:number) {
        this.name=name;
        this.email=email;
        this.age=age;

        console.log('User created-'+this.name);
    }

    register() {
        return `${this.name} is registered`;
    }
    payInvoice() {
        return `${this.name} paid invoice`;
    }
}

let johnData = new User('John','itsmejohn@email.com',28);
console.log(johnData.register());

class Member extends User {
    id: number;
    constructor(name:string, email:string,age:number,id:number) {
        super(name,email,age);
        this.id=id;
    }
    payInvoice() {
        return super.payInvoice();
    }
}


let mikeData = new Member('Mike smith','itsmemike@gmila.com',32,3434);
console.log(mikeData.payInvoice());
