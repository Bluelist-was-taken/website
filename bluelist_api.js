// Code from Annhilati

function explorer_search(search) {

    Endpoint = "http://127.0.0.1:8000/api/dev/search/"
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