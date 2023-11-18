function towns(input){

    
    
    for (const town of input) {
        let townsObj = {}

        let townAsArray = town.split(" | ")

        let townName = townAsArray[0]
        let latitude = parseFloat(townAsArray[1]).toFixed(2)
        let logitude = parseFloat(townAsArray[2]).toFixed(2)

        townsObj.town = townName
        townsObj.latitude = latitude
        townsObj.longitude = logitude

        console.log(townsObj)
    }
}

towns(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625'])

towns(['Plovdiv | 136.45 | 812.575'])