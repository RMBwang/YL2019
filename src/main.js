import Vue from 'vue'
import App from './App.vue'
import router from "./router"//引入 
import VueTouch from "vue-touch"; 
import "@common/components";

Vue.use(VueTouch,{name:"v-touch"})
Vue.config.productionTip = false

new Vue({
  router,//并且注入 
  render: h => h(App)
}).$mount('#app')
