let a = 5
let b = 6

if (a > b) {
    console.log("A")
} else {
    console.log("b")
}

console.log("-----------------------------------------")


function test(startMessage) {
    console.log(startMessage)
}

test("123")

console.log("-----------------------------------------")

function solve(name, grade) {
    console.log("The name is " + name + ", grade: " + grade)
}

solve("Peter", 3.555)

console.log("-----------------------------------------")

function solve(name, grade) {
    console.log(`The name is ${name}, grade: ${grade}`)
}

solve("Peter", 3.555)

console.log("-----------------------------------------")

let z = 12.1213333
console.log(z.toFixed(3))

// console.log("-----------------------------------------")

console.log("-----------------------------------------")

let aa = true;
let bb = false;
let cc = aa === bb;
let dd = aa == bb;

console.log(cc, dd)

console.log("-----------------------------------------")

let aaa = [1, 2, 3]
let bbb = ["test", "second test"]
let ccc = [1, "test", {}, 12, undefined]

console.log("-----------------------------------------")

// three scopes: block scope, function scope, global scope

var abc = [1, 2, 3]; // old one - doesnt have block scope, function scope
let def = [5, 6, 7]; // block scope , mutable
const gfh = 3564; //  block scope , immutable

console.log("-----------------------------------------")

// comparision:
//  ==  >> compare the value
// === >> compare the type and value

console.log("-----------------------------------------")

function solvee(number1, number2, operator) {

    let result = 0;

    switch (operator) {
        case "+":
            result = number1 + number2;
            break;

        case "-":
            result = number1 - number2;
            break;

        case "*":
            result = number1 * number2
            break;

        case "/":
            result = number1 / number2;
            break;
    }

    console.log(result);
};

solvee(3, 2, "+")

console.log("-----------------------------------------")

const isValid = true;
const isNotValid = false;

if (isValid || isNotValid) {
    console.log("OR statement")
};

if (isValid && true) {
    console.log("AND statement")
}

console.log("-----------------------------------------")

// type of
const str = "hello";
const numm = 35
console.log(typeof str)
console.log(typeof numm)

console.log("-----------------------------------------")

// loops:

for (let i = 3; i <= 5; i++) {
    console.log(i)
}

for (let i = 10; i > 1; i--) {
    console.log(i)
}

i = 0
while (i <= 5) {
    console.log(i);
    i++
}

console.log("-----------------------------------------")

function multiply(num) {
    console.log(num * 2)
}

multiply(5)

console.log("-----------------------------------------")

function checkNum(num) {
    if (num >= 5.50) {
        console.log("Execellent")
    } else {
        console.log("Not excellent")
    }
}

checkNum(4)
checkNum(6)

console.log("-----------------------------------------")

function printMonth(num) {
    const isNotValidMonth = num < 0 || num > 12
    if (isNotValidMonth) {

    }
}
console.log("-----------------------------------------")

function printStarts(count) {
    console.log("*".repeat(count))
}
printStarts(10)

console.log("-----------------------------------------")

function functionName(input) {
    //TODO
};

// let functionVariable = functionName(input){
//     //TODO
//     };

console.log("-----------------------------------------")

function countDOwn(input) {
    console.log(input)
    if (input > 0) {
        countDOwn(input - 1)
    }
}

countDOwn(10)

console.log("-----------------------------------------")

function printHeader() {
    console.log('~~~- {@} -~~~');
    console.log('~- Certificate -~');
    console.log('~~~- ~---~ -~~~');
}
printHeader();

console.log("-----------------------------------------")

function returnFunction(firstName, lastName) {
    return firstName + ' ' + lastName
}


console.log(returnFunction("Muri", "Murti"))

console.log("-----------------------------------------")

// checking if array index is valid

function checkArrayIndex(index, array) {
    if (index >= 0 && Number.isInteger(index) && index < array.length) {
        console.log("True")
    } else {
        console.log("False")
    }
}

checkArrayIndex(0, [1, 2, 3])

console.log("-----------------------------------------")

