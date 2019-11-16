import Vue from 'vue'
import App from './App.vue'
import router from "./router"//引入 
import VueTouch from "vue-touch"; 
import "@common/components";
import store from "./store";
import Observer from "./observer";
Vue.prototype.$observer=Observer;
Vue.use(VueTouch,{name:"v-touch"})
Vue.config.productionTip = false

new Vue({
  store,
  router,//并且注入 
  render: h => h(App)
}).$mount('#app')
