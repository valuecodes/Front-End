// Finds the greatest common divisor of two numbers 

function gdc(num1,num2){
    // Common divisor maximum is halve of the smaller number
    var max=num1>num2?Math.ceil(num2/2):Math.ceil(num1/2);
    // Greatest common divisor
    var gdc=0;
    for(var i=2;i<max;i++){
        // Checks if both of the numbers have common divisor
        if(num1%i==0 && num2%i==0){
            gdc=i;
        }
    }
    return gdc;
}

console.log(gdc(21,42));

// w3resource recursive solution
var gcd = function(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
};
console.log(gcd(2154, 458));