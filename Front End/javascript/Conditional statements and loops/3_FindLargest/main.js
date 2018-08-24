// Finds largest of the 5 numbers

var numbers=[19,54,24,43,39];

function findLargest(array){

    var largest=-9999;

    for(var i = 0;i<array.length;i++){
        if(array[i]>=largest){
            largest=array[i];
        }
    }
    return largest;
}
console.log(numbers);
console.log("Largest number is "+findLargest(numbers));
