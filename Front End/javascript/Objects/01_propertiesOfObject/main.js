// Program to list the properties of a JavaScript object.

var student={
    name:"Juha Kangas",
    class:"VI",
    rollno:12
}

for(var i=0;i<Object.getOwnPropertyNames(student).length;i++){
    console.log(Object.getOwnPropertyNames(student)[i]);
}

var propertys=Object.getOwnPropertyNames(student);

console.log(propertys.join());

