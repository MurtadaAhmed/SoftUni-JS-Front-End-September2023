function solve(input){

    const riderCount = Number(input.shift()); // 3
    const riders = {}; // name of the rider is the key, the value is the fuel and the position

    // Fill the object with the riders information
    for (let index = 0; index < riderCount; index++) {
        const currentRider = input.shift() // Valentino Rossi|100|1
        const currentRiderSplit = currentRider.split('|'); // ["Valentino Rossi", "100", "1"]
        const riderName = currentRiderSplit[0]; // Valentino Rossi
        const riderFuel = Number(currentRiderSplit[1]); // 100
        const riderPosition = Number(currentRiderSplit[2]); // 1

        riders[riderName] = {riderFuel, riderPosition}; // {Valentino Rossi: {riderFuel: 100, riderPosition: 1}}
        
    };

    // Loop through the commands
    let command = input.shift(); // StopForFuel - Valentino Rossi - 50 - 1
    while(command !== "Finish") {
        const commandSplit = command.split(' - '); // ["StopForFuel", "Valentino Rossi", "50", "1"]
        const action = commandSplit[0]; // StopForFuel

        switch (action) {
            case "StopForFuel": // ["StopForFuel", "Valentino Rossi", "50", "1"]
                let rider = commandSplit[1]; // Valentino Rossi
                let minimumFuel = Number(commandSplit[2]); // 50
                let changedPosition = Number(commandSplit[3]); // 1
                
                if (riders[rider].riderFuel < minimumFuel) {
                    riders[rider].riderPosition = changedPosition;
                    console.log(`${rider} stopped to refuel but lost his position, now he is ${changedPosition}.`);
                } else {
                    console.log(`${rider} does not need to stop for fuel!`);
                }
                break;
        
            case "Overtaking":
                let firstRider = commandSplit[1]; // Marc Marquez
                let secondRider = commandSplit[2]; // Jorge Lorenzo
                if (riders[firstRider].riderPosition < riders[secondRider].riderPosition) {
                    const firstRiderPosition = riders[firstRider].riderPosition; 
                    const secondRiderPosition = riders[secondRider].riderPosition;
                    riders[firstRider].riderPosition = secondRiderPosition;
                    riders[secondRider].riderPosition = firstRiderPosition;
                    console.log(`${firstRider} overtook ${secondRider}!`);
                }
                break;

            case "EngineFail":
                let riderToFail = commandSplit[1]; // Marc Marquez
                let lapsLeft = Number(commandSplit[2]); // 10
                delete riders[riderToFail];
                console.log(`${riderToFail} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
                break;
        }


        command = input.shift();
    }

    // printing the final result:
    for (const [key, value] of Object.entries(riders)) {
        console.log(key)
        console.log(`  Final position: ${riders[key].riderPosition}`)
    }
}

solve((["3", "Valentino Rossi|100|1", "Marc Marquez|90|2", "Jorge Lorenzo|80|3", "StopForFuel - Valentino Rossi - 50 - 1", "Overtaking - Marc Marquez - Jorge Lorenzo", "EngineFail - Marc Marquez - 10", "Finish"]));
solve((["4", "Valentino Rossi|100|1", "Marc Marquez|90|3", "Jorge Lorenzo|80|4", "Johann Zarco|80|2", "StopForFuel - Johann Zarco - 90 - 5", "Overtaking - Marc Marquez - Jorge Lorenzo", "EngineFail - Marc Marquez - 10", "Finish"]));