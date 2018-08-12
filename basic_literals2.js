// basic_literals2
class Book{
    constructor(title,author,year){
        this.title=title;
        this.author=author;
        this.year=year;
    };
    getBookDetails() {
        console.log(
            `Book details-->${this.title}_${this.author}_${this.year}`
        );
    }
}

// instantiate object
const book1=new Book('the heart of spirit', 'miel fddf',1992);
console.log(`book info-->${Book.getBookDetails}`); 