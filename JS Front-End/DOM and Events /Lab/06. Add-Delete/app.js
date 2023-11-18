function addItem() {
    
    // creating list item:
    let li = document.createElement('li');

    //extracting the text from the input
    let addedText = document.getElementById("newItemText").value

    // adding the extracted text to the newly created list item
    li.textContent = addedText

    // adding the delete button
    button = document.createElement("a");
    button.href = "#";
    button.textContent = "[DELETE]";

    // add event listener to delete button:
    button.addEventListener("click", () => {
        li.remove();
    })

    // adding delete button to li
    li.appendChild(button);

    // adding the newly created list item  with its text to ul tag
    let ul = document.getElementById("items")
    ul.appendChild(li)
    


}