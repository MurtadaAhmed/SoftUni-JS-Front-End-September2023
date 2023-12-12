async function attachEvents() {
  const baseUrl = 'http://localhost:3030/jsonstore/collections/students';
  const tableBody = document.querySelector('tbody');
  const submitButton = document.getElementById('submit');

  submitButton.addEventListener('click', addStudent);
  
  const getResponse = await fetch(baseUrl);

  const students = await getResponse.json();

  Object.values(students).forEach(student => {
    const row = document.createElement('tr');
    row.innerHTML = `
    <tr>
    <td>${student.firstName}</td>
    <td>${student.lastName}</td>
    <td>${student.facultyNumber}</td>
    <td>${student.grade}</td>
    </tr>`
    tableBody.appendChild(row);
  })

  async function addStudent(){
    const [firstName, lastName, facultyNumber, grade] = document.querySelectorAll('#form input');
    if(!firstName.value || !lastName.value || !facultyNumber.value || !grade.value){
      return;
    }

    const newStudentInfo = {
      firstName: firstName.value,
      lastName: lastName.value,
      facultyNumber: facultyNumber.value,
      grade: grade.value
    }

    await fetch(baseUrl, {
      method: 'post',
      body: JSON.stringify(newStudentInfo),
      
    })  
    const row = document.createElement('tr');
    row.innerHTML = `
    <tr>
    <td>${newStudentInfo.firstName}</td>
    <td>${newStudentInfo.lastName}</td>
    <td>${newStudentInfo.facultyNumber}</td>
    <td>${newStudentInfo.grade}</td>
    </tr>`
    tableBody.appendChild(row);


    firstName.value = '';
    lastName.value = '';
    facultyNumber.value = '';
    grade.value = '';
    
    }

    
  
}

attachEvents();