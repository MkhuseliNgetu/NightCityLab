<template>
    <div class="status">
        <div class="dashboarduptime">
            <label>Loadshedding Schedule:{{lsstatus}} &ensp;</label>
            <ul>
            <li style="color: aliceblue;" v-for="post in posts" :key="post.schedules" data-test="post">
              {{post.schedules}}</li>
            </ul>
            {{schedules}}
        </div> 
   
    </div>
</template>

<script>
import axios from 'axios'

/*const RequestOptions = {
  headers: {
     HEADER: ''
  },
  withCredentials: false,
  auth: {
    username: 'n/a',
    password: 'n/a'
  },
  data: {
    token: 'n/a',
  }
};*/
export default {
  name: 'StatusView',
  data() {
    return {
      lsstatus: '00:00 - 02:30',
      Schedules: null,
    }
  },
  methods: {
    async GetSchedules() {
      this.Schedules = await axios.get('https://nclb:3333/').then((BackendResponse) => {
        this.Schedules = BackendResponse;
      }).catch((BackEndError) =>{
        this.Schedules = BackEndError;
      });
    },
  },
};
</script>
<style scoped>
.status {
    top: 3%;
    right: 34%;
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