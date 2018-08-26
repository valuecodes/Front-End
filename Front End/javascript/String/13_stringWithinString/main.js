// Function to insert a string within a string at a particular position

var stringWithinString=(string,add,pos)=>{
    
    if(pos==undefined){
        pos=0;
    };
    
    string=string.slice(0,pos)+add+string.slice(pos);
    return string;
}

console.log(stringWithinString("Iron Man is a 2008 American superhero film based on the Marvel Comics character of the same name, produced by Marvel Studios and distributed by Paramount Pictures.","Venom",));