function hashTag (sentence) {
    regex = /#[A-z]+/gm
    matches = sentence.match(regex)

    for (let word of matches) {
        console.log(word.replace("#", ""))
    }
}

hashTag('The symbol # is known #variously5 in English-speaking #regions as the #number sign')