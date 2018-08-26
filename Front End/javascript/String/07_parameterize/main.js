// Function to parameterize a string

var parameterize=(string)=>{
    // Puts string to lovercase, replaces spaces with lines and dots with empty 
    return string=string.toLowerCase().split(" ").join("-").split(".").join("");
}

console.log(parameterize("Robin Singh from USA."));