<template>
 <div class="Themba">
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
      <div class="ThembaLandingImageOne">
        <img id="ThembaImageOne" src="../assets/Images/Themba/HeaderWomanOne.png">
      </div>
      <div class="ThembaLandingImageTwo">
        <img id="ThembaImageTwo" src="../assets/Images/Themba/MiddleSectionHandOne.png">
      </div>
      <div class="ThembaLandingImageThree">
        <img id="ThembaImageThree" src="../assets/Images/Themba/LeftCoupleOne.png">
      </div>
      <div class="ThembaLandingImageFour">
        <img id="ThembaImageFour" src="../assets/Images/Themba/StrapOne.png">
      </div>
      <div class="ThembaLandingImageFive">
        <img id="ThembaImageFive" src="../assets/Images/Themba/StrapTwo.png">
      </div>
      <div class="ThembaLandingImageSix">
        <img id="ThembaImageSix" src="../assets/Images/Themba/StrapThree.png">
      </div>
      <div class="ThembaLandingImageSeven">
        <img id="ThembaImageSeven" src="../assets/Images/Themba/StrapFour.png">
      </div>
    <div class="LandingContent">
      
      <div class="LandingTitle">
        <h1>Themba</h1>
      </div>

      <div class="LandingInput">
        <vs-button :active="active == 0" @click="active = 0" block color="#000000" size="xl" href="https://github.com/MkhuseliNgetu/Themba">
        <template>
          <i class='bx bx-heart-circle' color="#FFFFFFF"></i> &ensp; Build something new from what's broken
        </template>
      </vs-button>
      </div>

    </div>
    <br/>
  
    </div>
</template>


<script>

export default {
name: 'ThembaView',
}
</script>

<style scoped>
h1{
  font-family: Montreal;
  color: white;
  font-size: 7.5rem;
  line-height: 10rem;
}
p{
  font-family: Porter Sans Block;
  color: white;
  font-size: 1rem;
  left:25%;
}
.Themba{
  min-width: 1920px;
  min-height: 1080px;
  max-width: 3840px;
  max-height: 2160px;
}
.LandingContent{
  position: absolute;
  left: 0.5%;
  width: 25%;
  bottom: -277.5%;
}
.LandingTitle{
  position: relative;
  left: 39%;
  width: 25%;
  text-align: center;
}
.LandingInput{
  position: relative;
  left: 10.5%;
  width: 100%;
  text-align: center;
}
.ThembaLandingImageOne{
  position: absolute;
  right: 3.59%;
  width: 25%;
  bottom: -318.3%;
}

.ThembaImageOne img{
  width: 50%;
  height: auto;
  object-fit: cover;
}
.ThembaLandingImageTwo{
  position: absolute;
  right: 36%;
  width: 25%;
  bottom: -318.3%;
}
.ThembaImageTwo img{
  width: 50%;
  height: auto;
  object-fit: cover;
}
.ThembaLandingImageThree{
  position: absolute;
  left: 0%;
  width: 25%;
  bottom: -319%;
}
.ThembaImageThree img{
  width: 50%;
  height: auto;
  object-fit: cover;
}
.ThembaLandingImageFour{
  position: absolute;
  left: 22%;
  width: 25%;
  bottom: -260.5%;
  transform: rotate(-315deg);
}
.ThembaImageFour img{
  width: 30%;
  height: auto;
  object-fit: cover;
}
.ThembaLandingImageFive{
  position: absolute;
  left: 27%;
  width: 25%;
  bottom: -277.5%;
  transform: rotate(-315deg);
}
.ThembaImageFive img{
  width: 30%;
  height: auto;
  object-fit: cover;
}
.ThembaLandingImageSix{
  position: absolute;
  left: 14%;
  width: 25%;
  bottom: -321.5%;
  transform: rotate(-360deg);
}
.ThembaImageSix img{
  width: 30%;
  height: auto;
  object-fit: cover;
}
.ThembaLandingImageSeven{
  position: absolute;
  left: 25%;
  width: 25%;
  bottom: -321.5%;
  transform: rotate(-360deg);
}
.ThembaImageSeven img{
  width: 30%;
  height: auto;
  object-fit: cover;
}

</style>