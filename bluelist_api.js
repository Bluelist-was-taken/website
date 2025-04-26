// Code from Annhilati

async function explorer_search(search) {

    Endpoint = "http://127.0.0.1:8000/api/dev/search/"
    const url = Endpoint + search
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            throw new Error(`Error while calling API: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error: ", error);
        return null;
        throw error;
    }
}