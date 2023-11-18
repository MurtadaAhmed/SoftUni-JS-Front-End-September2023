function piccolo(input) {

    let cars = [];

    for (const element of input) {
        elementAsArray = element.split(", ") // ['IN', 'CA2844AA']
        
        command = elementAsArray[0] // IN , OUT
        carNum = elementAsArray[1]

        if(command === "IN") {
            if (!cars.includes(carNum)) {
                cars.push(carNum)
            }
        } else if(command === "OUT") {
            if (cars.includes(carNum)) {
                indexOfCar = cars.indexOf(carNum)
                cars.splice(indexOfCar, 1);
            }
        }

    }

    if (cars.length > 0) {
        sortedCars = cars.sort();
        for (const car of sortedCars) {
            console.log(car)
        }
    } else {
        console.log("Parking Lot is Empty")
    }
}

piccolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU'])
piccolo(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'OUT, CA1234TA'])