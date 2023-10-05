<template>
  <div id="app">
    <HeaderView></HeaderView>
    <HomeView></HomeView>
    <WorkInProgressView v-show="IsSelected"></WorkInProgressView>
    <br/>
  </div>
  
</template>

<script>
import HomeView from './components/Home.vue'
import HeaderView from './components/Header.vue'
import WorkInProgressView from './components/WorkInProgress.vue'
export default {
  name: 'App',
  components: {
    HeaderView,
    HomeView,
    WorkInProgressView,
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
