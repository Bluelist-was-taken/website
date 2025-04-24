var code = new URL(window.location.href)
code = code.search
const index = code.search("code=") + 5
const end = code.indexOf("&", index)
console.log(code.slice(index, end != -1 ? code.length : end))

var callAPI = null

function handle_input(value) {
    if (callAPI !== null) {
        clearTimeout(callAPI)
    }
    callAPI = setTimeout(update_search_results, 1000, value)
}

function update_search_results(query) {
    data = explorer_search(query).then(data =>{

        document.getElementById('minecraft_name').textContent = data["minecraft"]["name"];
        document.getElementById('minecraft_uuid').textContent = data["minecraft"]["uuid"];
        document.getElementById('discord_id').textContent = data["discord"]["id"];
        document.getElementById('discord_name').textContent = data["discord"]["name"];
    });

}

function getAccessToken(id, secret) {
    const tokenRequest = new XMLHttpRequest()
    tokenRequest.open("POST", "https://discord.com/api/v10/oauth2/token", username=id, password=secret)
    tokenRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    tokenRequest.send("grant_type=authorization_code&code=code")
    console.log(tokenRequest.response)
}