const input = document.querySelector("input")
const select = document.querySelector("select")
const button = document.querySelector("button");
const div = document.querySelector("div");

button.addEventListener("click", function() {
  fetch("https://api.agify.io/?name=" + input.value + "&country_id=" + select.value)
    .then(res => res.json())
    .then(data => {
        console.log(data)

        // Local Storage
        localStorage.setItem("Name", data.name);
        localStorage.setItem("Age", data.age);
        localStorage.setItem("Count", data.count);
        localStorage.setItem("Country", data.country_id);

        // Print result
        const list = document.createElement("div");
        list.innerHTML = data.name + ", " + data.age + " ans" + " (counted " + data.count + " times in " + data.country_id + ")"
        div.appendChild(list);
        return data;
});
}); 