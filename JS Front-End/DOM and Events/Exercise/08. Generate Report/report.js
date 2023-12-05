function generateReport() {
    let personObject = {};
    let personAllObjects = [];
    let columnSetNumbers = [];

    let columnsAll = document.querySelectorAll("thead tr th input");

    for (let i = 0; i < columnsAll.length; i++) {
        let checkBox = columnsAll[i].checked;

        if (checkBox) {
            columnSetNumbers.push(i) // adding the index of the columns with checked box

        }

    }

    let columnTitles = document.querySelectorAll("thead tr")[0].getElementsByTagName("th")

    let rowsCount = document.querySelectorAll("tbody tr").length;

    for (let row = 0; row < rowsCount; row++) {
        
        columnSetNumbers.forEach((element) => {
            let key = columnTitles[element].textContent.trim().toLowerCase(); // to remove the spaces from the titles and make them lower case
            let value = document.querySelectorAll("tbody tr")[row].getElementsByTagName("td")[element].textContent;
            personObject[key] = value;
        });

        personAllObjects.push(Object.assign(personObject));

        personObject = {};

    } 

    document.getElementById("output").innerHTML = JSON.stringify(personAllObjects)
}