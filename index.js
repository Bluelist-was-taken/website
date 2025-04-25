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

function update_search_results(query) {
    data = explorer_search(query).then(data =>{

        document.querySelector("#minecraft .name").textContent = data["minecraft"]["name"];
        document.querySelector("#minecraft .id").textContent = data["minecraft"]["uuid"];
        document.querySelector("#minecraft .image").src = data["minecraft"]["head"];
        document.querySelector("#discord .id").textContent = data["discord"]["id"];
        document.querySelector("#discord .name").textContent = data["discord"]["name"];
        document.querySelector("#discord .image").src = data["discord"]["avatar"];
        // document.getElementById('minecraft_button').href = `https://namemc.com/profile/${data["minecraft"]["name"]}`;
        // document.getElementById('discord_button').href = `https://discord.com/users/${data["discord"]["id"]}`;

        const res = document.getElementById("results");

        const content = document.getElementById("content");
        content.style.top = "100px";
        
        res.style.display = "inline-flex";
        res.style.opacity = "100%";
    });

}

function getAccessToken(id, secret) {
    const tokenRequest = new XMLHttpRequest()
    tokenRequest.open("POST", "https://discord.com/api/v10/oauth2/token", username=id, password=secret)
    tokenRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    tokenRequest.send("grant_type=authorization_code&code=code")
    console.log(tokenRequest.response)
}