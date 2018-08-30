"use strict"

// Testing
// var a = 'test1';
// let b ='test2';
// console.log(a);
// console.log(b);

// Testing var

function testVar(){
    var a=30;
    if(true){
        var a=50;
        console.log(a);
    }
    console.log(a);
}
testVar();

// Testing let

function testLet(){
    let a=30;
    if(true){
        let a =50;
        console.log(a);
    }
    console.log(a);
}
testLet();

// var

// for(var i=0;i<10;i++){
//     console.log(i);
// }

// console.log(i);

// let

// for(let i=0;i<10;i++){
//     console.log(i);
// }

// console.log(i);

const colors=[];
colors.push('red');
colors.push('blue');

// colors='Green'; //Error

console.log(colors);

