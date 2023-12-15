window.addEventListener("load", solve);

function solve() {

  // capturring the elements:
  // inputs
  let studetName = document.getElementById("student");
  let universityName = document.getElementById("university");
  let score = document.getElementById("score");
  // Next Button
  let nextButton = document.getElementById("next-btn");
  // Preview
  let ulPreviewList = document.getElementById("preview-list");
  // Scholarship candidates
  let ulCandidatesList = document.getElementById("candidates-list");


  // Next Button Event Listener
  nextButton.addEventListener('click', () => {

    // checking if there is an empty input
    if (studetName.value == '' || universityName.value == '' || score.value == '') {
      return;
    }

    // taking the values from the inputs
    let student = studetName.value;
    let university = universityName.value;
    let currentScore = score.value;

    // creating the elements
    let li = document.createElement('li');
    li.className = "application";

    let article = document.createElement('article');

    let h4 = document.createElement('h4');
    let pUniversity = document.createElement('p');
    let pScore = document.createElement('p');

    let editButton = document.createElement('button');
    editButton.textContent = "edit";
    editButton.className = "action-btn edit";

    let applyButton = document.createElement('button');
    applyButton.textContent = "apply";
    applyButton.className = "action-btn apply";

    // filling the contents of the elements from the inputs values
    h4.textContent = `${student}`
    pUniversity.textContent = `University: ${university}`
    pScore.textContent = `Score: ${currentScore}`

    // appending the elements
    li.appendChild(article);
    li.appendChild(editButton);
    li.appendChild(applyButton);

    article.appendChild(h4);
    article.appendChild(pUniversity);
    article.appendChild(pScore);

    ulPreviewList.appendChild(li);

    // disabling next button
    nextButton.disabled = true;

    // clearing input fields
    studetName.value = '';
    universityName.value = '';
    score.value = '';


  // Edit information 
  editButton.addEventListener('click', () => {
    // sending the infomration to the inputs:
    studetName.value = h4.textContent;
    universityName.value = university;
    score.value = currentScore;
    // deleting the element:
    li.remove();

   // enabling next button:
    nextButton.disabled = false;

  })

  // Apply for scholarship:
  applyButton.addEventListener('click', () => {
    // removing the edit and apply buttons:
    li.removeChild(editButton);
    li.removeChild(applyButton);

    // adding the element to the candidates list and automatically removes it from the preview list:
    ulCandidatesList.appendChild(li);
        
    // enabling next button:
    nextButton.disabled = false;


  });


  })



  
  
  }
  