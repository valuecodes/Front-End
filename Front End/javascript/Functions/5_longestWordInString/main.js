// Finds the longest word within a string

function longestWord(string){
    word=string.split(" ");
    var longest="";
    for(var i=0;i<word.length;i++){
        if(word[i].length>=longest.length){
            longest=word[i];
        }
        console.log(word[i]+" "+word[i].length);
    }

    return longest;
}

var str='Deadpool 2 is a 2018 American superhero film based on the Marvel Comics character Deadpool, distributed by 20th Century Fox. It is the eleventh installment in the X-Men film series, and a direct sequel to the 2016 film Deadpool. The film is directed by David Leitch from a script by Rhett Reese, Paul Wernick, and Ryan Reynolds, with Reynolds starring in the title role alongside Josh Brolin, Morena Baccarin, Julian Dennison, Zazie Beetz, T.J. Miller, Brianna Hildebrand, and Jack Kesy. In the film, Deadpool forms the team X-Force to protect a young mutant from the time-traveling soldier Cable.';

console.log("Longest word is \""+longestWord(str)+"\"");