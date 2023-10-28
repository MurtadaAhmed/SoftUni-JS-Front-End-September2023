function vacation(groupSize, type, day) {
    let price;
      if (type === 'Students') {
          if (day === 'Friday') {
        price = groupSize * 8.45
  
          } else if (day === 'Saturday') {
        price = groupSize * 9.80
  
          } else if (day === 'Sunday') {
        price = groupSize * 10.46
  
          }
      if (groupSize >= 30) {
        price = price * 0.85 // price *= 0.85
      }
      } else if (type === 'Business') {
      let businessTicketPrice;
      if (day === 'Friday') {
        price = groupSize * 10.90
        businessTicketPrice = 10.90
          } else if (day === 'Saturday') {
        price = groupSize * 15.60
        businessTicketPrice = 15.60
          } else if (day === 'Sunday') {
        price = groupSize * 16
        businessTicketPrice = 16
          }
      if (groupSize >= 100) {
        discountedPrice = 10 * businessTicketPrice
        price -= discountedPrice
        
  
      }
      } else if (type === 'Regular') {
      if (day === 'Friday') {
        price = groupSize * 15
  
          } else if (day === 'Saturday') {
        price = groupSize * 20
  
          } else if (day === 'Sunday') {
        price = groupSize * 22.50
  
          }
  
        if (groupSize >= 10 && groupSize <= 20) {
           price *= 0.95
      }
     
  }
  console.log(`Total price: ${price.toFixed(2)}`)
  }
  
  
  vacation(30, 'Students', 'Sunday');
  vacation(40, 'Regular', 'Saturday');
  vacation(10, 'Business', 'Friday');