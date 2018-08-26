// Function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case. 

var reverseCase=(string)=>{
    
    console.log(string);

    len=string.length;
    string=string.split("");
    for(var i=0;i<len;i++){
        if(string[i]==string[i].toUpperCase()){
            string[i]=string[i].toLowerCase();
        }else{
            string[i]=string[i].toUpperCase();
        }
    }
    return string.join("");
}

console.log(reverseCase("aAbBcCdD"));