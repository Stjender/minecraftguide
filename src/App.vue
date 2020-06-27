<template>
  <div id="app">
    <img id="logo" alt="Minecraft logo" src="./assets/Mlogo.webp">
    <router-view></router-view>
  </div>
</template>

<script>
//import HelloWorld from './components/Login.vue';

export default {}
</script>

<style>
html {
  background-color: rgb(15,51,65);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(240,220,220);

  padding-top: 50px;
}

#logo {
  width: 5%;
}

.link {
  color: rgb(52,170,47);
}

.field {
  margin-bottom: 20px;
}

.field-text {
  float: left;
}

.field-input {
  height: 30px;
  width: 100%;
  border: solid black 2px;
}

.button-minecraft {
  background-color: rgb(52,170,47);
  border-top-color: rgb(154, 213, 151);
  border-right-color: rgb(154, 213, 151);
  border-bottom-color: rgb(36, 119, 33);
  border-left-color: rgb(36, 119, 33);
  color: white;
  text-shadow: 1px 1px black;
  font-size: 30px;
  padding: 10px 50px 10px 50px;
}
</style>
