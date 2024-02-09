<template>
  <div class="home">
    <div class="P1Landing">
      <img id="P1" src="../assets/Images/Main/HeaderTorn1.png">
    </div>
    <div class="P2Landing">
      <img id="P2" src="../assets/Images/Main/HeaderTorn2.png">
    </div>
    <div class="P3Landing">
      <img id="P3" src="../assets/Images/Main/HeaderTorn3.png">
    </div>
    <div class="P4Landing">
      <img id="P4" src="../assets/Images/Main/HeaderTorn4.png">
    </div>
    <div class="P5Landing">
      <img id="P5" src="../assets/Images/Main/HeaderTorn5.png">
    </div>
    <div class="P6Landing">
      <img id="P6" src="../assets/Images/Main/HeaderTorn6.png">
    </div>
    <div class="P7Landing">
      <img id="P7" src="../assets/Images/Main/HeaderTorn7.png">
    </div>
  <div class="LandingContent">
    <h1>Night City Lab</h1>
  </div>

  </div>
  
</template>

<script>
export default {
  name: 'HomeView',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-family: Better Font;
  color: white;
  font-size: 15rem;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  line-height: 300%;

  font-family: Better Font;
  color: white;
  font-size: 4rem;
}
a {
  color: #42b983;
}
.home{
  min-width: 1920px;
  min-height: 1080px;
  max-width: 3840px;
  max-height: 2160px;
}
.P1Landing{
  position: absolute;
  left: 0%;
  width: 25%;
  top: 0%;
}
.P1Landing img{
  width: 175%;
  height: auto;
  object-fit: cover;
}
.P2Landing{
  position: absolute;
  left: 0%;
  width: 25%;
  bottom: 0%;
}
.P2Landing img{
  width: 175%;
  height: auto;
  object-fit: cover;
}
.P3Landing{
  position: absolute;
  left: 40%;
  width: 25%;
  bottom: 0%;
}
.P3Landing img{
  width: 150%;
  height: auto;
  object-fit: cover;
}
.P4Landing{
  position: absolute;
  right: 4.0%;
  width: 25%;
  bottom: 0%;
}
.P4Landing img{
  width: 116%;
  height: auto;
  object-fit: cover;
}

.P5Landing{
  position: absolute;
  right: 45%;
  width: 25%;
  bottom: 40%;
}
.P5Landing img{
  width: 110%;
  height: auto;
  object-fit: cover;
  transform: rotate(-295deg);
}
.P6Landing{
  position: absolute;
  right: 40%;
  width: 25%;
  bottom: 0%;
}
.P6Landing img{
  width: 30%;
  height: auto;
  object-fit: cover;
  transform: rotate(-295deg);
}
.P7Landing{
  position: absolute;
  right: 15%;
  width: 25%;
  bottom: 40%;
}
.P7Landing img{
  width: 30%;
  height: auto;
  object-fit: cover;
}
.LandingContent {
  position: absolute;
  right: 37%;
  width: 20%;
  top: 10%;
}
::-webkit-scrollbar{
  width:5px;
  background-color:#000;
}
::-webkit-scrollbar-thumb{
  background: transparent;
}
</style>
