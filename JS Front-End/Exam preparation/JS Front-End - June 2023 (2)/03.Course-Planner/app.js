const taskUrl = 'http://localhost:3030/jsonstore/tasks'

const loadButtonElement = document.getElementById("load-course");
const addButtonElement = document.getElementById("add-course");
const editSubmitButtonElement = document.getElementById("edit-course")

loadButtonElement.addEventListener('click', loadCourses);
addButtonElement.addEventListener('click', addCourse);
editSubmitButtonElement.addEventListener('click', editCourse);



const courseListElement = document.getElementById("list");

const courseTitleElement = document.getElementById("course-name")
const courseTypeElement = document.getElementById("course-type")
const courseDescriptionElement = document.getElementById("description")
const courseTeacherElement = document.getElementById("teacher-name")

let currentCourseId = ''; // to be used in the edit part of the task

const courseTypes = ['Long', 'Medium', 'Short'];


async function editCourse(e) {
    e.preventDefault();
    const title = courseTitleElement.value;
    const type = courseTypeElement.value;
    const description = courseDescriptionElement.value;
    const teacher = courseTeacherElement.value;

    if (!courseTypes.includes(type)) {
        return;
    };

    const course = {
        title,
        type,
        description,
        teacher,
    };

    await fetch(`${taskUrl}/${currentCourseId}`, {
        method: "PUT",
        body : JSON.stringify(course),
    })

    courseTitleElement.value = '';
    courseTypeElement.value = '';
    courseDescriptionElement.value = '';
    courseTeacherElement.value = '';

    editSubmitButtonElement.disabled = true;
    addButtonElement.disabled = false;

    await loadCourses()

}


async function addCourse(e) {
    e.preventDefault(); // to prevent this error: (Uncaught (in promise) TypeError: NetworkError when attempting to fetch resource.)
    const title = courseTitleElement.value;
    const type = courseTypeElement.value;
    const description = courseDescriptionElement.value;
    const teacher = courseTeacherElement.value;

    if (!courseTypes.includes(type)) {
        return;
    };

    const course = {
        title,
        type,
        description,
        teacher,
    };

    await fetch(taskUrl, {
        method: 'POST',
        body: JSON.stringify(course),

    } );


    courseTitleElement.value = '';
    courseTypeElement.value = '';
    courseDescriptionElement.value = '';
    courseTeacherElement.value = '';

    

    await loadCourses();
};

async function loadCourses() {
    const response = await fetch(taskUrl);
    const data = await response.json();

    const courses = Object.values(data);
    
    courseListElement.innerHTML = "";
    
    for (const course of courses) {
        const courseElement = renderCourse(course);
        courseElement.setAttribute('data-course-id', course._id); // to be used in edit part of the tast
        courseListElement.appendChild(courseElement);
    };
};


function renderCourse(course) {

    const headingElement = document.createElement("h2");
    headingElement.textContent = course.title;

    const teacherElement = document.createElement("h3")
    teacherElement.textContent = course.teacher;

    const typeElement = document.createElement("h3")
    typeElement.textContent = course.type;

    const descriptionElement = document.createElement('h4');
    descriptionElement.textContent = course.description // description from json file

    const editButtonElement = document.createElement("button");
    editButtonElement.className = "edit-btn";
    editButtonElement.textContent = "Edit Course"

    const finishButtonElement = document.createElement("button");
    finishButtonElement.className = "finish-btn";
    finishButtonElement.textContent = "Finish Course";

    const courseContainer = document.createElement("div")
    courseContainer.className = "container";
    courseContainer.appendChild(headingElement);
    courseContainer.appendChild(teacherElement);
    courseContainer.appendChild(typeElement);
    courseContainer.appendChild(descriptionElement);
    courseContainer.appendChild(editButtonElement);
    courseContainer.appendChild(finishButtonElement);


    // Edit a Course
    editButtonElement.addEventListener('click', (e) => {
        courseTitleElement.value = course.title;
        courseTypeElement.value = course.type;
        courseDescriptionElement.value = course.description;
        courseTeacherElement.value = course.teacher

        currentCourseId = courseContainer.getAttribute("data-course-id"); // to be used in the edit part of the task
        courseContainer.remove()

        editSubmitButtonElement.disabled = false;
        addButtonElement.disabled = true;



    });

    // FInish a course
    finishButtonElement.addEventListener('click', async(e) => {

        await fetch(`${taskUrl}/${course._id}`, {
            method: 'DELETE',

        })

        await loadCourses()
    })

    return courseContainer;

}