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