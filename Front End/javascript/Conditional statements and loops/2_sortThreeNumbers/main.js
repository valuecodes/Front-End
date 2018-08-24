
// Sorting 3 numbers using just if statements

console.log("");
function sortThreeNumbers(n1,n2,n3){
    var temp=0;
    if(n1>n2){
        if(n1>n3){
            if(n2<n3){
                return n1+", "+n3+", "+n2;
            }else{
                return n1+", "+n2+", "+n3;
            }
        }else{
            return n3+", "+n1+", "+n2;
        }
    }else if(n2>n3){
        if(n1>n3){
            return n2+", "+n1+", "+n3;
        }else{
            return n2+", "+n3+", "+n1;
        }
    }else{
        return n3+", "+n2+", "+n1;
    }
}


console.log(sortThreeNumbers(-3,23,98));