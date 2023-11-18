function storeProvision(firstArray, secondArray) {
    let storeObject = {};

    for (let i = 0; i < firstArray.length; i+=2){
        let product = firstArray[i];
        let quantity = Number(firstArray[i+1]);

        storeObject[product] = quantity
    }

    for (let i = 0; i < secondArray.length; i+=2) {
        let product = secondArray[i];
        let quantity = Number(secondArray[i+1]);

        if (storeObject.hasOwnProperty(product)) {
            storeObject[product] += quantity;

        }else {
            storeObject[product] = quantity
        }
        
    }

    for (const product of Object.entries(storeObject)) {
        
        let productName = product[0]
        let productQuantity = product[1]

        console.log(`${productName} -> ${productQuantity}`)
    }


}

storeProvision([

    'Chips', '5', 'CocaCola', '9', 'Bananas',
    
    '14', 'Pasta', '4', 'Beer', '2'
    
    ],
    
    [
    
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    
    'Tomatoes', '70', 'Bananas', '30'
    
    ] )

storeProvision([ 'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5' ], [ 'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30' ])