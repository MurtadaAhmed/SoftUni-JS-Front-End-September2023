function solve() {
  let rawText = document.getElementById("input").value 
  let outputElement = document.getElementById("output")

  let sentence = rawText.split('.')

  sentence = sentence.filter(s => s.length > 0).map(s => s += '.')


  console.log(sentence)

}