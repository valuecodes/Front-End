// Convert a string in abbreviated form.

var abbreviatedForm=(string)=>{
    string=string.split(" ")
    string[1]=string[1].substr(0,1);
    string=string.join(" ");
    return string;
}

console.log("Robin Singh\n"+abbreviatedForm("Robin Singh"));