// Program to delete the rollno property from the following object.

var student={
    name:"David Rayy",
    class:"VI",
    rollno:12
};


console.log(Object.getOwnPropertyNames(student));

delete student.class;

console.log(Object.getOwnPropertyNames(student));
