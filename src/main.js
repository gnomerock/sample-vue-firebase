import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from '@/plugins/firebase'

Vue.config.productionTip = true
Vue.use(firebase)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
