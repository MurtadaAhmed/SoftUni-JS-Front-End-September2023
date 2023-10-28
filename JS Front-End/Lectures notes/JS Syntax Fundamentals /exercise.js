// Age:
function agechecker(age) {
    if (age >= 0 && age <= 2) {
        console.log("baby");
    } else if (age >=3 && age <= 13){
        console.log("child");
    } else if (age >= 14 && age <= 19) {
        console.log("teenager")
    } else if (age >= 20 && age <= 65){
        console.log("adult");
    } else if (age >= 66) {
        console.log("elder");
    } else {
        console.log("out of bounds")
    }
}

agechecker(0)
agechecker(12)
agechecker(18)
agechecker(21)
agechecker(80)
agechecker(-5)


// console.log("-----------------------------------------")

// // console.log('****Vacation****');

function vacation(groupSize, type, day) {
  let price;
	if (type === 'Students') {
		if (day === 'Friday') {
      price = groupSize * 8.45

		} else if (day === 'Saturday') {
      price = groupSize * 9.80

		} else if (day === 'Sunday') {
      price = groupSize * 10.46

		}
    if (groupSize >= 30) {
      price = price * 0.85 // price *= 0.85
    }
	} else if (type === 'Business') {
    let businessTicketPrice;
    if (day === 'Friday') {
      price = groupSize * 10.90
      businessTicketPrice = 10.90
		} else if (day === 'Saturday') {
      price = groupSize * 15.60
      businessTicketPrice = 15.60
		} else if (day === 'Sunday') {
      price = groupSize * 16
      businessTicketPrice = 16
		}
    if (groupSize >= 100) {
      discountedPrice = 10 * businessTicketPrice
      price -= discountedPrice
      

    }
	} else if (type === 'Regular') {
    if (day === 'Friday') {
      price = groupSize * 15

		} else if (day === 'Saturday') {
      price = groupSize * 20

		} else if (day === 'Sunday') {
      price = groupSize * 22.50

		}

      if (groupSize >= 10 && groupSize <= 20) {
         price *= 0.95
	}
   
}
console.log(`Total price: ${price.toFixed(2)}`)
}


vacation(30, 'Students', 'Sunday');
vacation(40, 'Regular', 'Saturday');
vacation(10, 'Business', 'Friday');

// console.log("-----------------------------------------")

// console.log('****Leap Year****');

function isLeapYear(year) {
   if ((year % 4 === 0 && year % 100 != 0 )|| year % 400 === 0) {
      console.log("yes") 
   } else {
      console.log("no")
   }
} 

isLeapYear(1984)
isLeapYear(2003)
isLeapYear(4)

// console.log("-----------------------------------------")


// // function getDate() {
// //    let date = new Date();
// //    console.log(date)
// // }

// // getDate()

// console.log("-----------------------------------------")

console.log('****Print and sum****');

function printAndSum(firstNum, secondNum) {
   let sum = 0;
   let numbersList ="";  
   for (let i = firstNum; i <= secondNum; i++) {
      sum += i;
      numbersList += i + " ";
   }
   console.log(numbersList); // numersList.trim() >> this removes the whitespace at the beginning and the end
   console.log(`Sum: ${sum}`);
}

printAndSum(5, 10)

// console.log("-----------------------------------------")

console.log('****Multiplacion Table****');

function multiplationTable(number) {
   for (let i = 1; i <= 10; i++) {
      console.log(`${number} X ${i} = ${number * i}`)
   }
}

multiplationTable(5)

// console.log("-----------------------------------------")

console.log('****Sum Digits****');

function sumDigits(number) {
   let sum = 0;
   numAsString = number.toString(); // String(number)
   for (let i = 0; i < numAsString.length; i++) {
      sum += Number(numAsString[i]);
   }
   console.log(sum);
}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);

// console.log("-----------------------------------------")

// // let a = "5.5";
// // console.log(Number(a)); // => 5.5
// // console.log(parseInt(a)); // => 5

// console.log("-----------------------------------------")

console.log('****Characters****');

function charToString(char1, char2, char3)  {
   console.log(char1 + char2 + char3);
}

charToString("a", "b", "c");
charToString("d", "e", "f");

// console.log("-----------------------------------------")

console.log('****Reversed Order****');

function reversedOrder (firstChar, secondChar, thirdChar) {
   reversed = thirdChar + " " + secondChar + " " + firstChar
   console.log(reversed);
   }
  
reversedOrder("a", "b", "c");

// console.log("-----------------------------------------")

console.log('****Road Radar****');

function roadRadar(speed, area) {
   let status = ""; // speeding,accessive speeding, reckless driving
   let speedLimit =0;
   let difference =0;
   switch (area) {
      case "motorway":
         speedLimit = 130
         difference = speed - 130
         if (speed <= 130) {
            console.log( `Driving ${speed} km/h in a 130 zone`)
         } else {
            
            if (difference <= 20) {
               status = "speeding"
            } else if (difference <=40) {
               status = "accessive speeding"
            } else if (difference >40) {
               status = "reckless driving"
            }
         }
         break;
      case "interstate":
         speedLimit = 90;
         difference = speed - 90;
         if (speed <= 90) {
            console.log( `Driving ${speed} km/h in a 90 zone`)
         } else {
            
            if (difference <= 20) {
               status = "speeding"
            } else if (difference <=40) {
               status = "excessive speeding"
            } else if (difference >40) {
               status = "reckless driving"
            }
         }
         break;
      case "city":
         speedLimit = 50
         difference = speed - 50
         if (speed <= 50) {
            console.log( `Driving ${speed} km/h in a 50 zone`)
         } else {
            
            if (difference <= 20) {
               status = "speeding"
            } else if (difference <=40) {
               status = "excessive speeding"
            } else if (difference >40) {
               status = "reckless driving"
            }
         }
         break;
      case "residential":
         speedLimit = 20
         if (speed <= 20) {
            console.log( `Driving ${speed} km/h in a 20 zone`)
         } else {
            difference = speed - 20
            if (difference <= 20) {
               status = "speeding"
            } else if (difference <=40) {
               status = "excessive speeding"
            } else if (difference > 40) {
               status = "reckless driving"
            }
         }
         break;
      
   }
   if (status) {
      console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
   }

}

roadRadar(40, 'city' )
roadRadar(21, 'residential')
roadRadar(120, 'interstate' )
roadRadar(200, 'motorway'  )

// console.log("-----------------------------------------")

// console.log('****Cooking by Numbers****');

function cookingByNumbers(...input) {

   let number = Number(input[0])
   for (let i = 1; i <= 5 ; i++) {
      if (input[i] === "chop"){
         number /= 2
      } else if (input[i] === "dice"){
         number = Math.sqrt(number)

      } else if (input[i] === "spice") {
         number += 1

      } else if (input[i] === "bake"){

         number *= 3
      } else if (input[i] === "fillet") {
         number *= 0.80

      }
      console.log(number)
}}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake','fillet');

console.log("-----------------------------------------")

console.log('****Fruit****');

function fruit(fruit, weight, price) {
   money = (weight /1000) * price 
   console.log(`I need $${money.toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${fruit}.`)
}

fruit('orange', 2500, 1.80)
fruit('apple', 1563, 2.35)

console.log("-----------------------------------------")

console.log('****Same Numbers****');

function sameNumbers(input) {
   string = String(input);
   number = Number(string[0]);
   sum = number;
   isSame = true;

   for (let i = 1; i < string.length; i++) {
      sum += Number(string[i]);
      if (Number(string[i]) != number){
         isSame = false;
      }
   }
   if (isSame) {
      console.log("true")
   } else {
      console.log("false")
   }
   console.log(sum)
}

sameNumbers(2222222)
sameNumbers(1234)