function pascalCaseSplit(sentence) {
    let regex = /[A-Z][a-z]*/gm
    matches = sentence.match(regex);
    console.log(matches.join(", "))
}

pascalCaseSplit('SplitMeIfYouCanHaHaYouCantOrYouCan')
pascalCaseSplit('HoldTheDoor')
pascalCaseSplit('ThisIsSoAnnoyingToDo')