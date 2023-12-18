<template>
    <div class="OperationNocturneOPN313">
      <div class="OperationNocturneOPN313LandingOne">
        <img id="OperationNocturneOPN313LandingImageOne" src="../assets/Images/OperationNocturneOPN313/HeadersPromoOne.png">
      </div>
      <div class="OperationNocturneOPN313LandingTwo">
        <img id="OperationNocturneOPN313LandingImageTwo" src="../assets/Images/OperationNocturneOPN313/HeadersPromoTwo.png">
      </div>
      <div class="OperationNocturneOPN313LandingThree">
        <img id="OperationNocturneOPN313LandingImageThree" src="../assets/Images/OperationNocturneOPN313/HeadersPromoThree.png">
      </div>
      <div class="OperationNocturneOPN313LandingFour">
        <img id="OperationNocturneOPN313LandingImageFour" src="../assets/Images/OperationNocturneOPN313/HeadersPromoFour.png">
      </div>
      <div class="OperationNocturneOPN313LandingFive">
        <img id="OperationNocturneOPN313LandingImageFive" src="../assets/Images/OperationNocturneOPN313/HeadersPromoFive.png">
      </div>
      <div class="OperationNocturneOPN313LandingSix">
        <img id="OperationNocturneOPN313LandingImageSix" src="../assets/Images/OperationNocturneOPN313/HeadersPromoSix.png">
      </div>
    <div class="LandingContent">
      
      <div class="LandingTitle">
        <h1>Operation</h1>
        <h2>Nocturne</h2>
        <h3>OPN313</h3>
      </div>

      <div class="LandingInput">
        <vs-button :active="active == 0" @click="active = 0" block color="#000000" size="xl" href="https://github.com/MkhuseliNgetu/Operation-Nocturne-OPN313">
        <template #animate>
          <i class='bx bx-home-alt' color="#FFFFFFF" ></i> Remember the basics of CQC
        </template>
      </vs-button>
      </div>

    </div>
    <br/>
  
    </div>
</template>

  <script>
  export default {
    name: 'OperationNocturneOPN313View',
  }
  </script>

<style scoped>
h1{
  font-family: Cyberpunk;
  color: white;
  font-size: 7.5rem;
  line-height: 10rem;
}
h2{
  font-family: MGS2;
  color: white;
  font-size: 7.5rem;
  line-height: 2rem;
  position: relative;
  left: 125%;
}
h3{
  font-family: MGS2;
  color: white;
  font-size: 7.5rem;
  line-height: 1rem;
  position: relative;
  left: 155%;
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
  bottom: -207.5%;
}
.LandingTitle{
  position: relative;
  left: 6%;
  width: 25%;
  text-align: center;
}
.LandingInput{
  position: relative;
  left: 22.5%;
  width: 100%;
  text-align: center;
}
.OperationNocturneOPN313LandingOne{
  position: absolute;
  right: 3.59%;
  width: 25%;
  bottom: -225.4%;
}

.OperationNocturneOPN313LandingImageOne img{
  width: 50%;
  height: auto;
  object-fit: cover;
}
.OperationNocturneOPN313LandingTwo{
  position: absolute;
  right: 36%;
  width: 25%;
  bottom: -225.4%;
}
.OperationNocturneOPN313LandingImageTwo img{
  width: 50%;
  height: auto;
  object-fit: cover;
}

.OperationNocturneOPN313LandingThree{
  position: absolute;
  left: 0%;
  width: 25%;
  bottom: -166%;
}
.OperationNocturneOPN313LandingImageThree img{
  width: 50%;
  height: auto;
  object-fit: cover;
}

.OperationNocturneOPN313LandingFour{
  position: absolute;
  left: 0%;
  width: 25%;
  bottom: -226.5%;
}
.OperationNocturneOPN313LandingImageFour img{
  width: 50%;
  height: auto;
  object-fit: cover;
}

.OperationNocturneOPN313LandingFive{
  position: absolute;
  left: 26%;
  width: 25%;
  bottom: -190.5%;
  transform: rotate(-315deg);
}
.OperationNocturneOPN313LandingImageFive img{
  width: 30%;
  height: auto;
  object-fit: cover;
}

.OperationNocturneOPN313LandingSix{
  position: absolute;
  left: 3%;
  width: 25%;
  bottom: -205.5%;
  transform: rotate(90deg);
}
.OperationNocturneOPN313LandingImageSix img{
  width: 30%;
  height: auto;
  object-fit: cover;
}


</style>
  