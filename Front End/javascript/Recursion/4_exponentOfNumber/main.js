// Exponent of number

function exponentOfNumber(base,exponent){
    if(exponent===1){
        return base;
    }
    return base*=exponentOfNumber(base,exponent-1);
}

var base=8;
var exponent=4;

console.log(exponentOfNumber(base,exponent));