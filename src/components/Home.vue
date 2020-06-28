<template>
    <div id="Home">
        <h1>The Ultimate Minecraft Guide</h1>
        <p id="intro">Welkom bij de allerbeste minecraft guide die er bestaat. Als je ingelogd heb kan je items kiezen die vervolgens voor je opgeslagen worden. Deze kan je terug vinden op je persoonlijke pagina. Zo kan je snel de items zien waar je vaak informatie van opzoekt.</p>
        <button class="button-minecraft" @click="$router.push('/Register')">Begin Hier!</button>
        <br><br>
        <router-link class="link" to="/Login">Heb je al een account? Klik dan hier!</router-link>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
    #intro {
        max-width: 600px;
        margin: 100px auto 100px auto;
    }

</style>