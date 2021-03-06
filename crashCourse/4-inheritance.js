function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}

Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}` ;
};

function Magazine(title, author, year, month){
    Book.call(this, title, author, year);
    this.month = month;
}
//inherit prototype
Magazine.prototype = Object.create(Book.prototype);

//instantiate magazine
const mag1 = new Magazine("mag one", "john doe", "2018", "jan");
Magazine.prototype.constructor = Magazine;
console.log(mag1);


console.log(mag1.getSummary());