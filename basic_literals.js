// TM
// basic_literals
let name="PersonOne";
console.log(name);

const name2="Person2";
console.log(name2);

const book= {
    title: "Book one",
    author: 'John Doe',
    year: '2013',
    getSummary: function()  {
        return `${this.title} is written by ${this.author} in the year ${this.year}`
    }
};

console.log(`Book summary ---${book.getSummary()}`);

//  CONSTRUCTORIAL PATTERN 
function bookOne(title, author, year) {
    this.title=title;
    this.author=author;
    this.year=year;
};

// .....instantiate an object
const book1=new bookOne('Raining in middle','charles strut',1995);
const book2=new bookOne('Show done','kristen',2008);
console.log(`book titles -- ${book1.title}, ${book2.title}`);
console.log(`Author names-- ${book1.author}, ${book2.author}`);

// MODULAR PATTERN
const human = (name,age,address) => {
 return {
     personName: name,
     personAge: age,
     personAddress: address
 }
};
const human1=human("mikel",24,"houston tx");
const human2=human('john',30,"Austin tx");
console.log('human names--',human1.personName,human2.personName);

// food
const foodVendor = {
    name: "tacos",
    address: "slc ut",
    getFoof: function() {
        return `food details--> ${this.name}...${this.address}`;
    }
}

console.log('--info about the stuff--',foodVendor.getFoof());
console.log('........', foodVendor.name);

// JS iteration
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

const getMeatItems = () => {
    const meatItems = [];
     food.map((item) => {
        if(item.type === "meat"){
            meatItems.push(item);
        }
    });
    return meatItems;
};
const meatinformation = getMeatItems();
console.log(`meat items -- ${meatinformation}`);