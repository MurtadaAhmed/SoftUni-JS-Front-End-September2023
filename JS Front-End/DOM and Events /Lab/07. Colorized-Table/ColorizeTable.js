function colorizeRows() {
    // selecting the even items:
    const rows = Array.from(document.querySelectorAll("tr:nth-child(even"))

    for (const row of rows) {
            row.style.background = "teal"
        }
    }
