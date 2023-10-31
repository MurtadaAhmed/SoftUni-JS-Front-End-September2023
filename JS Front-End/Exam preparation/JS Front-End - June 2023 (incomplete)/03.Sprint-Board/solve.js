

const taskSections = {
    ToDo: document.querySelector("#todo-section .task-list"),
    "In Progress": document.querySelector("#in-progress-section .task-list"),
    "Code Review": document.querySelector("#code-review-section .task-list"),
    Done: document.querySelector("#done-section .task-list"),


}

const statusToNextStatusMap = {
    ToDo: "In Progress",
    "In Progress": "Code Review",
    "Code Review": "Done",
    Done: "Close",


}

const inputs = {
    title: document.querySelector("#title"),
    description: document.querySelector("#description"),
}


const APIT_URL = 'http://localhost:3030/jsonstore/tasks/'
let tasks = {};

function attachEvents() {
    document.querySelector("#load-board-btn").addEventListener("click", loadTasks);
    document.querySelector('#create-task-btn').addEventListener("click", createTask);
}

async function createTask() {
    if (Object.values(inputs).some(input => input.value === "")) {
        return;
    };

    const task = {
        title: inputs.title.value,
        description: inputs.description.value,
        status: "ToDo",
    };

    fetch(APIT_URL, {
        method: "POST",
        body: JSON.stringify(task),
    }).then(() => {
        loadTasks();
        inputs.title.value = "";
        inputs.description.value = "";
    });
    
}

async function loadTasks() {
     tasks = await (await fetch(APIT_URL)).json();
    
    Object.values(taskSections).forEach((section) => (section.textContent = ""));

    Object.values(tasks).forEach((task) => {
        const section = taskSections[task.status];
        
        const item = createElement("li", null, ["task"], null, section);
        createElement("h3", task.title, [], null, item);
        createElement("p", task.description, [], null, item);
        const button = createElement("button",
        statusToNextStatusMap[task.status] === "Close" ? "Close"
        : `Move To ${statusToNextStatusMap[task.status]}`, [], task._id, item)
        button.addEventListener("click", moveTask);
    });
};

function createElement(type, textContent, classes, id, parent) {
    const element = document.createElement(type);

    if (textContent) {
      element.textContent = textContent;
    }

    if (classes && classes.length > 0) {
      element.classList.add(...classes);
    }

    if (id) {
      element.setAttribute("id", id);
    }

    if (parent) {
      parent.appendChild(element);
    }

    return element;
  };


async function moveTask(e) {
    const task = tasks[e.currentTarget.getAttribute("id")];

    let method = "PATCH";
    let body = JSON.stringify({
        ...task,
        status: statusToNextStatusMap[task.status],
    })

    if (task.status === "Done") {
        method = "DELETE";
        body = undefined;
    }

    await fetch(`${APIT_URL}/${task._id}`, {
    method,
    body,
    })
    loadTasks();
}



attachEvents();