<template>
    <div class="OuterHeaven">
      <div class="OuterHeavenLandingOne">
        <img id="OuterHeavenLandingImageOne" src="../assets/Images/OuterHeaven/HeaderWomanOne.png">
      </div>
      <div class="OuterHeavenLandingTwo">
        <img id="OuterHeavenLandingImageTwo" src="../assets/Images/OuterHeaven/HeaderManOne.png">
      </div>
      <div class="OuterHeavenLandingThree">
        <img id="OuterHeavenLandingImageThree" src="../assets/Images/OuterHeaven/HeaderManTwo.png">
      </div>
      <div class="OuterHeavenLandingFour">
        <img id="OuterHeavenLandingImageFour" src="../assets/Images/OuterHeaven/HeaderWomanTwo.png">
      </div>
      <div class="OuterHeavenLandingFive">
        <img id="OuterHeavenLandingImageFive" src="../assets/Images/OuterHeaven/HeaderWomanThree.png">
      </div>
    <div class="LandingContent">
      
      <h1>Outer<br/>Heaven</h1>

      <vs-button :active="active == 0" @click="active = 0" block color="#000000" size="xl" href="https://github.com/MkhuseliNgetu/OuterHeaven" style="left:20%;">
        <template #animate>
          <i class='bx bx-home-alt' color="#FFFFFFF" ></i>Shop at OuterHeaven
        </template>
      </vs-button>
    </div>
  
    </div>
</template>

  <script>
  export default {
    name: 'OuterHeavenView',
  }
  </script>

<style scoped>
h1{
  font-family: Porter Sans Block;
  color: white;
  font-size: 7.5rem;
}
p{
  font-family: Porter Sans Block;
  color: white;
  font-size: 1rem;
  left:25%;
}
.LandingContent{
  position: absolute;
  left: 0.5%;
  width: 25%;
  bottom: -81.5%;
}
.OuterHeavenLandingOne{
  position: absolute;
  right: 3.59%;
  width: 25%;
  bottom: -112.5%;
}

.OuterHeavenLandingImageOne img{
  width: 50%;
  height: auto;
  object-fit: cover;
}
.OuterHeavenLandingTwo{
  position: absolute;
  right: 36%;
  width: 25%;
  bottom: -112.5%;
}
.OuterHeavenLandingImageTwo img{
  width: 50%;
  height: auto;
  object-fit: cover;
}

.OuterHeavenLandingThree{
  position: absolute;
  left: 0%;
  width: 25%;
  bottom: -52%;
}
.OuterHeavenLandingImageThree img{
  width: 50%;
  height: auto;
  object-fit: cover;
}

.OuterHeavenLandingFour{
  position: absolute;
  left: 0%;
  width: 25%;
  bottom: -112.5%;
}
.OuterHeavenLandingImageFour img{
  width: 50%;
  height: auto;
  object-fit: cover;
}

.OuterHeavenLandingFive{
  position: absolute;
  left: 26%;
  width: 25%;
  bottom: -77.5%;
  transform: rotate(-315deg);
}
.OuterHeavenLandingImageFive img{
  width: 30%;
  height: auto;
  object-fit: cover;
}


</style>
  