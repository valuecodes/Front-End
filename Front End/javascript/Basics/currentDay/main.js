// Write current day and time

var today= new Date();
var day=today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
console.log("Today is : "+daylist[day]);
var hours=today.getHours();
var minutes=today.getMinutes();
var seconds=today.getSeconds();
// var millisecs=today.getMilliseconds();
console.log(" Time is : "+hours+":"+minutes+":"+seconds);
var days=today.getDate();
var month=today.getMonth();
var year=today.getFullYear();
console.log(""+days+"."+month+"."+year);