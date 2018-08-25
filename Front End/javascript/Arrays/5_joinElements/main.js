// Join All elements

function joinElements(array){
    var combined="";
    for(var i=0;i<array.length;i++){
        console.log(array[i]);
        combined+=array[i];
        // Ads , to between each array members exept the last one
        if(i!==array.length-1){
            combined+=",";
        }
    }

    return combined;
}

var myColor = ["Red", "Green", "White", "Black"];

console.log(joinElements(myColor));

// Shorter solution

console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));
