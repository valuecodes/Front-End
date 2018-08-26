// Program makes random integer(1-10) and user tries to guess it

var guess=prompt("Guess a number","1-10");

function guessNumber(input){

    var random=Math.floor(Math.random()*10);
    console.log(random+"  "+input);
    return (random===input?true:false);
}

console.log(guessNumber(guess));

// For testing

// for(var i=0;i<10;i++){
//     console.log(guessNumber(i));
// }
