// Code from Annhilati

function explorer_search(search) {

    Endpoint = "http://127.0.0.1:8000/api/dev/search/"
    const url = Endpoint + search

    var response = null;

    fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            console.log(response.json())}
        )
        .catch(error => {
            console.error("Error:", error)
        });
}