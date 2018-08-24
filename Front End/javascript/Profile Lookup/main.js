//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){

    // Iterate trough list
    for(var i=0;i<contacts.length;i++){
        // Check if name was found
        if(contacts[i].firstName==name){
            // Check if property found
            if(contacts[i][prop]!==undefined){
                return contacts[i][prop];
            }
            else{
                return "No such property";
            }
        }
    }
    return "No such contact";
}

// Change these values to test your function
console.log(lookUpProfile("Akira", "apa"));