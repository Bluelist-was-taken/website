import { explorer_search } from "./bluelist_api.js"

var code = new URL(window.location.href)
code = code.search
const index = code.search("code=") + 5
const end = code.indexOf("&", index)
console.log(code.slice(index, end != -1 ? code.length : end))

var callAPI = null

function copyUUID() {
    try {
        navigator.clipboard.writeText(document.querySelector("#minecraft .id").textContent)
    } catch (error) {
        alert("We don't have the Permission to write something to your clipboard")
    }
}

function copyID() {
    try {
        navigator.clipboard.writeText(document.querySelector("#discord .id").textContent)
    } catch (error) {
        alert("We don't have the Permission to write something to your clipboard")
    }
}

function handle_input(value) {
    if (callAPI !== null) {
        clearTimeout(callAPI)
    }
    callAPI = setTimeout(update_search_results, 400, value)
}

document.getElementById('searchbar').addEventListener('input', (event) => {
    handle_input(event.target.value);
});

function update_search_results(query) {
    if (query != "") {
        explorer_search(query)
            .then(data => {
                document.querySelector("#minecraft #name").textContent = data["minecraft"]["name"];
                document.querySelector("#minecraft #id").textContent = data["minecraft"]["uuid"];
                document.querySelector("#minecraft #image").src = data["minecraft"]["head"];
                document.querySelector("#discord #name").textContent = data["discord"]["name"];
                document.querySelector("#discord #id").textContent = data["discord"]["id"];
                document.querySelector("#discord #image").src = data["discord"]["avatar"];

                document.getElementById("results").style.display = "grid";
                document.getElementById("error").style.display = "none";
            })
            .catch(error => {
                document.getElementById("error").textContent = error.message;
                document.getElementById("error").style.display = "block";
                document.getElementById("results").style.display = "none";
            });

    } else {
        document.getElementById("results").style.display = "none";
        document.getElementById("error").style.display = "none";
    }
}

// Funktionen fürs HTML zugänglich machen
window.handle_input = handle_input
