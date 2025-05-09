export async function explorer_search(search) {
    const Endpoint = "http://127.0.0.1:8000/api/dev/search/";
    const url = Endpoint + search;

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (response.status == 404) {
            throw new Error(`No entry for "${search}"`);
        } else if (response.status == 500) {
            throw new Error(`Internal Bluelist API Error`);
        }

        return await response.json();

    } catch (error) {

        if (error instanceof TypeError) {
            // Nur echte Fetch-Fehler behandeln
            throw new TypeError(error.message);
        }

        // Alle anderen Fehler einfach *weiterwerfen*
        throw error;
    }
}
