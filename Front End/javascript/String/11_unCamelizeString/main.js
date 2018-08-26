// Function to uncamelize a string

var unCamelizeString=(string)=>{
    string=string.split(/(?=[A-Z])/);

    return string.join(" ");
}


console.log(unCamelizeString("OnlyWhenItIsDarkEnoughCanYouSeeTheStars"));