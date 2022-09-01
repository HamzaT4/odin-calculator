add =  (num1,num2) => num1+num2;
subtract = (num1,num2) => num1-num2;
multiply = (num1,num2) => num1*num2;
divide = (num1,num2) => num1/num2;
let operate = function(op,num1,num2){
    switch (op) {
        case '+':
           return add(num1,num2);
            break;
        case '-':
            return subtract(num1,num2);
            break;
        case '*':
            return multiply(num1,num2);
            break;
        case '/':
            return divide(num1,num2);
            break;
    
        default:alert("invalid operator");
            break;
    }
    

}

console.log(operate('s',4,2));