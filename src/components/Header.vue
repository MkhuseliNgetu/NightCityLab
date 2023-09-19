<template>
    <div class="header">
    <div class="center examplex">
      <vs-navbar center-collapsed style="background-color: transparent; font-size: x-large;" >
        <template #left>
          <p> Night City Lab</p>
        </template>
        <vs-navbar-item id="OuterHeaven"><label>Outer Heaven</label></vs-navbar-item>
        <vs-navbar-item id="NightCityDashboard"><label>Night City</label></vs-navbar-item>
        <vs-navbar-item id="DevolOneDashboard"><label>DevolOne</label> </vs-navbar-item>
        <vs-navbar-item id="Portifolo"><label>Portifolio</label></vs-navbar-item>
        <vs-navbar-item id="OnDemandServices"><label>On Demand Services</label></vs-navbar-item>
        <template #right>
          <vs-avatar circle size="30">

           <!-- <template #icons>
            <box-icon type='logo' name='linkedin-square'></box-icon>
            <box-icon type='logo' name='github'></box-icon>
            </template>-->
          </vs-avatar>
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
    font-size: 1.75rem;
    color: white;
    font-family: Better Font;
}
</style>