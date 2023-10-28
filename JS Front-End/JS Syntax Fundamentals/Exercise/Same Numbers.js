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