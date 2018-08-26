// Program to check two given numbers and return true if one of the number is 50 or if their sum is 50

var check50=(num1,num2)=>{return num1==50 || num2==50 ? true : num1+num2===50 ? true : false};

console.log(check50(25,50));//true
console.log(check50(25,25));//false
console.log(check50(25,55));//true


