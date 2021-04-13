function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function(){
        return `${this.title} was written by ${this.author} in ${this.year}` ;
    };
}

const book1 = new Book("book one", "john doe", "2013");
const book2 = new Book("book two", "jane doe", "2017");
console.log(book1.getSummary());