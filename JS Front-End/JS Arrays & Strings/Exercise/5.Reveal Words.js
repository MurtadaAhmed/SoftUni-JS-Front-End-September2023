function revealWords(words, text) {

    splittedWords = words.split(", ")
    splittedText = text.split(" ")

    for (let i = 0; i < splittedText.length; i++){

        for (let j = 0 ; j < splittedWords.length; j++) {
            if (splittedText[i].includes("*") && splittedText[i].length === splittedWords[j].length) {
                splittedText[i] = splittedWords[j]
            }
        }
    }
    console.log(splittedText.join(" "))
}


revealWords('great',
'softuni is ***** place for learning new programming languages')

revealWords('great, learning',
'softuni is ***** place for ******** new programming languages')