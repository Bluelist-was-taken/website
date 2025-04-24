// Code from Annhilati

function explorer_search(search) {

    Endpoint = "localhost:3000/api/dev/search/"
    const url = Endpoint + search

    fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(data => {
            return data
        })
        .catch(error => {
            console.error("Error:", error)
        })
}