import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import VueRouter from 'vue-router'
import router from './router/index.js'
import VCharts from 'v-charts';

Vue.use(VCharts);
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
})
//.$mount('#app')
