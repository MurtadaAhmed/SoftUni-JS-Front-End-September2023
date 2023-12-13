function attachEvents() {
  baseUrl = "http://localhost:3030/jsonstore/collections/books";
  const bookList = document.getElementById("book-list");

  const loadBooksButton = document.getElementById("loadBooks");

  const submitButton = document.querySelector("#form button");

  const titleInput = document.querySelector("#form input[name=title]");
  const authorInput = document.querySelector("#form input[name=author]");

  
  loadBooksButton.addEventListener("click", loadBooks)
  
  async function loadBooks () {
    bookList.innerHTML = "";
    response = await fetch(baseUrl);
    data = await response.json();
    const books = Object.values(data);

    for (const book of books) {
      const bookTr = createBookElement(book);
      bookList.appendChild(bookTr);
    }
  }
  


  function createBookElement(book) {
    const bookTr = document.createElement("tr");
    bookTr.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>
    <button>Edit</button>
    <button>Delete</button>
    </td>
    `;
    return bookTr;
  }

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const title = titleInput.value;
    const author = authorInput.value;
    if (!title || !author) {
      return;
    }
    const book = {
      title,
      author,
    };

    fetch(baseUrl, {
      method: "POST",
      body: JSON.stringify(book),
    })

    loadBooks();
    titleInput.value = "";
    authorInput.value = "";


  });
}

attachEvents();
