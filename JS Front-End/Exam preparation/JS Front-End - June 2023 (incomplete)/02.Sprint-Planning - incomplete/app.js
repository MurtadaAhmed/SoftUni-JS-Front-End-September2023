window.addEventListener("load", solve);

function solve() {
  const tasks = {};
  const inputSelectors = {
    
    title: document.querySelector("#title"),
    description: document.querySelector("#description"),
    label: document.querySelector("#label"),
    points: document.querySelector("#points"),
    assignee: document.querySelector("#assignee"),
    
  };

  const selectors = {
    hiddenTaskId: document.querySelector("#task-id"),
    createButton: document.querySelector("#create-task-btn"),
    deleteButton: document.querySelector("#delete-task-btn"),
    taskSection: document.querySelector("#tasks-section"),
    totalPoints: document.querySelector("#total-sprint-points"),

  };

  const icons = {
    'Feature': '&#8865;',
    'Low Priority Bug' : '&#9737;',
    'High Priority Bug': '&#9888;',

  };

  const labelClasses = {
    'Feature': 'feature',
    'Low Priority Bug' : 'low-priority',
    'High Priority Bug': 'high-priority',
  }

  selectors.createButton.addEventListener("click", createTask);
  selectors.deleteButton.addEventListener("click", deleteTask);


  function loadDeleteConfirm(e) {
    const taskId = e.currentTarget.parentElement.parentElement.getAttribute("id");
    Object.keys(inputSelectors).forEach(key => {
      const selector = inputSelectors[key];
      selector.value = tasks[taskId][key];
      selector.disabled = true;
    });
    
    selectors.hiddenTaskId.value = taskId;
    selectors.createButton.disabled = true;
    selectors.deleteButton.disabled = false;

  };

  function deleteTask() {
    const taskId = selectors.hiddenTaskId.value;
    const taskElement = document.querySelector(`#${taskId}`);
    taskElement.remove();

    Object.values(inputSelectors).forEach(selector => {
      selector.value = '';
      selector.disabled = false;
    });
    selectors.createButton.disabled = true;
    selectors.deleteButton.disabled = false;
  }

  function createTask(e) {
    if (
      Object.values(inputSelectors).some(selector => selector.value === "")
    ) {
      return;
    }
    const task = {
      id: `task-${Object.values(tasks).length + 1}`,
      title: inputSelectors.title.value,
      description: inputSelectors.description.value,
      label: inputSelectors.label.value,
      points: Number(inputSelectors.points.value),
      assignee: inputSelectors.assignee.value,
    };

    tasks[task.id] = task;

    const article = createElement("article", null, ["task-card"], task.id);
    createElement(
      "div",
      `${task.label} ${icons[task.label]}`,
      ["task-card-label", labelClasses[task.label]],
      null,
      article,
      true
    );
    createElement("h3", task.title, ["task-card-title"], null, article);
    createElement(
      "p",
      task.description,
      ["task-card-description"],
      null,
      article
    );
    createElement("div", `Estimated at ${task.points}`, ["task-card-points"], null, article);
    createElement("div", `Assigned to ${task.assignee}`, ["task-card-assignee"], null, article);
    const taskActions = createElement("div", null, ['task-card-actions'], null, article);
    const button =  createElement('button', 'Delete', [], null, taskActions);
    button.addEventListener('click', loadDeleteConfirm)
    
    selectors.taskSection.appendChild(article);
    const totalPoints = Object.values(tasks).reduce((acc, curr) => acc + curr.points, 0 );
    selectors.totalPoints.textContent = `Total Points ${totalPoints}pts`;

    Object.values(selectors).forEach(selector => selector.value = '')

  }

  

  function createElement(type, textContent, classes, id, parent, useInnerHtml) {
    const element = document.createElement(type);

    if (useInnerHtml && textContent) {
      element.innerHTML = textContent;
    } else if (textContent) {
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
  }

  function loadDeleteConfirm(e) {
    const taskId = e.currentTarget.parentElement.parentElement.getAttribute("id");
    Object.keys(inputSelectors).forEach(key => {
      const selector = inputSelectors[key];
      selector.value = tasks[taskId][key];
      selector.disabled = true;
    })
    inputSelectors.title.value = tasks[taskId].title;
    inputSelectors.description.value = tasks[taskId].description;
    inputSelectors.label.value = tasks[taskId].label;
    inputSelectors.points.value = tasks[taskId].points;
    inputSelectors.assignee.value = tasks[taskId].assignee;
    selectors.hiddenTaskId.value = taskId;
    selectors.createButton.disabled = true;
    selectors.deleteButton.disabled = false;

  }
}
