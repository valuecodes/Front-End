

let clicks=0;

function changeColor(){
    clicks++;
    console.log(clicks);
    let text=document.getElementById('paragraph');
    if(clicks%2==0){
        text.style.backgroundColor='yellow';
        text.style.top='20px';
    }else{
        text.style.backgroundColor='red';
    }
}