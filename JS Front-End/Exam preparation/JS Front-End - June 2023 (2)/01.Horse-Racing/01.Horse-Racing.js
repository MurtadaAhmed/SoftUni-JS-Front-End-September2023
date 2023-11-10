function solve(input) {
    const horsesInput = input.shift();
    const horses = horsesInput.split("|");

    let line = input.shift();

    while(line != "Finish") {
        let lineArr = line.split(" ");
        let command = lineArr[0];
        let firstHorse = lineArr[1];
        let secondHorse = lineArr[2];

        switch(command) {
            case "Retake":
                let firstHorsePosition = horses.indexOf(firstHorse)
                let secondHorsePosition = horses.indexOf(secondHorse)
                if (firstHorsePosition < secondHorsePosition) {
                    horses[firstHorsePosition] = secondHorsePosition;
                    horses[secondHorsePosition] = firstHorsePosition;
                    
                    console.log(`${firstHorse} retakes ${secondHorse}.`)
                }
                break;

            case "Trouble":
                let horsePosition = horses.indexOf(firstHorse)
                if (horsePosition > 0) {
                    horses[horsePosition] = horses[horsePosition - 1]
                    horses[horsePosition - 1] = firstHorse;

                    console.log(`Trouble for ${firstHorse} - drops one position.`)
                }

                break;

            case "Rage":

                break;

            case "Miracle":

                break;
        }


        line = input.shift();
    }
    
    // TODO: print the result

}

solve([
  "Bella|Alexia|Sugar",
  "Retake Alexia Sugar",
  "Rage Bella",
  "Trouble Bella",
  "Finish",
]);

solve([
  "Onyx|Domino|Sugar|Fiona",
  "Trouble Onyx",
  "Retake Onyx Sugar",
  "Rage Domino",
  "Miracle",
  "Finish",
]);

solve([
  "Fancy|Lilly",
  "Retake Lilly Fancy",
  "Trouble Lilly",
  "Trouble Lilly",
  "Finish",
  "Rage Lilly",
]);
