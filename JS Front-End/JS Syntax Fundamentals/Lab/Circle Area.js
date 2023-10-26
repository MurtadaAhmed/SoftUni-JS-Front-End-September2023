function circleArea(input) {

    inputType = typeof(input);
    
    if (inputType === 'number') {
        area = input * input * Math.PI
        console.log(area.toFixed(2))
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`)
    }
}



circleArea(5)
circleArea('name')