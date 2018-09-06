const personalName = "mikelPErsonal one";
console.log(`==personal name==${personalName}`);

const book = {
    name: "life lessons",
    author: "brad mecuclum",
    year: '1990',
    getBookDetails: function() {
        return "book information"+this.name+","+this.author+","+this.year;
    }
};

const getBookInfo = book.getBookDetails();
console.log(getBookInfo);

const topic = (name, details) => {
    return `topic details--${name},${details}`;
}

console.log(topic("javascript","web development handler language"));


// classes==classes==es6 classes
class person {
    constructor(name,age,address){
        this.name=name;
        this.age=age;
        this.address=address;
    }
};

const personone=new person("mikel",23,"austin texas");
console.log(personone);

// topic class
class Topic {
    constructor(name,details) {
        this.name=name;
        this.details=details;
    }
}

const topicone=new Topic("mainTopic","Information about the wild life");
console.log(topicone);

// child class extends parent class...
class PersonLife extends Topic {
    constructor(name,details,verdict) {
        super(name,details);
        this.verdict=verdict;
    }
}

const perLife = new PersonLife("chaitanya","close to nature","live the life without mnuch worries");
console.log(perLife);

// higher order functions / methods
const food=[
    {
        name:"califlower",
        type:"vegitable"
    },
    {
        name:"chicken",
        type:"meat"
    },
    {
        name: "fish",
        type:"meat"
    },
    {
        name:"tamato",
        type:"vegetable"
    },
    {
        name:"apple",
        type:"fruit"
    },
    {
        name:"banana",
        type:"fruit"
    }
];

const getMeatItems = (fooditems) => {
    let items=[];
    fooditems.map((item) => {
    if(item.type === "meat"){
        items.push(item);
    }
    return items;
});
return items;
};

console.log(getMeatItems(food));

const twosecHandler = () => {
    (()=>{
        return Math.floor(Math.random*100);
    },2000);
};

console.log(`==two sec handler==${twosecHandler()}`);

// callbackfunctions // higher order functions
const additionHandler = (a,b,callbackFun)=>{
    let c= a+b;
    return callbackFun(c);
};
additionHandler(4,4,(res) => {
    console.log(`==res data==${res}`);
});

// ES6 promises..alternative to regula callbacj functions to avoid repetition of exeuting the same method more than once

var personPromise=new Promise((resolve, reject) => {
    const multipleHandler = (a,b) => {
        return a*b;
    }
    resolve(multipleHandler(3,3));
});

personPromise.then((resdata) => {
    console.log(resdata);
}).catch((error) => {
    console.log("error in res data");
});