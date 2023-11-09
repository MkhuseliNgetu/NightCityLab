import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css'

import { initializeApp } from "firebase/app";

Vue.use(Vuesax)

Vue.config.productionTip = false

const FBConfig ={

  apiKey: "AIzaSyAZKp3s3u-Yghu318HwSkKsY-PGmL3WuZc",

  authDomain: "nightcitylab.firebaseapp.com",

  projectId: "nightcitylab",

  storageBucket: "nightcitylab.appspot.com",

  messagingSenderId: "212001794308",

  appId: "1:212001794308:web:8d23ce35dd0beea934c851",

  measurementId: "G-QHYBTGYYDQ"

};

const app = initializeApp(FBConfig);

Vue.use(app)

new Vue({
  render: h => h(App),
}).$mount('#app')


