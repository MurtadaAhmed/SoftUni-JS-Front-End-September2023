function solve() {

   // Add a click event listener to the element with the ID 'btnSend', invoking the onClick function
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      // Parse the input JSON from the textarea
      let input = JSON.parse(document.querySelector('textarea').value);

      // Get output elements
      let bestRestaurantOutput = document.querySelector('#bestRestaurant p');
      let bestWorkersOutput = document.querySelector('#workers p');

      // Initialize an array to store restaurant data: [name, average salary, workers, salaries]
      let restaurant = [0, 0, 0, 0];

      // Loop through each line in the input
      input.forEach(line => {
         // Extract restaurant name, workers, and salaries from the line
         line = line.match(/[^-,\s]+/g);  // Use regex to extract words from the line
         let restaurantName = line.shift();  // Extract the first word as the restaurant name
         let workers = line.filter(e => isNaN(e));  // Filter non-numeric elements as workers
         let salaries = line.filter(e => !isNaN(e));  // Filter numeric elements as salaries

         // Check if the current restaurant is the same as the one stored in the array
         if (restaurant[0] === restaurantName) {
            // If yes, update the workers and salaries
            restaurant[2].push(...workers);
            restaurant[3].push(...salaries);
            restaurant[1] = calcAverageSalary(restaurant[3]);
         } else {
            // If no, calculate the average salary of the current restaurant
            let averageSalary = calcAverageSalary(salaries);
            // Compare with the average salary stored in the array
            if (averageSalary > restaurant[1]) {
               // If higher, update the restaurant data
               restaurant[0] = restaurantName;
               restaurant[1] = averageSalary;
               restaurant[2] = workers;
               restaurant[3] = salaries;
            }
         }
      });

      // Calculate the average salary and the highest salary
      function calcAverageSalary(salaries) {
         return salaries.reduce((a, b) => Number(a) + Number(b)) / salaries.length;
      }
      function calcHighestSalary() {
         return Math.max.apply(null, restaurant[3]);
      }

      // Sort workers by salary in descending order
      function sortSalaries() {
         let workersAndSalaries = {};
         restaurant[2].forEach((e, i) => {
            workersAndSalaries[e] = restaurant[3][i];
         });
         let sorted = Object.entries(workersAndSalaries).sort((a, b) => b[1] - a[1]);
         print(sorted);
      }
      sortSalaries();

      // Display the results
      function print(sorted) {
         bestRestaurantOutput.textContent =
            `Name: ${restaurant[0]} Average Salary: ${(restaurant[1]).toFixed(2)} Best Salary: ${(calcHighestSalary()).toFixed(2)}`
         sorted.forEach(([name, salary]) => bestWorkersOutput.textContent += `Name: ${name} With Salary: ${salary} `);
      }
   }
}