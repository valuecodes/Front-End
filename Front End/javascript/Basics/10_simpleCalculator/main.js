// Program to calculate multiplication and division of two numbers

function multiplyBy(){
    num1=document.getElementById("firstNumber").value;
    num2=document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML=num1*num2;
}

function divideBy(){
    num1=document.getElementById("firstNumber").value;
    num2=document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML=num1/num2;
}

function sumBy(){
    num1=document.getElementById("firstNumber").value;
    num2=document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML=parseInt(num1)+parseInt(num2);
}

