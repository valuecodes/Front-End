// Function to check whether a string is blank or not

var isStringBlank=(input)=>{
    if(typeof(input)==="string" && input!==""){
        return true;
    }else{
        return false;
    }
};

console.log(isStringBlank("Test"));
console.log(isStringBlank(""));
console.log(isStringBlank(5));