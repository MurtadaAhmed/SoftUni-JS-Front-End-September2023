window.addEventListener("load", solve);

function solve() {
    // 1. Get the information from the form and add it as event listener to Add button
    // extracting all elements from the DOM
    let expenseType = document.getElementById("expense");
    let amount = document.getElementById("amount");
    let date = document.getElementById("date");
    let addButton = document.getElementById("add-btn");
    let ulPreviewList = document.getElementById("preview-list");
    let ulExpensesList = document.getElementById("expenses-list");
    let deleteButton = document.querySelector(".btn.delete"); // TODO: double check if it is correctly selected

    

    // adding event listener to Add button (check the input not to be empty)
    addButton.addEventListener('click', () => {
        
        // extracting the input values to be used later in edit functionality
        let amountValue = amount.value;
        let expenseTypeValue = expenseType.value;
        let dateValue = date.value;
        
        // checking if the input fields are empty
        if (expenseType.value === '' || amount.value === '' || date.value === '') {
            return;
        }
        // creating the empty elements with their class names
        let li = document.createElement("li");
        li.className = 'expense-item';
        let article = document.createElement("article");
        let pType = document.createElement("p");
        let pAmount = document.createElement("p");
        let pDate = document.createElement("p");
        let divButtons = document.createElement("div");
        divButtons.className = 'buttons';
        let editButton = document.createElement("button");
        editButton.className = 'btn edit';
        editButton.textContent = 'edit';
        let okButton = document.createElement("button");
        okButton.className = 'btn ok';
        okButton.textContent = 'ok';

        // adding the input values to the elements
        pType.textContent = `Type: ${expenseType.value}`;
        pAmount.textContent = `Amount: ${amount.value}$`;
        pDate.textContent = `Date: ${date.value}`;

        // appending the elements to the DOM
        divButtons.appendChild(editButton);
        divButtons.appendChild(okButton);
        article.appendChild(pType);
        article.appendChild(pAmount);
        article.appendChild(pDate);
        li.appendChild(article);
        li.appendChild(divButtons);
        ulPreviewList.appendChild(li);

        // disabling the Add button and clearing the input fields
        addButton.disabled = true;
        document.getElementById("expense").value = '';
        document.getElementById("amount").value = '';
        document.getElementById("date").value = '';

        // 2. Edit the Information
        // adding event listener to Edit button
        editButton.addEventListener('click', () => {
        // adding the values from the previous list back to the input fields
        document.getElementById("expense").value = expenseTypeValue; 
        document.getElementById('amount').value = amountValue;
        document.getElementById('date').value = dateValue;

        // removing the previous list
        ulPreviewList.removeChild(li);

        // enabling the Add button
        addButton.disabled = false;
    })

    // 3. Add to Expenses (Using the OK button)
    // adding event listener to OK button
    okButton.addEventListener('click', () => {
        // removing the previous list
        ulPreviewList.removeChild(li);
        // adding the element under expenses list
        ulExpensesList.appendChild(li);
        
        // removing the OK and Edit buttons
        li.removeChild(divButtons);
        // enabling the Add button
        addButton.disabled = false;
    })

    // 4. Delete Expenses
    // adding event listener to Delete button
    deleteButton.addEventListener('click', () => {
        // deleting the expenses list
        ulExpensesList.remove();
        // reloading the page
        location.reload();
        })
    })

    

}
