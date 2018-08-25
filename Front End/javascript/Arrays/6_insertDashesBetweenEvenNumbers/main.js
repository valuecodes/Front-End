// Insert dashes between even numbers

function insertDashesEven(num){
    // Copy of num the have the dashes
    var numDash="";
    for(var i=0;i<num.length;i++){
        numDash+=num[i];
        // If current and the next number are even add dash 
        if(num[i]%2==0 && num[i+1]%2==0){
            numDash+="-";
        }
    }
    return numDash;
}

var num="025468";

console.log(insertDashesEven(num));


