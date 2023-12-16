function solve (input) {
    let baritsasCount = Number(input.shift());
    
    let baristasPersonnel = {}; // {Alice: {shift: 'day', drinks: ['Espresso', 'Cappuccino']}}

    // extrating the baristsa from the input and save them with their details in the baristasPersonnel 
    for (let index = 0; index < baritsasCount; index++) {
        let currentBaritsaLine = input.shift();
        let currentBaritsaLineSplited = currentBaritsaLine.split(' ');
        let name = currentBaritsaLineSplited[0]
        let shift = currentBaritsaLineSplited[1];
        let drinks = currentBaritsaLineSplited[2].split(',');
        baristasPersonnel[name] = {shift, drinks};
    }

    // extracting the commands from the input and execute them (Pepare/Change/Learn/Closed)
    for (const currentCommandLine of input) {
        let currentCommandLineSplited = currentCommandLine.split(' / '); // ['Prepare', 'Alice', 'day', 'Espresso']
        
        let currentCommand = currentCommandLineSplited[0];

        if (currentCommand === 'Prepare') {
            let currentName = currentCommandLineSplited[1];
            let currentShift = currentCommandLineSplited[2];
            let currentDrink = currentCommandLineSplited[3];
            // TODO: TO CHECK IF THE PERSONNEL IS INCLUDED IN THE BARISTAS PERSONNEL (maybe not necessary)
            if (baristasPersonnel[currentName].shift === currentShift && baristasPersonnel[currentName].drinks.includes(currentDrink)) {
                console.log(`${currentName} has prepared a ${currentDrink} for you!`);
            } else if (baristasPersonnel[currentName].shift !== currentShift || !baristasPersonnel[currentName].drinks.includes(currentDrink)) {
                console.log(`${currentName} is not available to prepare a ${currentDrink}.`);
            } 

        } else if (currentCommand === 'Change Shift') { // "Change Shift / {barista name} / {new shift}" // TODO: check if the shift is the same (maybe not necessary)
            let currentNameChange = currentCommandLineSplited[1];
            let currentShiftChange = currentCommandLineSplited[2];
            baristasPersonnel[currentNameChange].shift = currentShiftChange;
            console.log(`${currentNameChange} has updated his shift to: ${currentShiftChange}`);


        } else if (currentCommand === 'Learn') { // currentCommandLineSplited >> ['Learn', 'Carol', 'Latte']
            let currentNameLearn = currentCommandLineSplited[1];
            let currentDrinkLearn = currentCommandLineSplited[2];
            if (baristasPersonnel[currentNameLearn].drinks.includes(currentDrinkLearn)) {
                console.log(`${currentNameLearn} knows how to make ${currentDrinkLearn}.`);
            } else if (!baristasPersonnel[currentNameLearn].drinks.includes(currentDrinkLearn)) {
                baristasPersonnel[currentNameLearn].drinks.push(currentDrinkLearn);
                console.log(`${currentNameLearn} has learned a new coffee type: ${currentDrinkLearn}.`);
            }

        } else if (currentCommand === 'Closed') {
            break;
        }
        
    }

    // final printing the baristasPersonnel to include (name, shift, drinks) // TODO: check if there is a need for some soring (maybe not necessary)
    for (const barista in baristasPersonnel) {
        console.log(`Barista: ${barista}, Shift: ${baristasPersonnel[barista].shift}, Drinks: ${baristasPersonnel[barista].drinks.join(', ')}`);
    }
    
}

solve([
    '3',
      'Alice day Espresso,Cappuccino',
      'Bob night Latte,Mocha',
      'Carol day Americano,Mocha',
      'Prepare / Alice / day / Espresso',
      'Change Shift / Bob / night',
      'Learn / Carol / Latte',
      'Learn / Bob / Latte',
      'Prepare / Bob / night / Latte',
      'Closed']
    );

console.log('------------------');

solve(['4',
'Alice day Espresso,Cappuccino',
'Bob night Latte,Mocha',
'Carol day Americano,Mocha',
'David night Espresso',
'Prepare / Alice / day / Espresso',
'Change Shift / Bob / day',
'Learn / Carol / Latte',
'Prepare / Bob / night / Latte',
'Learn / David / Cappuccino',
'Prepare / Carol / day / Cappuccino',
'Change Shift / Alice / night',
 'Learn / Bob / Mocha',
'Prepare / David / night / Espresso',
'Closed']
)
