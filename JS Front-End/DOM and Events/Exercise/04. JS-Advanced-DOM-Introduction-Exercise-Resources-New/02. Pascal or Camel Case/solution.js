function solve() {
  let text = document.querySelector("#text").value;
  let convention = document.querySelector("#naming-convention").value;
  let result = document.querySelector("#result");
  textSplitted = text.split(" ")
  let currentWordsConvertedToLowerCase = []

  for (const word of textSplitted) {
    currentWordsConvertedToLowerCase.push(word.toLowerCase())
  }

  finalResult = []

  if (convention === "Camel Case") {
    for (let i = 0; i < currentWordsConvertedToLowerCase.length; i++) {
      let currentWord = currentWordsConvertedToLowerCase[i];

      if (i === 0) {
        finalResult.push(currentWord)
      } else {
        let camelWord = currentWord[0].toUpperCase() + currentWord.slice(1);
        finalResult.push(camelWord)
        result.textContent = finalResult.join("")
       }

    }
  } else if (convention === "Pascal Case") {

    for (let i = 0; i < currentWordsConvertedToLowerCase.length; i++) {
      let currentWord = currentWordsConvertedToLowerCase[i];

      let pascalWord = currentWord[0].toUpperCase() + currentWord.slice(1);
      finalResult.push(pascalWord)
      result.textContent = finalResult.join("")

    }

    

  } else {
    result.textContent = "Error!";
  }
}