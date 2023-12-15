let baseUrl = 'http://localhost:3030/jsonstore/tasks'

// extracting the elements
let loadButton = document.getElementById('load-history')
let locationElement = document.getElementById('location')
let temperature = document.getElementById('temperature')
let date = document.getElementById('date')
let addWeatherButton = document.getElementById('add-weather')
let editWeatherButton = document.getElementById('edit-weather')
let divList = document.getElementById('list')
let currentWeatherId = null // used for Edit Vacation to store the id of the current weather
loadButton.addEventListener('click', loadWeather)

// function for loading the weather
async function loadWeather(){
    // clearing the list
    divList.innerHTML = '';

    // fetchubg the data    
    let response = await fetch(baseUrl);
    let data = await response.json();
    let dataValues = Object.values(data);

    for (const element of dataValues) {

        // extracting the current element
        let currentLocation = element.location;
        let currentTemperature = element.temperature;
        let currentDate = element.date;
        let currentId = element._id;

        // creating the elements

        let divContainer = document.createElement('div');
        divContainer.className = 'container';

        let h2Location = document.createElement('h2');
        let h3Date = document.createElement('h3');
        let h3Temperature = document.createElement('h3');
        h3Temperature.id = 'celsius';

        let divButtonsContainer = document.createElement('div');
        divButtonsContainer.id = 'buttons-container';

        let changeButton = document.createElement('button');
        changeButton.textContent = 'Change';
        changeButton.className = 'change-btn';

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-btn';

        // appending the elements
        divList.appendChild(divContainer);
        divContainer.appendChild(h2Location);
        divContainer.appendChild(h3Date);
        divContainer.appendChild(h3Temperature);
        divContainer.appendChild(divButtonsContainer);
        divButtonsContainer.appendChild(changeButton);
        divButtonsContainer.appendChild(deleteButton);

        // adding the values to the elements
        h2Location.textContent = currentLocation;
        h3Date.textContent = currentDate;
        h3Temperature.textContent = currentTemperature;

        // adding the event listeners
        changeButton.addEventListener('click', async () => {
            // filling the input fields with the current values
            document.getElementById('location').value = currentLocation;
            document.getElementById('temperature').value = currentTemperature;
            document.getElementById('date').value = currentDate;
            // removing the current element
            divContainer.remove();
            // disabling the add button
            addWeatherButton.disabled = true;
            // enabling the edit button
            editWeatherButton.disabled = false;
            // storing the current id
            currentWeatherId = currentId;
        })

        deleteButton.addEventListener('click',  () => {
            // deletinng the current element
            divContainer.remove();
            // deleting the current element from the database
            fetch(`${baseUrl}/${currentId}`, {
                method: 'DELETE'
            });
            // reloading the weather
            loadWeather();
        })
        
    }
}


// function for adding the weather
addWeatherButton.addEventListener('click', addWeather)
function addWeather() {
    let currentLocation = locationElement.value;
    let currentTemperature = temperature.value;
    let currentDate = date.value;

    // checking if the input fields are empty
    if(currentLocation == '' || currentTemperature == '' || currentDate == ''){
        return;
    }

    // creating the object
    let obj = {
        location: currentLocation,
        temperature: currentTemperature,
        date: currentDate
    }

    // posting the object
    fetch(baseUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(obj)
    })

    // clearing the input fields
    locationElement.value = '';
    temperature.value = '';
    date.value = '';

    // reloading the weather
    loadWeather();

}


// function for editing the weather
editWeatherButton.addEventListener('click', async (e) => {
    e.preventDefault();
    let currentlocation = document.getElementById('location').value;
    let currentTemperature = document.getElementById('temperature').value;
    let currentDate = document.getElementById('date').value;
    let currentId = currentWeatherId;

    // creating the object
    let obj = {
        location: currentlocation,
        temperature: currentTemperature,
        date: currentDate,
        _id: currentId,
    }
    // putting the object
    await fetch(`${baseUrl}/${currentId}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(obj)
    })
    // clearing the input fields
    document.getElementById('location').value = '';
    document.getElementById('temperature').value = '';
    document.getElementById('date').value = '';

    // reloading the weather
    loadWeather();

    // enabling the add button
    addWeatherButton.disabled = false;

    // disabling the edit button
    editWeatherButton.disabled = true;
})














// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Weather Tracker</title>
//     <link rel="stylesheet" href="./style/css/style.css">
// </head>

// <body>

//     <h1>Weather Tracker</h1>
//     <main>
//         <section id="main-container">
//             <div id="form">
//                 <h1>Weather Today</h1>
//                 <form action="#">
//                     <label for="location">Location:</label>
//                     <input type="text" id="location" name="location">

//                     <label for="temperature">Temperature:</label>
//                     <input type="number" id="temperature" name="temperature">

//                     <label for="date">Date:</label>
//                     <input type="date" id="date" name="date">                  
//                 </form>
//                 <div id="btn-container">
//                     <button id="add-weather">Add Weather</button>
//                     <button id="edit-weather" disabled>Edit Weather</button>
//                 </div>

//             </div>
//         </section>

//         <div id="wrapper">

//             <section id="history">
//                 <h2>History:</h2>
//                 <button id="load-history">Load History</button>
//                 <div id="list">
//                     <div class="container">
//                         <h2>Sofia</h2>
//                         <h3>2023-08-01</h3>
//                         <h3 id="celsius">35</h3>
//                         <div id="buttons-container">  
//                         <button class="change-btn">Change</button>
//                         <button class="delete-btn">Delete</button>
//                         </div>
                        
//                     </div>
//                 </div>

//             </section>
//         </div>

//     </main>
//     <script src="app.js"></script>
// </body>

// </html>



