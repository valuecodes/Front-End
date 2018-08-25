// Finds last element of array or last element after n

function getLast(array,n){
    if(Array.isArray(array)==null){
        return "Not an array";
    }else if(n>array.length){
        return array;
    }
    else if(n<0 || n==null){
        
        return array.slice(0,0);
    }
    else{
        return array.slice(array.length-n,array.length); 
    }
}

var array=[7, 9, 0, -2];

console.log(getLast(array,-3));