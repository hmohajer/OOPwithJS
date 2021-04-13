const book1 = {
    title: "book one",
    author: "John doe",
    year: "2013",
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}` 
    }
};
console.log(book1.getSummary());