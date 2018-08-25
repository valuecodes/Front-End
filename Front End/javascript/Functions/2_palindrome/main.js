// Checks if string is palindrome

function checkPalindrome(word){
    // Converts word to lowercae
    word=word.toLowerCase();
    for(var i=0;i<word.length;i++){
        // Checks if word first+i and last-1+i are the same 
        if(word[i] !== word[word.length-1-i]){
            return false;
        }
    }
    return true;
}

var str="RACecar";

console.log(checkPalindrome(str));
