<template>
    <div class="header">
    <div class="center examplex">
      <vs-navbar center-collapsed style="background-color: transparent; font-size: x-large;">
        <!--Left side of navigation bar-->
        <template #left>
          <p>Night City Lab</p>
       
        </template>

        <vs-alert gradient color="rgb(199,21,133)" style="left:95%;" :hidden-content.sync="hidden">
            <template #title >
              <label>Loadshedding Schedule</label>
            </template>
                <br/>  
                <label style="white-space: pre-line" v-if="!IsHidden" v-on:click="IsHidden = true">{{key}}</label>
        </vs-alert>
           
        <!--Right side of navigation bar-->
        <template #right> 
        <vs-navbar-item id="EskomScheduleUpdate" style="padding: 2px;">
          <vs-button icon color="danger" v-on:click="GetDashboards()"><i class='bx bxs-calendar'></i>Update Schedule</vs-button>
        </vs-navbar-item>
        <!---Under Investigation - Local.snapshotstank.io is somehow not available?-->
       <!--<vs-navbar-item id="NightCityDashboard" style="padding: 2px;">
          <vs-button icon color="rgb(0, 38, 84)" gradient href="https://snapshots.raintank.io/dashboard/snapshot/z2tOnWaTV3i2GILKXNlGXvg7oKfssPW1">
            <i class='bx bxs-dashboard'></i>Dashboard
          </vs-button>
        </vs-navbar-item>-->
        <vs-navbar-item id="Portifolo" style="padding: 2px;">
          <vs-button icon color="dark" href="https://github.com/MkhuseliNgetu"><i class='bx bxl-github'></i>GitHub</vs-button>
        </vs-navbar-item>
        <vs-navbar-item id="SocialMedia" style="padding: 2px;"> 
          <vs-button icon color="linkedin" href="https://www.linkedin.com/in/mkhuseli-ngetu-137174284/" ><i class='bx bxl-linkedin'></i>Linkedin</vs-button>
        </vs-navbar-item>
        <vs-navbar-item id="PrivateDashboard" style="padding: 2px;"> 
          <vs-button color="rgb(179,238,238)" href="https://yorha-automation-01.web.app/api/auth/login"><i class='bx bx-log-in-circle'></i>Login</vs-button>
        </vs-navbar-item>
        </template>

      </vs-navbar>
    </div>
</div>
</template>

<script>
import VueCookies from 'vue-cookies'

export default {
  name: 'HeaderView',
  data() {
    return {
      isHidden: false,
      Dashboards: null,
      key: "Schedule out of date.",
      hidden: true,
    }
  },
  methods: {
   async GetDashboards() {
      this.Dashboards = await fetch('https://nightcitylabbackend-e5lghbasoa-bq.a.run.app/Update').then(res => res.json())
      .then(data => this.key = data.schedule)
      .catch(err => console.log(err.schedule))
      this.key = await this.key.replace('/r','/')

      VueCookies.set('LoadSheddinng Schedule', this.key, "1h")
    },
    async DashboardStatus(){

    }
}
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
    text-align: center;
}
</style>