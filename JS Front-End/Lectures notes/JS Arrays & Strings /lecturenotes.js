line = (e) => console.log(`${"*".repeat(10)} ${e} ${"*".repeat(10)}`);

line("Array");

array = [1, 2, 3, 4, 5];

console.log(array[array.length - 1]); // get the last element

numbers = [1, 2, 3, 4, 5, 6, 7];
let [a, b, c, ...elemen] = numbers;
console.log(a, b, c, elemen);
console.log(elemen);
console.log(numbers);
console.log(...numbers);

line("For of");

arr = [1, 2, 3, 4, 5, 6, 7];

for (let number of arr) {
  console.log(number);
}

for (let i = 0; i < arr.length; i++) {
  console.log(`at index ${i}, the element is ${arr[i]}`);
}

line("Methods");

line("1.POP")
list = [1, 2, 3, 4, 5, 6, 7, 8]
lastElement = list.pop()
console.log(lastElement);
console.log(list);


line("2.PUSH")
pushFunction = list.push(900);
console.log(pushFunction); // returns the length
console.log(list);

list.push(300, 400)
console.log(list);
list.push([1,2,3,4])
console.log(list);

line("3.SHIFT")

collection = ["one", "two", "three", "four"]
removedFirstItem = collection.shift()
console.log(removedFirstItem);
console.log(collection);

line("4.UNSHIFT")

collection2 = ["one", "two", "three", "four"]
addFirstElement = collection2.unshift("Zero")
console.log(addFirstElement);
console.log(collection2);

line("5.SPLICE")

collection3 = ["Volvo", "Audi", "Car3", "Car4", "Car5"]

let newCar = collection3.splice(0, 0 , "addedNewCar") 

console.log(collection3) // ['addedNewCar', 'Volvo', 'Audi', 'Car3', 'Car4', 'Car5']
console.log(newCar)

let replaceVolvo = collection3.splice(1, 1, "replaceVolvo")
console.log(collection3)
console.log(replaceVolvo)

line("JOIN")

elements = ["element1", "element2", "element3", "element4", "element5"]
console.log(elements)
joinedWithoutAnyParams = elements.join()
console.log("elements.join() >> " + joinedWithoutAnyParams);
joinedWithoutAything = elements.join("")
console.log("elements.join('')>> " +joinedWithoutAything);
joinedWithSpace = elements.join(" ")
console.log("elements.join(' ') >> " +joinedWithSpace);
joinedWithSymbol = elements.join("*")
console.log("elements.join('*') >> " +joinedWithSymbol);
joinedWithComaAndSpace = elements.join(", ")
console.log("elements.join(', ') >> " +joinedWithComaAndSpace);
withNewLine = elements.join("\n")
console.log("elements.join('\n') >> " +withNewLine);

line("SLICE")

fruits = ["apple", "orange", "Banana"]
slicedFruits = fruits.slice()
console.log(slicedFruits)
firstElement = fruits.slice(0,1)
console.log(firstElement)
lastTwoElements = fruits.slice(fruits.length - 2,fruits.length)
console.log(lastTwoElements)

line("INCLUDE")

fruities = ["apple", "orange", "Banana"]

console.log(fruities.includes("orange"))
console.log(fruities.includes("mango"))
console.log(fruities.includes("apple", 1))

line("INDEXOF")

animals = ["tiger", "bear", "lion"]

console.log(animals.indexOf("bear"))
console.log(animals.indexOf("tiger", 1))
console.log(animals.indexOf("lion", 2))

line("FOREACH")

items = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let itemsCopy = []

items.forEach((item) => {
    itemsCopy.push(item)
}

)

console.log(items)
console.log(itemsCopy)

line("MAP")

let num = [1, 2, 3, 4]
const numReplaced = num.map(() => "*")
console.log(numReplaced)
console.log(num)

line("FIND")

let numNum = [1, 2, 3, 4]
console.log(numNum.find(
    (element) => element < 5
))

line("FILTER")
let numNum2 = [1, 2, 3, 4]
console.log(numNum2.filter(
    (element) => element < 5
))

line("Strings")

let str = "this is a string"
console.log(str.indexOf("is"))
console.log(str.lastIndexOf("is"))
console.log(str.substring(5, 7))
console.log(str.replace("is", "**"))
console.log(str.replace("is", "**"))
console.log(str.split(""))
console.log(str.split(" "))
console.log(str.includes("is"))
console.log("%".repeat(10))

textWithSpaces = "   Hello    "
console.log(textWithSpaces)
console.log(textWithSpaces.trim())
console.log(textWithSpaces.trimStart())
console.log(textWithSpaces.trimEnd())

console.log(textWithSpaces.startsWith("He"))
console.log(textWithSpaces.startsWith("   He"))

console.log(textWithSpaces.endsWith("lo"))
console.log(textWithSpaces.endsWith("lo    "))

console.log(textWithSpaces.padStart(20, "*"))
console.log(textWithSpaces.padEnd(20, "*"))

line("Regular Expressions")

let regText = "today is 2015-05-11"
let regexp = /\d{4}-\d{2}-\d{2}/g

console.log(regexp.test(regText))

let anotherText = "Peter: 123 Mark: 456"
let anotherRegexp = /([A-z]+): (\d+)/g
let matches = anotherText.match(anotherRegexp)
console.log(matches)
console.log(matches[0])
console.log(matches[1])

regexExec = anotherRegexp.exec(anotherText)
console.log(regexExec)

justAnotherRegexp = /\d{3}/g
console.log(anotherText.replace(justAnotherRegexp, "***"))

