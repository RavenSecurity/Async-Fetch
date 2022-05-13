const button = document.querySelector("button");
const ul = document.querySelector("ul");

button.addEventListener("click", function() {
    fetch("becode.json")
    .then(res => res.json())
    .then(data => {
            data.forEach((elem) => {
            const list = document.createElement("li");
            list.innerHTML = elem;
            ul.appendChild(list);
            });
    return data;
});
});