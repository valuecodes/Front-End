// Program to display the reading status (i.e. display book name, author name and reading status) of the following books.

var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];

    for(var i=0;i<library.length;i++){
        var book=library[i].author+" book "+library[i].title;
        if(library[i].readingStatus){
            console.log(book+" is already read.");
        }else{
            console.log(book+" is not read yeat.");
        }
    }