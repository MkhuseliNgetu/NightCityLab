<template>
    <div class="status">
        <div class="dashboarduptime">
            <label>Loadshedding Schedule &ensp;</label>
            <br/>
            <label style="position: relative; right:8%">{{key}}</label>
            <br/>
            <vs-button icon color="danger" @click="GetDashboards()" style="position: relative; left:4%"><i class='bx bxs-calendar'></i>Update Loadshedding Schedule </vs-button>
        </div> 
   
    </div>
</template>

<script>

export default {
  name: 'StatusView',
  data() {
    return {
      Dashboards: null,
      Cron: '5 * * * *',
      key: "No LoadShedding",

      CurrentStartTime: null,
      CurrentEndTime: null,
      CurrentStage: null,
      UpcommingStartTime: null,
      UpcommingEndTime: null,
      UpcommingStage: null,
    }
  },
  methods: {
    async GetDashboards() {
      this.Dashboards = await fetch('https://nightcitybackend-e5lghbasoa-bq.a.run.app/Update').then(res => res.json())
      .then(data => this.key = data.schedule)
      .catch(err => console.log(err.schedule))
    },
}
};
</script>
<style scoped>
.status {
    top: 3%;
    right: 37%;
    position: fixed;
    height: auto;
}

label{
    font-size: 3rem;
    color: white;
    font-family:Fonte Nihon Condensada;
    font-weight: normal;
    letter-spacing: 6px;

}
</style>