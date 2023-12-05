function sortingNumbers(numbers) {
    sorted = numbers.sort((a,b) => a - b)

    copySorted = sorted.slice()
    result = []

    for (let i = 0; i < copySorted.length/2; i++) {
        
        result.push(sorted.shift())
        result.push(sorted.pop())
    
    }
 
    return result
}


sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])