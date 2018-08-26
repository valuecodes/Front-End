// Function that truncates a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("…")

var truncate=(string,len,ellipsis)=>{
    // Origina string
    console.log(string);
    if(ellipsis==undefined){
        ellipsis="...";
    }
    string=string.slice(0,len)+ellipsis;
    return string;
}


console.log(truncate("We are doing JS string exercises.",15,"..."));