// Checks if number is prime or not

function checkPrime(num){
    if(num<=1){
        return false;
    }else if(num==2){
        return true;
    }else{
        for(var i=2;i<num;i++){
            if(num%i==0){
                return false;
            }
        }
        return true;
    }
}

console.log(checkPrime(37));