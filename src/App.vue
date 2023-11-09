<template>
  <div id="app">
    <HeaderView></HeaderView>
    <HomeView></HomeView>
    <br/>
    <StatusView></StatusView>
  </div>
  
</template>

<script>
import HomeView from './components/Home.vue'
import HeaderView from './components/Header.vue'
import StatusView from './components/Status.vue'
export default {
  name: 'App',
  components: {
    HeaderView,
    HomeView,
    StatusView
  },
}
</script>

<style>
html{
  background-image: url('./assets/Images/Background\ \(Sketchcoast\).jpg');
  background-size: cover;
}
#app {
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
@font-face {
  font-family: "Fonte Nihon Condensada";
  src: local("Fonte Nihon Condensada");
  src: url("./assets/Fonts/Fonte Nihon Condensada.ttf") format("truetype");
  font-size: xx-large;
}



</style>
