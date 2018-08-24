// Iterates 0 to 20 and checks if number is even or odd

function evenOrOdd(num){
    for(var i=0;i<=num;i++){
        if(i%2==0){
            console.log(i+" is even");
        }else{
            console.log(i+" is odd");
        }
    }
}

evenOrOdd(20);