<script>
    import svelteLogo from './assets/svelte.svg'
    import viteLogo from '/vite.svg'
    import Counter from './lib/Counter.svelte'
</script>
  
<main>
    <div id="content">
        <h1>Bluelist Explorer</h1>
        <input id="searchbar" placeholder="Minecraft name or Discord ID" autocomplete="off"><br>
        <p id="error">Couldn't find any profile with this name.</p>
        <div id="results">
            <div class="card" id="discord">
                <h2>Discord</h2>
                <p id="name">controllMaster21</p>
                <img id="image" src="" >
                <p id="id">826517140193542186</p>
            </div>
            <div class="card" id="minecraft">
                <h2>Minecraft</h2>
                <p id="name">controllMaster21</p>
                <img id="image" src="">
                <p id="id">UUID</p>
            </div>
        </div>
    </div>
</main>
  
<style>
    
</style>
  