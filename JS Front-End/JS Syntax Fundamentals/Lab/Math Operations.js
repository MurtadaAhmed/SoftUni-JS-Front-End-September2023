function mathOperation(number1, number2, operator) {
    switch (operator) {
        case "+":
            console.log(number1 + number2);
            break;
        case "-":
            console.log(number1 - number2);
            break;
        case "*":
            console.log(number1 * number2);
            break;
        case "/":
            console.log(number1 / number2);
            break;
        case "%":
            console.log(number1 % number2);
            break;
        case "**":
            console.log(number1 ** number2);
            break;
    }
}

mathOperation(5, 6, '+')
mathOperation(3, 5.5, '*')