const book1={
    title: 'Book One',
    author: 'John Doe',
    year: '2013',
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

const book2={
    title: 'Book Two',
    author: 'Jane Doe',
    year: '2012',
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

// console.log(book1.getSummary());

// Values
console.log(Object.values(book2));
// Keys
console.log(Object.keys(book2));