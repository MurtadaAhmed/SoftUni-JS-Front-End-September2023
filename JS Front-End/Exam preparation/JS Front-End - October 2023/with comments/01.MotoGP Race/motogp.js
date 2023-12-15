function resolve(input) { // ['3', 'Valentino Rossi|100|1', 'Marc Marquez|90|2', 'Jorge Lorenzo|80|3', 'StopForFuel - Valentino Rossi - 50 - 1', 'Overtaking - Marc Marquez - Jorge Lorenzo', 'EngineFail - Marc Marquez - 10', 'Finish']

    numberOfRiders = Number(input.shift());

    let riders = {};

    // extracting and saving the riders information in the riders variable
    for (let index = 0; index < numberOfRiders; index++) {
        let currentRiderInfo = input.shift() // Valentino Rossi|100|1 // "{rider}|{fuel capacity}|{position}"
        let currentRiderInfoSplit = currentRiderInfo.split('|'); // ["Valentino Rossi", "100", "1"]
        let rider = currentRiderInfoSplit[0];
        let fuelCapacity = Number(currentRiderInfoSplit[1]);
        let position = Number(currentRiderInfoSplit[2]);

        riders[rider] = {fuelCapacity, position};      
    }

    // the actions
    for (const action of input) { // StopForFuel - Valentino Rossi - 50 - 1
        actionSplit = action.split(' - '); // ["StopForFuel", "Valentino Rossi", "50", "1"]
        currentAction = actionSplit[0];
        
        if (currentAction === "StopForFuel") { // actionSplit = ["StopForFuel", "Valentino Rossi", "50", "1"]
            let rider = actionSplit[1];
            let minumumFuel = Number(actionSplit[2]);
            let changedPosition = Number(actionSplit[3]);

            let currentRiderFuel = riders[rider].fuelCapacity;

            // first condition
            if (currentRiderFuel < minumumFuel) {
                console.log(`${rider} stopped to refuel but lost his position, now he is ${changedPosition}.`)
                riders[rider].position = changedPosition; // to change the rider's position
            } else {
                console.log(`${rider} does not need to stop for fuel!`)
            }

            // second condition
        } else if (currentAction === "Overtaking") { // actionSplit = ["Overtaking", "Marc Marquez", "Jorge Lorenzo"]
            riderOne = actionSplit[1];
            riderTwo = actionSplit[2];

            riderOnePosition = riders[riderOne].position;
            riderTwoPosition = riders[riderTwo].position;

            if (riderOnePosition < riderTwoPosition) {
                console.log(`${riderOne} overtook ${riderTwo}!`) // printing the message
                riders[riderOne].position = riderTwoPosition; // changing the position of the rider
                riders[riderTwo].position = riderOnePosition; // changing the position of the rider
            }

            // third condition
        } else if (currentAction === "EngineFail") { // actionSplit = ["EngineFail", "Marc Marquez", "10"]
            let currentRider = actionSplit[1];
            let lapsLeft = Number(actionSplit[2]);

            delete riders[currentRider]; // deleting the rider from the object

            console.log(`${currentRider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`)

            // fourth condition
        } else if (currentAction == "Finish") { 
            break; // breaking the for loop after receiving the "Finish" command
        }
    }

    // printing the final output

    for (const currentRider in riders) {
        let finalPosition = riders[currentRider].position;

        console.log(`${currentRider}`);
        console.log(`  Final position: ${finalPosition}`);
    }
    

}

resolve((["3",
"Valentino Rossi|100|1",
"Marc Marquez|90|2",
"Jorge Lorenzo|80|3",
"StopForFuel - Valentino Rossi - 50 - 1",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"])
);

resolve((["4",
"Valentino Rossi|100|1",
"Marc Marquez|90|3",
"Jorge Lorenzo|80|4",
"Johann Zarco|80|2",
"StopForFuel - Johann Zarco - 90 - 5",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"])
);