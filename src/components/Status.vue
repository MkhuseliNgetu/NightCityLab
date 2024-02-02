<template>
    <div class="status">
        <div class="dashboarduptime" v-if="!isHidden" v-on:click="isHidden = true" >
            <label>Loadshedding Schedule &ensp;</label>
        </div> 
        <div class="ac">
            <label style="right:8%;white-space: pre-line">{{ key }}</label>
            <vs-button icon color="danger" @click="GetDashboards()" v-if="!isHidden" v-on:click="isHidden = true" style="left:4%;"><i class='bx bxs-calendar'></i>Update Loadshedding Schedule </vs-button>
        </div>
    </div>
</template>

<script>

export default {
  name: 'StatusView',
  data() {
    return {
      isHidden: false,
      Dashboards: null,
      key: null,
    }
  },
  methods: {
    async GetDashboards() {
      this.Dashboards = await fetch('https://nigthcitylabbackend-e5lghbasoa-bq.a.run.app/Update').then(res => res.json())
      .then(data => this.key = data.schedule)
      .catch(err => console.log(err.schedule))
      this.key = this.key.replace('/r','/')
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