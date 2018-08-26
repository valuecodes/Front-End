// Convert string to array of words

var stringToWords=(string)=>{
    string=string.split(" ");
    return string;
};

console.log(stringToWords("Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services."))