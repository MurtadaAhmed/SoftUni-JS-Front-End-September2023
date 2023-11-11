function solve(input) {
    const horsesInput = input.shift();
    const horses = horsesInput.split("|");

    let line = input.shift();

    while(line != "Finish") {
        let lineArr = line.split(" ");
        let command = lineArr[0];
        let firstHorse = lineArr[1];
        let secondHorse = lineArr[2];
        let horsePosition = "";

        switch(command) {
            case "Retake":
                let firstHorsePosition = horses.indexOf(firstHorse)
                let secondHorsePosition = horses.indexOf(secondHorse)
                if (firstHorsePosition < secondHorsePosition) {
                    horses[firstHorsePosition] = secondHorse;
                    horses[secondHorsePosition] = firstHorse;
                    
                    console.log(`${firstHorse} retakes ${secondHorse}.`)
                }
                break;

            case "Trouble":
                horsePosition = horses.indexOf(firstHorse)
                if (horsePosition > 0) {
                    horses[horsePosition] = horses[horsePosition - 1]
                    horses[horsePosition - 1] = firstHorse;

                    console.log(`Trouble for ${firstHorse} - drops one position.`)
                }

                break;

            case "Rage":
                horsePosition = horses.indexOf(firstHorse)
                let lastIndex = horses.length - 1

                if (horsePosition != lastIndex) {
                    let targetIndex = Math.min(horsePosition + 2 , lastIndex)

                    let CurrentHorseRemoved = horses.splice(horsePosition, 1)[0]

                    horses.splice(targetIndex, 0, CurrentHorseRemoved)
                }


                console.log(`${firstHorse} rages 2 positions ahead.`)


                break;

            case "Miracle":
                let lastIndexInArray = horses.length - 1
                let removedHorse = horses.splice(0, 1)[0]
                

                horses.splice(lastIndexInArray, 0, removedHorse)


                console.log(`What a miracle - ${horses[lastIndexInArray]} becomes first.`)

                break;
        }


        line = input.shift();
    }
    
    console.log(horses.join("->"))
    console.log(`The winner is: ${horses[horses.length - 1]}`)

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
