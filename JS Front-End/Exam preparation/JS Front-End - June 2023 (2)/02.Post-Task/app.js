window.addEventListener("load", solve);

function solve() {
  const publishButton = document.getElementById("publish-btn")

  publishButton.addEventListener('click', (e) => {
    const titleElement = document.getElementById("task-title")
    const categoryElement = document.getElementById("task-category")
    const contentElement = document.getElementById("task-content")

    const title = titleElement.value;
    const category = categoryElement.value;
    const content = contentElement.value;


    if (!title|| !category || !content) {
        return;
    };


    /* 
    1. Getting the information from the task
    When you click the [Publish] button, the information from the input fields must be added to the <ul> with
    the id "review-list" and the input fields should be cleared.
    */

    const titleHeaderElement = document.createElement("h4");
    titleHeaderElement.textContent = title;

    const categoryParagraphElement = document.createElement("p");
    categoryParagraphElement.textContent = `Category: ${category}`;

    const contentParagraphElement = document.createElement("p");
    contentParagraphElement.textContent = `Content: ${content}`;

    const articleElement = document.createElement("article");
    articleElement.appendChild(titleHeaderElement);
    articleElement.appendChild(categoryParagraphElement);
    articleElement.appendChild(contentParagraphElement);

    const buttonElement = document.createElement("button");
    buttonElement.classList.add("action-btn");

    const buttonEditElement = buttonElement.cloneNode();
    buttonEditElement.classList.add("edit");
    buttonEditElement.textContent = "Edit";

    const buttonPostElement = buttonElement.cloneNode();
    buttonPostElement.classList.add("post");
    buttonPostElement.textContent = "Post";


    const listItemElement = document.createElement("li");
    listItemElement.className = "rpost";
    listItemElement.appendChild(articleElement);
    listItemElement.appendChild(buttonEditElement);
    listItemElement.appendChild(buttonPostElement);


    const reviewListElement = document.getElementById('review-list');
    reviewListElement.appendChild(listItemElement);

    // removing the element contents from the input fields;
    titleElement.value = "";
    categoryElement.value = "";
    contentElement.value = "";


    /*
    2. Edit information for task
    When the [Edit] button is clicked, the information from the post must be sent to the input fields on the left
    side and the record should be deleted from the <ul> "review-list".
    After editing the information, add a new item to the <ul> with the updated information
    */

    buttonEditElement.addEventListener('click', (e) => {

        // filling up the input fields on the left side with the element contents:
        titleElement.value = title;
        categoryElement.value = category;
        contentElement.value = content;

        // remove the element from the right side
        listItemElement.remove(); 

    })

    /*
    3. Post Task
    When you click the [Post] button, the task must be deleted from the <ul> with id "review-list" and
    appended to the <ul> with id "published-list".
    The buttons [Edit] and [Post] should be removed from the <li> element
    */
    
    const publishedListElement = document.getElementById("published-list");

    buttonPostElement.addEventListener('click', (e) => {
        buttonEditElement.remove();
        buttonPostElement.remove();
        
        publishedListElement.appendChild(listItemElement);
    })

  })
}