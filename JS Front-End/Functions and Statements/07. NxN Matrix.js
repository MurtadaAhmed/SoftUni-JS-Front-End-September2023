function matrix(number) {
    for (let NumberOfRows = 1; NumberOfRows <= number; NumberOfRows++) {

        let row = "";

        for (let currentRow = 1; currentRow <= number; currentRow++) {
            row += number + " ";
        }

        console.log(row);
    }

}

matrix(3)
matrix(7)