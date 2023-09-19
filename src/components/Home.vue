<template>
  <div class="hello">
    <div class="P1Landing">
      <img id="P1" src="../assets/Images/HeaderTorn1.png">
    </div>
    <div class="P2Landing">
      <img id="P2" src="../assets/Images/HeaderTorn2.png">
    </div>
    <div class="P3Landing">
      <img id="P3" src="../assets/Images/HeaderTorn3.png">
    </div>
    <div class="P4Landing">
      <img id="P4" src="../assets/Images/HeaderTorn4.png">
    </div>
    <div class="P5Landing">
      <img id="P5" src="../assets/Images/HeaderTorn5.png">
    </div>
    <div class="P6Landing">
      <img id="P6" src="../assets/Images/HeaderTorn6.png">
    </div>
    <div class="P7Landing">
      <img id="P7" src="../assets/Images/HeaderTorn7.png">
    </div>
<div class="LandingContent">
    <h1>Night City Lab</h1>
</div>

  </div>
</template>

<script>
export default {
  name: 'HomeView',
  props: {
    msg: String
  }
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
  right: 4.5%;
  width: 25%;
  bottom: 0%;
}
.P4Landing img{
  width: 120%;
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
    right: 38%;
    width: 20%;
    top: 10%;
}
</style>
