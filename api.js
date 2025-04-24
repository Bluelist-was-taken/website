var code = new URL(window.location.href)
code = code.search
const index = code.search("code=") + 5
const end = code.indexOf("&", index)
console.log(code.slice(index, end != -1 ? code.length : end))

function submitSearchQuery() {
    const discordRequest = new XMLHttpRequest()
    discordRequest.open("get", "https://discord.com/api/v10/users/826517140193542186")
    discordRequest.send()
    const elem = document.createElement("a")
    elem.innerText = discordRequest.response

    const results = document.getElementById("results")
    results.appendChild(elem)
}

function getAccessToken(id, secret) {
    const tokenRequest = new XMLHttpRequest()
    tokenRequest.open("POST", "https://discord.com/api/v10/oauth2/token", username=id, password=secret)
    tokenRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    tokenRequest.send("grant_type=authorization_code&code=code")
    console.log(tokenRequest.response)
}