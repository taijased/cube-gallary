import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Global style css
import './style/font.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
