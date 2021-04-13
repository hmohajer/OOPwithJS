class Book {
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}` ;
    }

    getAge(){
        const years = new Date().getFullYear() - this.year;
        return years;
    }

    revise(newYear){
        this.year = newYear;
        this.revised = true;
    }
}

//instantiate
const book1 = new Book("book one", "john doe", "2014");
console.log(book1);
book1.revise("1985")
console.log(book1);
console.log(book1.getAge());
