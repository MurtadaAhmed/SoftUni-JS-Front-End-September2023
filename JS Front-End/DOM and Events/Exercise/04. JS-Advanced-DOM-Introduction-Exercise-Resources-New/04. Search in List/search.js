function search() {
  let towns = Array.from(document.querySelectorAll("li"));
  let searchedText = document.querySelector("#searchText").value;
  let result = document.querySelector("#result");
  let matches = 0;
  
  
  for (const town of towns) {
      town.style.fontWeight = "";
      town.style.textDecoration = "";
  }
  
  
  for (const town of towns) {
    if (town.textContent.includes(searchedText)) {
      matches++;
      town.style.fontWeight = "bold";
      town.style.textDecoration = "underline";
   }
  }

  result.textContent = `${matches} matches found`
}
