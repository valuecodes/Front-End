// Rotates string in right direction letter by letter

function rotateRight(word){
    
    console.log(word)
    // Splits word to array 
    word=word.split('');
    
    for(var i=0;i<word.length;i++){
        var temp=word.pop();
        word.unshift(temp);

        // Prints word in string format and puts it back to array 
        word=word.join('');
        console.log(word);
        word=word.split('');
    }
}

rotateRight("Helsinki");


// w3Resource animated version

function animate_string(id) 
{
    var element = document.getElementById(id);
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;

    setInterval(function(){
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        textNode.data = text;
    }, 100);
}