function roadRadar(speed, area) {
    let status = ""; // speeding,accessive speeding, reckless driving
    let speedLimit =0;
    let difference =0;
    switch (area) {
       case "motorway":
          speedLimit = 130
          difference = speed - 130
          if (speed <= 130) {
             console.log( `Driving ${speed} km/h in a 130 zone`)
          } else {
             
             if (difference <= 20) {
                status = "speeding"
             } else if (difference <=40) {
                status = "accessive speeding"
             } else if (difference >40) {
                status = "reckless driving"
             }
          }
          break;
       case "interstate":
          speedLimit = 90;
          difference = speed - 90;
          if (speed <= 90) {
             console.log( `Driving ${speed} km/h in a 90 zone`)
          } else {
             
             if (difference <= 20) {
                status = "speeding"
             } else if (difference <=40) {
                status = "excessive speeding"
             } else if (difference >40) {
                status = "reckless driving"
             }
          }
          break;
       case "city":
          speedLimit = 50
          difference = speed - 50
          if (speed <= 50) {
             console.log( `Driving ${speed} km/h in a 50 zone`)
          } else {
             
             if (difference <= 20) {
                status = "speeding"
             } else if (difference <=40) {
                status = "excessive speeding"
             } else if (difference >40) {
                status = "reckless driving"
             }
          }
          break;
       case "residential":
          speedLimit = 20
          if (speed <= 20) {
             console.log( `Driving ${speed} km/h in a 20 zone`)
          } else {
             difference = speed - 20
             if (difference <= 20) {
                status = "speeding"
             } else if (difference <=40) {
                status = "excessive speeding"
             } else if (difference > 40) {
                status = "reckless driving"
             }
          }
          break;
       
    }
    if (status) {
       console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
    }
 
 }
 
 roadRadar(40, 'city' )
 roadRadar(21, 'residential')
 roadRadar(120, 'interstate' )
 roadRadar(200, 'motorway'  )