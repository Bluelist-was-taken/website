<script>
    import { explorer_search } from "./bluelist_api.js"

    var callAPI = null

    function handle_input(value) {
    if (callAPI !== null) {
        clearTimeout(callAPI)
    }
    callAPI = setTimeout(update_search_results, 400, value)
    }

    function update_search_results(query) {
        if (query != "") {
            explorer_search(query)
                .then(data => {
                    document.querySelector("#minecraft #name").textContent = data["minecraft"]["name"];
                    document.querySelector("#minecraft #id").textContent = data["minecraft"]["uuid"];
                    // document.querySelector("#minecraft #image").src = data["minecraft"]["head"];
                    document.querySelector("#discord #name").textContent = data["discord"]["name"];
                    document.querySelector("#discord #id").textContent = data["discord"]["id"];
                    // document.querySelector("#discord #image").src = data["discord"]["avatar"];

                    document.getElementById("results").style.display = "grid";
                    document.getElementById("error").style.display = "none";
                })
                .catch(error => {
                    document.getElementById("error").textContent = error.message;
                    document.getElementById("error").style.display = "block";
                    document.getElementById("results").style.display = "none";
                });

        } else {
            document.getElementById("results").style.display = "none";
            document.getElementById("error").style.display = "none";
        }
    }
</script>
  
<main>
    <div id="content">
        <h1>Bluelist Explorer</h1>
        <input id="searchbar" placeholder="Minecraft name or Discord ID" autocomplete="off" on:input={(e) => {if (e.target instanceof HTMLInputElement) {handle_input(e.target.value);}}} />
        <p id="error">Couldn't find any profile with this name.</p>
        <div id="results">
            <div class="card" id="discord">
                <h2>Discord</h2>
                <p id="name">controllMaster21</p>
                <img id="image" src="" alt="">
                <p id="id">826517140193542186</p>
            </div>
            <div class="card" id="minecraft">
                <h2>Minecraft</h2>
                <p id="name">controllMaster21</p>
                <img id="image" src="" alt="">
                <p id="id">UUID</p>
            </div>
        </div>
    </div>
</main>