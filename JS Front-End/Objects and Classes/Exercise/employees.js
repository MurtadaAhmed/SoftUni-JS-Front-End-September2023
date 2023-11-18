function employees(input) {
    
    for (const employee of input) {
        let employeeNumber = employee.length
        
        console.log(`Name: ${employee} -- Personal Number: ${employeeNumber}`)
    }

}




employees([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ] )

employees([

    'Samuel Jackson',
    
    'Will Smith',
    
    'Bruce Willis',
    
    'Tom Holland'
    
    ] )