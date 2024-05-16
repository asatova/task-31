const quote = document.querySelector(".quote");
const text = document.querySelector(".quote__text");
const author = document.querySelector(".quote__author");
const btn = document.querySelector("#btn");

function getQuote() {
    fetch("https://type.fit/api/quotes")
        .then((res) => res.json())
        .then((data) => {
            let index = Math.floor(Math.random() * data.length); // Changed to use data.length
            text.textContent = data[index].text;
            author.textContent = data[index].author; // Changed to author
        });
    setTimeout(() => {
        btn.classList.add("active");
    }, 300);
}

function newQuote(e) {
    if (!e.target.matches("button.active")) return;
    getQuote();
}

window.addEventListener("load", getQuote);
btn.addEventListener("click", newQuote); // Changed to add event listener to the button
