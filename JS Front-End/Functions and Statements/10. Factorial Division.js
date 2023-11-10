function factorialDivision(num1, num2) {
    let factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

    let firstFactorial = factorial(num1);
    let secondFactorial = factorial(num2);

    result = firstFactorial / secondFactorial

    console.log(result.toFixed(2));


}


factorialDivision(5, 2)
factorialDivision(6, 2)