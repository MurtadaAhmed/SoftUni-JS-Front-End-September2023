
    let baseUrl = 'http://localhost:3030/jsonstore/tasks'

    // capture the elements
    let name = document.getElementById('name');
    let days = document.getElementById('num-days');
    let date = document.getElementById('from-date');

    let addButton = document.getElementById('add-vacation');
    let editButton = document.getElementById('edit-vacation');

    let loadVacationButton = document.getElementById('load-vacations');

    let divList = document.getElementById('list');

    // 1. load vacations
    loadVacationButton.addEventListener('click', loadVacation);


    let currentElementId = ""

    async function loadVacation() {
        // clearing the previous objects
        divList.innerHTML = '';

        // fetching
        let response = await fetch(baseUrl);
        let data = await response.json();
        let dataValues = Object.values(data); // Object { name: "David Mule", days: "5", date: "2023-07-09", … }
        for (const key in dataValues) {
            let name = dataValues[key].name;
            let days = dataValues[key].days;
            let date = dataValues[key].date;
            let id = dataValues[key]._id;

            // creating the elements:
            let divContainer = document.createElement('div');
            divContainer.className = 'container';

            let h2 = document.createElement('h2');
            let h3Date = document.createElement('h3');
            let h3Days = document.createElement('h3');

            let changeButton = document.createElement('button');
            changeButton.className = 'change-btn';
            changeButton.textContent = 'Change';

            // adding the change functionality
            changeButtonFunction(changeButton, divContainer, id, name, days, date)

            let doneButton = document.createElement('button');
            doneButton.className = 'done-btn';
            doneButton.textContent = 'Done';

            // adding the done functionality
            doneButtonFunction(doneButton,  id)

            // adding the values to the elements:
            h2.textContent = name;
            h3Date.textContent = date;
            h3Days.textContent = days;

            // appending the elements 
            divContainer.appendChild(h2);
            divContainer.appendChild(h3Date);
            divContainer.appendChild(h3Days);
            divContainer.appendChild(changeButton);
            divContainer.appendChild(doneButton);
            divList.appendChild(divContainer);
            
        }
        


    }

    // add vacation

    addButton.addEventListener('click', addVacation);

    async function addVacation(e){
        e.preventDefault() // to prevent the error "Uncaught (in promise) TypeError: NetworkError when attempting to fetch resource."
        // capturing the elements
        let currentName = name.value;
        let currentDays = days.value;
        let currentDate = date.value;
        // sending post request
        let object = {name: currentName, days: currentDays, date: currentDate};
        await fetch(baseUrl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(object)     
        })

        //load vacations again
        loadVacation();

        // clearing the input fields
        name.value = '';
        days.value = '';
        date.value = '';
    }

    // change button function
    function changeButtonFunction(changeButton, divContainer, id, name, days, date){
        changeButton.addEventListener('click', () => {
            divContainer.remove();
            document.getElementById('name').value = name;
            document.getElementById('num-days').value = days;
            document.getElementById('from-date').value = date;
            editButton.disabled = false;
            addButton.disabled = true;
            currentElementId = id; // this is to be used in Edit Vacation function
        });
        
    }


    // edit vacation

    editButton.addEventListener('click', editVacation);
    async function editVacation(e) {
        e.preventDefault();
        // capturing the edited elements
        let name = document.getElementById('name');
        let days = document.getElementById('num-days');
        let date = document.getElementById('from-date');
        let _id = currentElementId;
        let object = {name: name.value, days: days.value, date: date.value, _id};
        
        // sending the put request
        await fetch(`${baseUrl}/${_id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(object)
        })

        // clearing the input fields
        name.value = '';
        days.value = '';
        date.value = '';

        // disabling the edit button
        editButton.disabled = true;

        // enabling the add button
        addButton.disabled = false;

        // loading the vacations again
        loadVacation();
    }

    // Mark as Done
    async function doneButtonFunction(doneButton, id){
        doneButton.addEventListener('click', async() => {
            await fetch(`${baseUrl}/${id}`, {
                method: 'DELETE'
            })
            loadVacation();
        })
    }

