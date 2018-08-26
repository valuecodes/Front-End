// Get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.

// function differenceBetween(number){
//     if(number>13){
//         return (number-13)*2;
//     }else{
//         return 13-number;
//     }
// }

// console.log(differenceBetween(16));


// Shorter solution

var differenceBetween=(number)=>{return number>13 ? (number-13)*2 : 13-number};

console.log(differenceBetween(15));
