function OddAndEven(number) {
    let string = number.toString();
    let sumOdd = 0;
    let sumEven = 0;
    for (let i of string) {
        digit = Number(i)
        if (digit % 2 === 0) {
            sumEven += digit
        } else {
            sumOdd += digit
        }
    }

    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`)
}

OddAndEven(1000435)
OddAndEven(3495892137259234)
