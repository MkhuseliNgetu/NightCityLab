<template>
    <div class="header">
    <div class="center examplex">
      <vs-navbar center-collapsed style="background-color: transparent; font-size: x-large;" >
        <template #left>
          <p>Night City Lab</p>
        </template>
        <template #right>
        <vs-navbar-item id="OuterHeaven" href="https://outerhaven.azurewebsites.net" ><label>Outer Heaven</label></vs-navbar-item>
        <vs-navbar-item id="Themba" href="https://themba.nightcitylab.co.za"><label>Themba</label></vs-navbar-item>
        <vs-navbar-item id="NightCityDashboard" href="https://snapshots.raintank.io/dashboard/snapshot/6j6M5Fls5JPA9Oqk2By513y6qutVa4jK"><label>Night City Dashboard</label></vs-navbar-item>
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
  font-size: 2.5rem;
}
label{
    font-size: 2.5rem;
    color: white;
    font-family: Better Font;
}
</style>