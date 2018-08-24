function checkLarger(num1,num2){
    if(num1>=num2){
        return "Num "+num1+" is larger";
    }else{
        return "Num "+num2+" is larger";
    }
}

var number1,number2;

number1 = window.prompt("Input the first number");
number2 = window.prompt("Input the second number");

console.log(checkLarger(number1,number2));