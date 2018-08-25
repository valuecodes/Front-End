// Get first element of array or first n elements

function getFirst(array,n){
    console.log(n);
    // Check if array is array
    if(Array.isArray(array)==false){
        return "Not array";
    }
    if(n==null){
        return array[0];
    }else if(n<0){                  //check if n is negative 
        return array.slice(0,0);
    }
    else{
        return array.slice(0,n);
    }
}

var array=[7, 9, 0, -2];

console.log(getFirst(array,2));