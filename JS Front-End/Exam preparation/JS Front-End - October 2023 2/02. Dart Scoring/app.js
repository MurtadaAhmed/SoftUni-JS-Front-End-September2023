window.addEventListener("load", solve);

function solve() {
    let name = document.getElementById("player");
    let score = document.getElementById("score");
    let round = document.getElementById("round");
    let addButton = document.getElementById("add-btn");
    let sureList = document.getElementById("sure-list"); // sure list
    let scoreboardList = document.getElementById("scoreboard-list"); // scoreboard list
    let clearButton = document.querySelector(".clear");

    addButton.addEventListener("click", addPlayer);
    
    function addPlayer(e) {

      if (name.value === "" || score.value === "" || round.value === "") {
        return; 
      }

      // creating elements
      let li = document.createElement("li");
      li.className = "dart-item";

      let article = document.createElement("article");

      let pName = document.createElement("p");
      let pScore = document.createElement("p");
      let pRound = document.createElement("p");

      let editButton = document.createElement("button");
      editButton.className = "btn edit";
      editButton.textContent = "edit";

      let okButton = document.createElement("button");
      okButton.className = "btn ok";
      okButton.textContent = "ok";

      // filling the content of the elements
      pName.textContent = name.value;
      pScore.textContent = `Score: ${score.value}`;
      pRound.textContent = `Round: ${round.value}`;

      // appending all the elements to li
      article.appendChild(pName);
      article.appendChild(pScore);
      article.appendChild(pRound);
      li.appendChild(article);
      li.appendChild(editButton);
      li.appendChild(okButton);

      // appending the li to the sure list
      sureList.appendChild(li);

      // clearing the input fields
      name.value = "";
      score.value = "";
      round.value = "";

      // disabling the add button
      addButton.disabled = true;

      // adding event listeners to the edit and ok buttons
      editButton.addEventListener("click", editPlayer);
      okButton.addEventListener("click", okPlayer);

      function editPlayer(e) {
        addButton.disabled = false;
        // filling the input fields
        name.value = pName.textContent;
        score.value = pScore.textContent.split(" ")[1];
        round.value = pRound.textContent.split(" ")[1];

        // removing the li from the sure list
        sureList.removeChild(li);
      }

    function okPlayer(e) {
      // moving the dom to the scoreboard list
      scoreboardList.appendChild(li);

      // removing the edit and ok buttons
      li.removeChild(editButton);
      li.removeChild(okButton);

      // adding the add button
      addButton.disabled = false;

    }

    clearButton.addEventListener("click", clearScoreboard);

    function clearScoreboard(e) {
      // removing all the li elements from the scoreboard list
      scoreboardList.innerHTML = "";
    
    }


    }


  }
  



// <!DOCTYPE html>
// <html lang="en">

// <head>
//   <meta charset="UTF-8" />
//   <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <link rel="stylesheet" href="./css/styles.css" />
//   <title>Dart Scoring</title>
// </head>

// <body>

//   <body>
//     <main id="main">
//       <div id="dart-container">

//         <div id="form-container" class="container">

//           <form class="scoring-content">
//             <h1>Dart Scoring</h1>
           
//             <input type="text" placeholder="Player Name" id="player" />
 
//             <input type="number" placeholder="Score" id="score" />

//             <input type="number" placeholder="Round" id="round">

//             <button type="button" id="add-btn">Add &#10165;</button>
//           </form>
//         </div>
//       </div>

//       <div id="score-container">

//         <div class="container">

//           <div class="dart title-dart ">
//             <h2>Make Sure It's Spot-On!</h2>
//             <ul id="sure-list"></ul>
//           </div>

//         </div>
//         <div id="players-container">
//           <div class="container">
//             <div class="dart title-dart board">
//               <h2>Scoreboard</h2>
//               <ul id="scoreboard-list"></ul>
//               <button class="btn clear">Clear</button>
//             </div>

            
//           </div>
//         </main>
//         <script src="./app.js"></script>
//   </body>

// </html>