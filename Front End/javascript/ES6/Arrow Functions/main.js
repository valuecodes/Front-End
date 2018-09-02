"use strict"

function Prefixer(prefix){
    this.prefix=prefix;

}

Prefixer.prototype.prefixArray=function(arr){
    return arr.map((x)=>{
        console.log(this.prefix+x);
    });
}

let pre=new Prefixer('Hello space');
pre.prefixArray(['Brad','Jeff']);

let add=(a,b)=>{
    let sum = a+b;
    console.log(sum);
    return false;
}

add(2,2);