
const loadButton = document.getElementById('load-vacations');

const baseUrl = 'http://localhost:3030/jsonstore/tasks'

const divList = document.getElementById('list');


addVacationButton = document.getElementById('add-vacation');
editVacationButton = document.getElementById('edit-vacation');
let currentVacationId = null // used for Edit Vacation to store the id of the current vacation
doneVacationButton = document.getElementsByClassName('done-btn');
// load vacations:
loadButton.addEventListener('click', renderVacations) 
    

async function renderVacations(){
        divList.innerHTML = '';
        data = await fetch(baseUrl);
        response = await data.json();
    
        results = Object.values(response);
        
        results.forEach(element => {
            name = element.name;
            date = element.date;
            day = element.days;
    
            const divContainer = document.createElement('div');
            divContainer.className = 'container';
    
            const h2 = document.createElement('h2');
            h2.textContent = name;
    
            const h3Date = document.createElement('h3');
            h3Date.textContent = date;
    
            const h3Days = document.createElement('h3');
            h3Days.textContent = day;
    
            const buttonChange = document.createElement('button');
            buttonChange.textContent = 'Change';
            buttonChange.className = 'change-btn';

            // Change Button:
            
            
            buttonChange.addEventListener('click', async () => {
            document.getElementById('name').value = element.name;
            document.getElementById('num-days').value = element.days;
            document.getElementById('from-date').value = element.date;
                
            divContainer.remove();
            addVacationButton.disabled = true;
            editVacationButton.disabled = false;

            currentVacationId = element._id; // Update the ID of the vacation to be edited    

            })

    
            const buttonDone = document.createElement('button');
            buttonDone.className = 'done-btn';
            buttonDone.textContent = 'Done';

            // Done Vacation:
            buttonDone.addEventListener('click',  () => {
                fetch(`${baseUrl}/${element._id}`, {
                    method: 'DELETE'
                });
                renderVacations(); // Re-render the vacations after deleting one
            })
            
    
            divContainer.appendChild(h2);
            divContainer.appendChild(h3Date);
            divContainer.appendChild(h3Days);
            divContainer.appendChild(buttonChange);
            divContainer.appendChild(buttonDone);
    
            divList.appendChild(divContainer);
    
            
    
        });
        
     
}

// add vacation:
addVacationButton.addEventListener('click', async (e) => {
        e.preventDefault();
        let name = document.getElementById('name').value;
        let days = document.getElementById('num-days').value;
        let date = document.getElementById('from-date').value;

        let obj = {name, days, date};

        await fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify(obj)
        });

        document.getElementById('name').value = '';
        document.getElementById('num-days').value = '';
        document.getElementById('from-date').value = '';

        renderVacations();

    })

    
// Edit Vacation:
                
editVacationButton.addEventListener('click', async (e) => {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let days = document.getElementById('num-days').value;
    let date = document.getElementById('from-date').value;
    let _id = currentVacationId; // the id here needs to be added so when creating a new dom element, the id will be the same as the one in the database
    let obj = {name, days, date, _id};

    
    if (currentVacationId) { // Only proceed if there is a vacation to be edited    
    await fetch(`${baseUrl}/${currentVacationId}`, {
        method: 'PUT',
        body: JSON.stringify(obj)
    });

    document.getElementById('name').value = '';
    document.getElementById('num-days').value = '';
    document.getElementById('from-date').value = '';

    renderVacations();

    addVacationButton.disabled = false;
    editVacationButton.disabled = true;
    
    currentVacationId = null; // Reset the ID of the vacation to be edited
    }})






/*
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vacation Schedule</title>
    <link rel="stylesheet" href="./style/css/style.css">
</head>

<body>

    <h1>Vacation Schedule</h1>
    <main>
        <section id="main-container">
            <div id="form">
                <h1>Add Vacation</h1>
                <form action="#">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name">

                    <label for="num-days">Number of Days:</label>
                    <input type="number" id="num-days" name="num-days">

                    <label for="from-date">From Date:</label>
                    <input type="date" id="from-date" name="from-date">

                    <button id="add-vacation">Add Vacation</button>
                    <button id="edit-vacation" disabled>Edit Vacation</button>
                </form>
            </div>
        </section>

        <div id="wrapper">

            <section id="confirmed-vacantions">
                <h2>Confirmed Vacations:</h2>
                <button id="load-vacations">Load Vacations</button>
                <div id="list">
                    <div class="container">
                        <h2>Carren Davis</h2>
                        <h3>2023-06-09</h3>
                        <h3>5</h3>
                        <button class="change-btn">Change</button>
                        <button class="done-btn">Done</button>
                    </div>
                </div>

            </section>
        </div>

    </main>
    <script src="app.js"></script>
</body>

</html>
*/