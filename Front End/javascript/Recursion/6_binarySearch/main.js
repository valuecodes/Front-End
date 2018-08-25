// Binary search Not working yet

function binarySearch(numbers,left,right,key){
    var mid=left+(right-left)/2;
    if(left>right){
        return false;
    }
    if(key==numbers[mid]){
        return true;
    }else if(key<mid){
        return binarySearch(numbers,left,mid-1,key);
    }else{
        return binarySearch(numbers,mid+1,right,key);
    }
}

var numbers=[0,1,2,3,4,5,6,7];
var key=5;
console.log(binarySearch(numbers,0,numbers.length,key));