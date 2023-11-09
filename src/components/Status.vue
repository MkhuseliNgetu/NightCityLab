<template>
    <div class="status">
        <div class="dashboarduptime">
            <label>Uptime Status: N/A &emsp;</label>
            <br/>
            <label>Loadshedding Schedule: N/A &ensp; {{lsstatus}}</label>
        </div> 
    </div>
</template>

<script>
export default {
  name: 'StatusView',
  data() {
    return {
      lsstatus: null
    };
  },
  created() {
    
   /* const headers = { "Content-Type": "application/json", "token": ""};
    fetch("", { headers })
      .then(response => response.json())
      .then(data => (this.lsstatus = data.total)); */
  }
};
</script>
<style scoped>
.status {
    top: 1.5%;
    right: 37%;
    position: fixed;
    height: auto;
}

label{
    font-size: 3.5rem;
    color: white;
    font-family:Fonte Nihon Condensada;
    font-weight:400;
    letter-spacing: 3px;
}
</style>