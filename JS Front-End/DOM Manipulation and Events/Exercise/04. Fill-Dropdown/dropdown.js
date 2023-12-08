function addItem() {
    text = document.querySelector("#newItemText").value;
    value = document.querySelector("#newItemValue").value;
    menu = document.querySelector("#menu")

    option = document.createElement("option");
    option.textContent = text;
    option.value = value;

    menu.appendChild(option);

    document.querySelector("#newItemText").value = "";
    document.querySelector("#newItemValue").value = "";



}