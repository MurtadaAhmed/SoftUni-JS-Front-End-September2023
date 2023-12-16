let baseUrl = 'http://localhost:3030/jsonstore/tasks';

// extracting the elements
let loadMeatButton = document.getElementById('load-meals');
let addMealButton = document.getElementById('add-meal');
let editMealButton = document.getElementById('edit-meal');
let foodInput = document.getElementById('food');
let timeInput = document.getElementById('time');
let caloriesInput = document.getElementById('calories');
let divList = document.getElementById('list');
let currentMealId = ''; // IMPORTANT to be used for edit functionality


// 1. Load Meals
loadMeatButton.addEventListener('click', loadMealsFunction);
async function loadMealsFunction(){
    // clearing the divList to avoid duplicates
    divList.innerHTML = '';
    // fetching the data 
    let response = await fetch(baseUrl);
    let data = await response.json();
    let dataObjectValues = Object.values(data); // 0: Object { food: "Eggs", calories: "220", time: "08:30", … }

    // extracting the data from the object
    for (const element of dataObjectValues) {
        let currentFood = element.food;
        let currentTime = element.time;
        let currentCalories = element.calories;
        let currentId = element._id;

        // a. creating the elements
        let divMeal = document.createElement('div');
        divMeal.className = 'meal';
        let h2Food = document.createElement('h2');
        let h3Time = document.createElement('h3');
        let h3Calories = document.createElement('h3');
        let divMealButtons = document.createElement('div');
        divMealButtons.id = 'meal-buttons';
        let buttonChangeMeal = document.createElement('button');
        buttonChangeMeal.className = 'change-meal';
        buttonChangeMeal.textContent = 'Change';
        let buttonDeleteMeal = document.createElement('button');
        buttonDeleteMeal.className = 'delete-meal';
        buttonDeleteMeal.textContent = 'Delete';

        // b. appending children to their parents
        divMealButtons.appendChild(buttonChangeMeal);
        divMealButtons.appendChild(buttonDeleteMeal);
        divMeal.appendChild(h2Food);
        divMeal.appendChild(h3Time);
        divMeal.appendChild(h3Calories);
        divMeal.appendChild(divMealButtons);
        divList.appendChild(divMeal);

        // c. adding the fetched data to the elements
        h2Food.textContent = currentFood;
        h3Time.textContent = currentTime;
        h3Calories.textContent = currentCalories;

        // d. adding event listeners to the change button
        buttonChangeMeal.addEventListener('click', async () => {
            // filling the input fields with the values from the current meal
            document.getElementById('food').value = currentFood;
            document.getElementById('time').value = currentTime;
            document.getElementById('calories').value = currentCalories;

            // removing the current meal from the DOM
            divMeal.remove();
            // disabling the add meal button
            addMealButton.disabled = true;
            // enabling the edit meal button
            editMealButton.disabled = false;
            // saving the current meal id to be used for the PUT request
            currentMealId = currentId;
        });

        // e. adding event listeners to the delete button
        buttonDeleteMeal.addEventListener('click', () => {
            // delete the current meal from the DOM
            divMeal.remove();
            // sending the DELETE request to remove the element from the database
            fetch(`${baseUrl}/${currentId}`, {
                method: 'DELETE'
            })
            // reloading the meals again
            loadMealsFunction();
        })


    }
}

// 2. Add a Meal functionality
addMealButton.addEventListener('click', addMealFunction);
function addMealFunction() {
    let currentFood = foodInput.value;
    let currentTime = timeInput.value;
    let currentCalories = caloriesInput.value;

    // checking if the input fields are empty
    if (currentFood == '' || currentTime == '' || currentCalories == '') {
        return;
    }

    // creating object from the input values to be sent as POST
    let currentMealObject = {
        food: currentFood,
        time: currentTime,
        calories: currentCalories
    }

    // sending the POST request
    fetch(baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currentMealObject)
    })

    // clearing the input fields
    foodInput.value = '';
    timeInput.value = '';
    caloriesInput.value = '';

    // reloading the meals
    loadMealsFunction();
}

// 3. Edit a Meal functionality
editMealButton.addEventListener('click', async(e) => {
    e.preventDefault();
    // extracting the updated information
    let currentFood = document.getElementById('food').value;
    let currentTime = document.getElementById('time').value;
    let currentCalories = document.getElementById('calories').value;
    let currentId = currentMealId;

    // creating object from the updated input values to be sent as PUT
    let currentMealObject = {
        food: currentFood,
        time: currentTime,
        calories: currentCalories,
        _id: currentId
    }

    // sending the PUT request
    await fetch(`${baseUrl}/${currentId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currentMealObject)
    })

    // clearing the input fields
    document.getElementById('food').value = '';
    document.getElementById('time').value = '';
    document.getElementById('calories').value = '';

    // fetching the updated meals
    loadMealsFunction();

    // disabling the edit meal button and enabling the add meal button
    editMealButton.disabled = true;
    addMealButton.disabled = false;
});
