function inventory (input) {
    let heros =[];
    for (const heroData of input) {
        let herosAsArray = heroData.split(" / ") // ['Isacc', '25', 'Apple, GravityGun']
        let heroName = herosAsArray[0]
        let level = Number(herosAsArray[1])
        let items = herosAsArray[2]
        let hero = {
            heroName, level: level, items
        }
    
        heros.push(hero)
        
    } 

    heros.sort((a, b) => a.level - b.level)
    
    for (const hero of heros) {
        console.log(`Hero: ${hero.heroName}`)
        console.log(`level => ${hero.level}`)
        console.log(`items => ${hero.items} `)
    }
    
}



inventory([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ])
inventory([

    'Batman / 2 / Banana, Gun',
    
    'Superman / 18 / Sword',
    
    'Poppy / 28 / Sentinel, Antara'
    
    ])