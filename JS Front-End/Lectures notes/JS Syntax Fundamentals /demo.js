// object:
let person = {
    name: "paterson",
    age: 25,
}

person.city = "Sofia"
console.log(person["name"])
console.log(person["city"])
console.log(person) // {name: 'paterson', age: 25, city: 'Sofia'}


let sayHelloGoodbye = {
    helooo: function () {
        console.log("Hello")
    }
}

sayHelloGoodbye.goodBye = () => console.log("Goodbye")

console.log(sayHelloGoodbye)
sayHelloGoodbye.helooo()
sayHelloGoodbye.goodBye()

line = (e) => console.log(`${'*'.repeat(10)} ${e} ${"*".repeat(10)}`) 

line("object")

let personn = {
    name: "paterson",
    age: 25,
}

for (let [key, value] of Object.entries(personn)) {
    console.log(`${key}: ${value}`)
}

console.log(personn) 
console.log(Object.keys(personn))
console.log(Object.values(personn))
console.log(Object.entries(personn))



line("JSON")

// JSON

testObject = {
    name: "Paterson",
    age: 25,
    city: "Sofia",
}

console.log(testObject) // {name: 'Paterson', age: 25, city: 'Sofia'}
jasonfiedObject = JSON.stringify(testObject)
console.log(jasonfiedObject)
fromJasonToObject = JSON.parse(jasonfiedObject)
console.log(fromJasonToObject)

line("Associative Array")

let someKey = "some key"

let asscArray = {
    name: "Paterson",
    age: 25,
    city: "Sofia",
    [someKey] : "some value",
}

asscArray.age = 27


console.log(asscArray)

for (let key in asscArray) {
    console.log(key + " >> " + asscArray[key])
}

if (asscArray.hasOwnProperty("city")) {
    console.log("There is a key city")
}

if (asscArray.hasOwnProperty("some key")) {
    console.log("There is a key someKey")
}

delete asscArray[someKey]

console.log(asscArray)

unsortedArray = {
    "mmm": "nnn",
    "aaa": "bbb",
    "ccc": "ddd",
    "ggg": "hhh",
    "iii": "jjj",
    "eee": "fff",
    "ooo": "ppp",
    "kkk": "lll",   
}

let entries = Object.entries(unsortedArray)
console.log(entries)
console.log(entries[0])
console.log(entries[0][0])
console.log(entries[0][1])

entries.sort(
    (a, b) => {
    keyA = a[0];
    keyB = b[0];

    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
});

console.log(entries)
console.log(entries[0])
console.log(entries[7])

entries.sort (
    (a, b) => {
        keyA = a[0];
        keyB = b[0];
        if (keyA < keyB) return 1;
        if (keyA > keyB) return -1;
        return 0;
    }
);

console.log(entries[0])
console.log(entries[7])



line("Array and Object Destructuring")

let arr = [1, 2, 3, 4, 5]
let [a, b, c, d, e] = arr
let [x,y,z] = arr

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(x)
console.log(y)
console.log(z)

let obj = {
    f: 1,
    g: 2,
    h: 3,
}

let {f, g, h} = obj

console.log(f)
console.log(g)
console.log(h)

line("Classes")

class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    getAllInfo () {
        console.log(`${this.name} is ${this.age} from ${this.city}`)
    }
}

console.log(Person)
console.log(Person.length)
console.log(Person.name)

let student = new Person("peter", 25,"sofia")
console.log(student)
console.log(student.name)
console.log(student.age)
console.log(student.city)

student.getAllInfo()
