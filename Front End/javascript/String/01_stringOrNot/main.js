// Check if Input is string or not

var checkString=(input)=>{return typeof(input)==="string"? true:false};

console.log(checkString("test"));
console.log(checkString(1));
var i=[2,3,4];
console.log(checkString(i));