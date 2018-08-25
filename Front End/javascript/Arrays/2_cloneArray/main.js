// Clone array

function cloneArray(array){
    var clone=[];
    for(var i=0;i<array.length;i++){
        clone.push(array[i]);
    }
    return clone;
}

var array=[12,34,23,55];

console.log(cloneArray(array));