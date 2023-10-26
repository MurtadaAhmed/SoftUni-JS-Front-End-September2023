function LargestNumber(number1, number2, number3) {
    let largestNum;
    if (number1 > number2 && number1 > number3) {
        largestNum = number1
        }
    else if (number2 > number1 && number2 > number3){
        largestNum = number2
        }
    else if (number3 > number1 && number3 > number2){
        largestNum = number3
        }
    console.log(`The largest number is ${largestNum}.`)
}

LargestNumber(5, -3, 16)
LargestNumber(-3, -5, -22.5)