// Function to convert a string into camel case.

var toCamelCase=(string)=>{
    // Original string printed
    console.log(string);

    string=string.split(" ");
    for(var i=0;i<string.length;i++){
        string[i]=string[i].charAt(0).toUpperCase()+string[i].slice(1);
    }
    return string.join("");
}

console.log(toCamelCase("only when it is dark enough can you see the stars"));