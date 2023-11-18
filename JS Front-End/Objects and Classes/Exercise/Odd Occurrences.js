function oddOccurances (input) {
    const inputAsArray = input.toLowerCase().split(" ");
    let occurances = new Map() // using map to preserver the order of the words as in input
    for (const word of inputAsArray) {
        if (occurances.has(word)) {
            occurances.set(word, occurances.get(word) + 1);
        } else {
            occurances.set(word, 1);
        }
    }

    

    occurancesFilteredByOdd = Array.from(occurances.keys()).filter((key) => occurances.get(key) % 2 !== 0)


    console.log(occurancesFilteredByOdd.join(" "))
}


oddOccurances('Java C# Php PHP Java PhP 3 C# 3 1 5 C#' )
oddOccurances('Cake IS SWEET is Soft CAKE sweet Food')