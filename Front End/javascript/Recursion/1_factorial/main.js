// Get factorial of number

function factorial(n){
    if(n>1){
        n*=factorial(n-1);
    }
    return n
}

console.log(factorial(8));