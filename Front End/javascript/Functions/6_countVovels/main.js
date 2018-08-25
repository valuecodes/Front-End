// Counts the vovels of tehe passed string

var vovels=["a","e","i","o","u"];

var vovelCount=0;

function countVovels(string){
    for(var i=0; i<string.length;i++){
        if(vovels.includes(string[i])){
            vovelCount++;
        }
        // console.log(string[i]);
    }
    return vovelCount;
}

var string='The quick brown fox';

console.log("Vovelcount for \""+string+"\" is "+countVovels(string));

