// Code from Annhilati

function explorer_search(search) {

    Endpoint = "http://127.0.0.1:8000/api/dev/search/"
    const url = Endpoint + search

    /* const response = fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(result => {return result})
        .catch(error => {
            console.error("Error:", error)
        }); */
    
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();

    request.onloadend = () => {return request.responseText !== "" ? JSON.parse(`${request.responseText}`): null};
}