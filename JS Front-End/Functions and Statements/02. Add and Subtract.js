function addAndSubtract(firstNum, secondNum, thirdNum) {
  function sum(firstNum, secondNum) {
    return firstNum + secondNum;
  }

  function subtract(sum, thirdNum) {
    return sum - thirdNum;
  }

  console.log(subtract(sum(firstNum, secondNum), thirdNum));
}

addAndSubtract(
  23,

  6,

  10
);
addAndSubtract(
  1,

  17,

  30
);
addAndSubtract(
  42,

  58,

  100
);
