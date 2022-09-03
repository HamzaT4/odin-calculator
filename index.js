add = (num1, num2) => num1 + num2;
subtract = (num1, num2) => num1 - num2;
multiply = (num1, num2) => num1 * num2;
divide = (num1, num2) => num1 / num2;
let firstInput;
let secondInput;
let operatorInput;
let opr = ['+', '-', '*', '/'];
let calculated = false;
let firstNumber= true;
let btns = document.querySelectorAll(".btn");
let screen = document.querySelector(".main-screen");
let upperScreen = document.querySelector(".upper")
let operate = function (op, num1, num2) {
    switch (op) {
        case '+': return Math.round(add(num1, num2) * 10000) / 10000;
        case '-': return Math.round(subtract(num1, num2) * 10000) / 10000;
        case '*':return Math.round(multiply(num1, num2) * 10000) / 10000;
        case '/':
            if(num2==0){
                clear();
                return "Can't Divide by 0"
            } 
            return Math.round(divide(num1, num2) * 10000) / 10000;

        default: calculated=true;
            return("invalid operator");
    }
}

btns.forEach(element => { element.addEventListener("click", getInput) });

function getInput(e){ updateDisplay(e.target.classList[1])}


function updateDisplay(e) {
    if(screen.textContent=='NaN'||screen.textContent=="Can't Divide by 0") calculated=true;
    if(calculated){
        screen.textContent = '';
        calculated=false;}
    if (e == 'clear')clear();
    if (e == 'delete') screen.textContent = screen.textContent.slice(0, -1);
    if (opr.some(op => e.includes(op))&& firstNumber) {
        firstNumber =false;
        firstInput= screen.textContent;
        operatorInput=e;
        upperScreen.textContent =screen.textContent + e;
        screen.textContent= ''; 
    }
    else if (opr.some(op => e.includes(op))&& !firstNumber){
        if(screen.textContent==''){
            clear();
            screen.textContent='ERROR';
            calculated=true;
        }
        else{
            secondInput= screen.textContent;
            firstInput=operate(operatorInput,+firstInput,+secondInput);
            operatorInput=e;
            screen.textContent='';
            upperScreen.textContent= firstInput+e;
        }
    }
    if (!isNaN(e)) screen.textContent += e;
    if (e == '.'  && !screen.textContent.includes('.')) {
        screen.textContent += e;
    }
    if(e == '='  ){
        secondInput= screen.textContent;
        screen.textContent=operate(operatorInput,+firstInput,+secondInput);
        upperScreen.textContent='';
        firstNumber=true;
    }

}   
function clear(){
    screen.textContent = '';
    upperScreen.textContent='';
    firstInput='';
    secondInput='';
    operatorInput='';
    firstNumber=true;

}
document.addEventListener("keydown",(e)=> updateDisplay(e.key));

