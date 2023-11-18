function deleteByEmail() {

    // getting the value of the input:
    const email = document.querySelector("input[name='email']").value;

    // selecting all the emails (the right side of the table)
    // converting the result using Array.from to get an array
    const emailBoxes = Array.from(document.querySelectorAll("td:nth-child(even)"));

    // finding if the email exists:
    const userEmailBox = emailBoxes.find((element) => element.textContent === email)

    // removing the element if it exists, else displaying a text

    if (userEmailBox) {
        userEmailBox.parentElement.remove()
        document.getElementById("result").textContent = "Deleted"
    } else {
        document.getElementById("result").textContent = "Not found."
    }
}