// Returns a passed string to alphabetical order

function alphabeticalOrder(word){
    var arr=word.split('');
    var temp;
    for(var i=0;i<word.length;i++){
        for(var j=0;j<word.length;j++){
            if(arr[j]>arr[j+1]){
                temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    arr=arr.join('');
    return arr;
}

var str= 'webmaster';

console.log(alphabeticalOrder(str));


// Alternative solution from W3resource

function alphabet_order(str){
    return str.split('').sort().join('');
}

console.log(alphabet_order("webmaster"));