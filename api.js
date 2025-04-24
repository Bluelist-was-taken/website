var code = new URL(window.location.href)
code = code.search
const index = code.search("code=") + 5
const end = code.indexOf("&", index)
console.log(code.slice(index, end != -1 ? code.length : end))

function update_search_results() {
    const query = document.getElementById("search").value;
    data = explorer_search(query).then(data =>{
        console.log(data)

        const container = document.createElement("div");

        container.innerHTML = `<a>${data["minecraft"]["name"]}</a><br><a>${data["minecraft"]["uuid"]}</a><a style="float: right">${data["discord"]["name"]}</a><br><a style="float: right">${data["discord"]["id"]}</a>`

        const results = document.getElementById("results")
        results.appendChild(container)}
    );

}

function getAccessToken(id, secret) {
    const tokenRequest = new XMLHttpRequest()
    tokenRequest.open("POST", "https://discord.com/api/v10/oauth2/token", username=id, password=secret)
    tokenRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    tokenRequest.send("grant_type=authorization_code&code=code")
    console.log(tokenRequest.response)
}