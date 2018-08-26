// Function that concatenates a given string n times

var concatenateN=(string,times)=>{
    if(times=="undefined"){
        return string;
    }

    str=string;
    
    string=string.split("");
    for(var i=0;i<times-1;i++){
        for(var j=0;j<str.length;j++){
            string.push(str[j]);
        }
    }
    return string.join("");
}

console.log(concatenateN("Ha!",5));

// w3rsource solution

repeat = function repeat(str, count) {
    if(typeof(count) == "undefined") {
    count =1;
    }
    return count < 1 ? '' : new Array(count + 1).join(str);
}
console.log(repeat('Ha!'));
console.log(repeat('Ha!',2));
console.log(repeat('Ha!',3));