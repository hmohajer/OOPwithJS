function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}

Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}` ;
};
Book.prototype.getAge = function(){
    const years = new Date().getFullYear() - this.year;
    return years;
};
Book.prototype.revise = function(newYear){
    this.year = newYear;
    this.revised = true;
};
const book1 = new Book("book one", "john doe", "2013");
const book2 = new Book("book two", "jane doe", "1995");
console.log(book1.getSummary());
console.log(book2.getAge());
book2.revise(2015);
console.log(book2);
