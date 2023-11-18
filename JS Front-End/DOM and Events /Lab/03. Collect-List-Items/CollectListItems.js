function extractText() {
    const list = Array.from(document.querySelectorAll("li"))
    
    const text = list.map((item) => {
       return item.textContent
    }).join("\n")


    document.getElementById("result").value = text
}