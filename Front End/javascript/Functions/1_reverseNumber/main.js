// Reverse a number

var input = prompt("Please enter number you would like to reverse", "");

function reverseNumber(num){
    var num=num.toString();
    var reversed="";
    for(var i=num.length-1;i>=0;i--){
        reversed+=num[i];
    }
    
    return parseInt(reversed);
}

console.log(reverseNumber(input));