<template>
  <div id="app">
    <HeaderView></HeaderView>
    <HomeView> This is a snake</HomeView>
    <br/>
    <StatusView></StatusView>
  </div>
  
</template>

<script>
import HomeView from './components/Home.vue'
import StatusView from './components/Status.vue'
import HeaderView from './components/Header.vue'
export default {
  name: 'App',
  components: {
    HeaderView,
    HomeView,
    StatusView,
  }
}
</script>

<style>
html{
  background-image: url('./assets/Images/Background\ \(Sketchcoast\).jpg');
  background-size: cover;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
  
}
@font-face {
    font-family: "Better Font";
    src: local("Better Font");
    src: url("./assets/Fonts/Better-Font.otf") format("opentype");
    font-size: xx-large;
}



</style>
