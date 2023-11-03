function subString(word, sentence) {
    sentence = sentence.toLowerCase();
    sentenceSplit = sentence.split(" ")
    output = `${word} not found!`

    for (let i of sentenceSplit) {
        if (i === word) {
            output = i
        }

    }

    console.log(output)
}

subString('javascript',
'JavaScript is the best programming language')

subString('python',
'JavaScript is the best programming language')