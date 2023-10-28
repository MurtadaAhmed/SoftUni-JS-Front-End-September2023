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
 