// Function to capitalize the first letter of each word in a string

var capitalizeEach=(string)=>{
    string=string.split(" ");
    for(var i=0;i<string.length;i++){
        string[i]=string[i].charAt(0).toUpperCase()+string[i].slice(1);
    }
    return string.join(" ");
}

console.log(capitalizeEach("js string exercises"));