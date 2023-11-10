function loadingBar(number) {
    if (number === 100) {
        console.log("100% Complete!")
    } else {
        moduleSignsCount = number/10
        moduleSigns = "%".repeat(moduleSignsCount)
        dotsCount = 10 - moduleSignsCount
        dotsSigns = ".".repeat(dotsCount)
        console.log(`${number}% [${moduleSigns}${dotsSigns}]\nStill loading...`)

    }
}


loadingBar(30)
loadingBar(50)
loadingBar(100)