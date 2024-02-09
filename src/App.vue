<template>
  <div id="app">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <div id="Main">
    <HeaderView></HeaderView>
    <HomeView></HomeView>
    </div>
    <div id="ProjectOne">
      <OuterHeaven></OuterHeaven>
    </div>
    <div id="ProjectTwo">
      <OperationNocturneOPN313></OperationNocturneOPN313>
    </div>
  </div>
</template>

<script>
import HomeView from './components/Home.vue'
import HeaderView from './components/Header.vue'
import OuterHeaven from './components/OuterHeaven.vue'
import OperationNocturneOPN313 from './components/OperationNocturneOPN313.vue'
export default {
  name: 'NightCityLab',
  components: {
    HeaderView,
    HomeView,
    OuterHeaven,
    OperationNocturneOPN313,
  },
}
</script>

<style>
html{
  background-image: url('./assets/Images/Main/Background\ \(Sketchcoast\).jpg');
  background-size: cover;
  overflow-x: hidden; 
}
#app {
  text-align: center;
  color: black;
  margin-top: 60px;
  overflow: scroll;
  max-width: 100%;
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
@font-face {
  font-family: "Porter Sans Block";
  src: local("Porter Sans Block");
  src: url("./assets/Fonts/Porter-Sans-Block.otf") format("opentype");
  font-size: xx-large;
}
@font-face {
  font-family: "Cyberpunk";
  src: local("Cyberpunk");
  src: url("./assets/Fonts/Cyberpunk.otf") format("opentype");
  font-size: xx-large;
}
@font-face {
  font-family: "MGS2";
  src: local("MGS2");
  src: url("./assets/Fonts/MGS2.ttf") format("truetype");
  font-size: xx-large;
}


</style>
