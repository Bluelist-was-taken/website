var code = new URL(window.location.href)
code = code.search
const index = code.search("code=") + 5
const end = code.indexOf("&", index)
console.log(code.slice(index, end != -1 ? code.length : end))

function update_search_results() {
    const query = document.getElementById("search").value;
    data = explorer_search(query);

    const minecraftName = document.createElement("a");
    minecraftName.innerText = data["minecraft"]["username"]

    const UUID = document.createElement("a");
    UUID.innerText = data["minecraft"]["uuid"]

    const discordName = document.createElement("a");
    discordName.style.float = "right";
    discordName.innerText = data["discord"]["username"]

    const discordID = document.createElement("a");
    discordID.style.float = "right";
    discordID.innerText = data["discord"]["id"]

    const container = document.createElement("div");

    container.appendChild(minecraftName);
    container.appendChild(UUID);
    container.appendChild(discordName);
    container.appendChild(discordID);

    const results = document.getElementById("results")
    results.appendChild(container)

}

function getAccessToken(id, secret) {
    const tokenRequest = new XMLHttpRequest()
    tokenRequest.open("POST", "https://discord.com/api/v10/oauth2/token", username=id, password=secret)
    tokenRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    tokenRequest.send("grant_type=authorization_code&code=code")
    console.log(tokenRequest.response)
}