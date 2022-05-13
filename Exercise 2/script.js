const input = document.querySelector("input")
const select = document.querySelector("select")
const button = document.querySelector("button");
const div = document.querySelector("div");

button.addEventListener("click", function() {
  fetch("https://api.agify.io/?name=" + input.value + "&country_id=" + select.value)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const list = document.createElement("div");
        list.innerHTML = data.name + ", " + data.age + " ans";
        div.appendChild(list);
        return data;
});
}); 