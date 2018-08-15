// basic_literals2
class Book{
    constructor(title,author,year){
        this.title=title;
        this.author=author;
        this.year=year;
    };
    getBookDetails() {
        console.log(
            `Book details
             title- ${this.title}
             author- ${this.author}
             year- ${this.year}   
            `
        );
        return "Method in class got triggered..";
    }
}

// instantiate object
const book1=new Book('the heart of spirit', 'miel fddf',1992);
console.log(`Method in calss == ${book1.getBookDetails()}`); 

// Extends __ import features from parent class
class laptop {
    constructor(name, processor, memory ) {
        this.name=name;
        this.processor=processor;
        this.memory=memory;
    }
    getLaptopDetails() {
        console.log(
            `Laptop details 
            name-${this.name}
            processor-${this.processor}
            memory-${this.memory}
            `
        );
        return 'laptop method got triggered';
    }
}

class GamingPc extends laptop {
    constructor(name,processor,memory,graphicCard){
        super(name,processor,memory);
        this.graphicCard=graphicCard;
    }
    getGmaingPcDetails() {
        console.log(
            `Gmaing pc details
            name-${this.name}
            processor-${this.processor}
            memory-${this.memory}
            graphicCard-${this.graphicCard}
            `
        );
        return 'Graphic Method got triggered';
    }
}

// instantiate object
const laptop1=new GamingPc('Dell', 'intel-7', '512SSD', "Nvidia");
console.log(laptop1.getGmaingPcDetails());