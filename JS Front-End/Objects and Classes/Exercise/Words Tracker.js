function wordsTracker(list) {
  let searchedItems = list.shift().split(" "); // ['this', 'sentence']
  let wordsOccurences = {}
  searchedItems.forEach((word) => {
    wordsOccurences[word] = 0;

    list.forEach((item) => {
        if (word === item) {
            wordsOccurences[word] += 1;
        }
    })

  });

  sortedItems = Object.entries(wordsOccurences).sort((a, b) => b[1] - a[1]
  );

  for (const [key, value] of sortedItems) {
    console.log(`${key} - ${value}`);
  }
}




wordsTracker([
  "this sentence",

  "In",
  "this",
  "sentence",
  "you",
  "have",

  "to",
  "count",
  "the",
  "occurrences",
  "of",

  "the",
  "words",
  "this",
  "and",
  "sentence",

  "because",
  "this",
  "is",
  "your",
  "task",
]);


wordsTracker([

    'is the',
    
    'first', 'sentence', 'Here', 'is',
    
    'another', 'the', 'And', 'finally', 'the',
    
    'the', 'sentence'] )