// First letter of each word to upper case

function eachWordToUpperCase(string){
    word=string.split(' ');
    var newArray=[];

    console.log(word);
    for(var i=0;i < word.length;i++){
        // Creates new array                        
        newArray[i]=word[i].charAt(0).toUpperCase()+word[i].substr(1);        
    }
    return newArray.join(' ')
}

var str="the quick brown fox";

console.log(eachWordToUpperCase(str));