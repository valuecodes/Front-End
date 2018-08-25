// Get sum of array integers

function sumOfArray(array){
    if(array.length===1){
        return arr[0];
    }else{
        return arr.pop()+sumOfArray(array);
    }
}

arr=[1,2,3,4,5,6];


console.log(sumOfArray(arr));