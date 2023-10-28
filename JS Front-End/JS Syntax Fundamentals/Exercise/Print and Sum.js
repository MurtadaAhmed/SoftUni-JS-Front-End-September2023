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