var person={
    name:"Brad",
    age:35,
    email : function(){
        return this.name+"@gmail.com";
    },
    address:{
        street:"5 main st",
        city: "Boston"
    },
    children: ["Brianna","Nicholas"]
}

// person=JSON.stringify(person);
// console.log(person);
// person=JSON.parse(person);

var people=[
    {
        name:"Brad",
        age:35
    },
    {
        name:"John",
        age:40
    },
    {
        name:"Sara",
        age:25
    }
]
people[1].age++;


console.log(people[1].age);