function movies(input){

    let moviesObject = {}
    let indexOfCommant = 0
    let movieName = ""

    for (const commandLine of input) {
        
        lineAsArray = commandLine.split(" ") // could contain addMovie, directedBy, onDate
        
        switch(true) {
            case lineAsArray.includes("addMovie"):
                movieName = lineAsArray.slice(1).join(" ")
                moviesObject[movieName] = {}
                moviesObject[movieName]["name"] = movieName

                break;

            case lineAsArray.includes("directedBy"):
                indexOfCommant = lineAsArray.indexOf("directedBy")
                movieName = lineAsArray.slice(0, indexOfCommant).join(" ")
                let director = lineAsArray.slice(indexOfCommant + 1).join(" ")

                if (moviesObject.hasOwnProperty(movieName)) {
                    moviesObject[movieName]["director"] = director
                }

                break;
            
            case lineAsArray.includes("onDate"):
                indexOfCommant = lineAsArray.indexOf("onDate")
                movieName = lineAsArray.slice(0, indexOfCommant).join(" ")
                let date = lineAsArray.slice(indexOfCommant + 1).join("")

                if (moviesObject.hasOwnProperty(movieName)) {
                    moviesObject[movieName]["date"] = date
                }

                break;
        }
        
    }

    for (const movie of Object.entries(moviesObject)) {
        let moviesInfo = movie[1]
        let moviesKeysLength = Object.keys(moviesInfo).length
        if (moviesKeysLength === 3) {
            console.log(JSON.stringify(moviesInfo))

        }
    }
}


movies([

    'addMovie Fast and Furious',
    
    'addMovie Godfather',
    
    'Inception directedBy Christopher Nolan',
    
    'Godfather directedBy Francis Ford Coppola',
    
    'Godfather onDate 29.07.2018',
    
    'Fast and Furious onDate 30.07.2018',
    
    'Batman onDate 01.08.2018',
    
    'Fast and Furious directedBy Rob Cohen'
    
    ] )
movies([

    'addMovie The Avengers',
    
    'addMovie Superman',
    
    'The Avengers directedBy Anthony Russo',
    
    'The Avengers onDate 30.07.2010',
    
    'Captain America onDate 30.07.2010',
    
    'Captain America directedBy Joe Russo'
    
    ])