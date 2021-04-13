//object of protos
const bookProtos = {
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge: function () {
        const years = new Date().getFullYear() - this.year;
        return years;
    }
}
//create object
const book1 = Object.create(bookProtos);
book1.title = "book one";
book1.author = "john doe";
book1.year = "2016";

// const book1 = Object.create(bookProtos, {
//     title: { value: "book one" },
//     author: { value: "john doe" },
//     year: { value: "2015" }
// });



console.log(book1);