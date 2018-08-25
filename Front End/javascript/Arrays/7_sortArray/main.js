// Sort array (Bubble sort)

function sortArray(array){
    var sorted;
    var temp;
    for(var i=0;i<array.length;i++){
        for(var j=0;j<array.length;j++){
            if(array[j]>array[j+1]){
                temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
            }
            
        }
    }
    return array
}


var array1=[3, 8, 7, 6, 5, -4, 3, 2, 1 ];

console.log(sortArray(array1));
