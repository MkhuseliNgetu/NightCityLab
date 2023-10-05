<template>
    <div class="header">
    <div class="center examplex">
      <vs-navbar center-collapsed style="background-color: transparent; font-size: x-large;" >
        <template #left>
          <p> Night City Lab</p>
        </template>
        <template #right>
        <vs-navbar-item id="OuterHeaven" href="https://www.outerhaven.azurewebsites.net"><label>Outer Heaven</label></vs-navbar-item>
        <vs-navbar-item id="NightCityDashboard" href="https://www.nightcitydash.nightcitylab.co.za"><label>Night City</label></vs-navbar-item>
        <vs-navbar-item id="DevolOneDashboard" href="https://www.devolone.nightcitylab.co.za"><label>DevolOne</label> </vs-navbar-item>
        <vs-navbar-item id="Portifolo" href="https://github.com/MkhuseliNgetu"><label>Portifolio</label></vs-navbar-item>
        </template>
      </vs-navbar>
    </div>
</div>
</template>
<script>
    export default {
  name: 'HeaderView',

}
</script>
<style scoped>
p{
  font-family: Better Font;
  color: white;
}
label{
    font-size: 2rem;
    color: white;
    font-family: Better Font;
}
</style>