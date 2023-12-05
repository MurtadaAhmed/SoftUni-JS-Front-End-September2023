const test = {};

test.firstName = "Alex";
test.LastName = "Alexieve";

console.log(test);

test["firstName"] = "new name";
test.LastName = "new last name";

console.log(test);

// 1. Person info

function object(firstName, lastName, age) {
  obj = {};
  obj.firstName = firstName;
  obj.lastName = lastName;
  obj.age = age;

  return obj;
}

object("alex", "alexiev", 25);

console.log(object("alex", "alexiev", 25));

// methods

const person = {
  name: "Antonia",
  sayHello: function () {
    return "hello";
  },
};

console.log(person.sayHello());

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
console.log(Object.entries(person)[0]);
console.log(Object.entries(person)[1]);

// 2. City
function city(object) {
  for (const iterator of Object.entries(object)) {
    console.log(`${iterator[0]} -> ${iterator[1]}`);
  }
}

city({
  name: "something",
  area: "something",
  population: "something",
  country: "something",
  postCode: "something",
});

// JSON

jsObject = {
  name: "something",
  area: "something",
  population: "something",
  country: "something",
  postCode: "something",
};

jsonObject = JSON.stringify(jsObject);

console.log(jsObject);
console.log(jsonObject);

fromJsonToJavascript = JSON.parse(jsonObject);
console.log(fromJsonToJavascript);

// Phone book

function getPhoneBook(array) {
  const phoneBook = {};
  for (const iterator of object) {
    const [name, phone] = iterator.split(" ");
    phoneBook[name] = phone;
  }

  for (const key in phoneBook) {
    console.log(`${key} ->${phoneBook[key]}`);
  }
}

// checking is a key exists
console.log(getPhoneBook.hasOwnProperty("Alex"));

// delete element
delete person.name
delete person["name"]

// meeting

function getMeetingInfo(array) {

    const meetings ={};

    for (const iterator of array) {
        const [day, name] = iterator.split(" ")

        if (!meetings.hasOwnProperty(day)) {
            meetings[day] = name
            console.log(`Schedule for ${day}`)
        } else {
            console.log(`Conflict on ${day}`)
        }
    }

    Object.keys(meetings).forEach(day => {
        console.log(`${day} ${meetings["day"]}`)
    })
}

// Sorting:
object = {"key": "value"}

entries = Object.entries(object)

entries.sort((a, b) => {
    keyA = a[0];
    keyB = b[0];
})

// address book

function getAddress(input) {
    const addressList = {};

    for (const iterator of put) {
        let [name, address] = iterator.split(':');
        addressList[name] = address
    }

    const peopleNames = Object.entries(addressList)
    
    const sortedPeople = peopleNames.sort()

    for (const iterator of sortedPeople) {
        console.log(`${key[0]} ${key[1]}`)
    }
}


// Classes

class Student {
    constructor(name, grade){
        this.name = name
        this.grade = grade
    }

    study () {
        this.grade++;
        console.log("good job")
    }
}

let firstStudent = new Student("Alex", "2");

console.log(firstStudent)
console.log(firstStudent.name)
console.log(firstStudent.grade)
firstStudent.study()
console.log(firstStudent)


// Cat

function cats(array) {
    let cat = []

    class Cat {
        constructor(name, age) {
            this.name = name 
            this.age = age

        }

        meow() {
            console(`${this.name}`)
        }
    }

    for (let i = 0; i < array.length; i++) {
        const catInfo = array[i].split(' ')
        const [name, age] = catInfo
        const newCat = new Cat(name, age)
        newCat.meow()
        cats.push(newCat)
    }

}

