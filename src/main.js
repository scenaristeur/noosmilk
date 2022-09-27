import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
//
// // Import Bootstrap and BootstrapVue CSS files (order is important)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap/dist/css/bootstrap.min.css"



createApp(App)
.use(store)
.use(router)
// // Make BootstrapVue available throughout your project
// .use(BootstrapVue)
// // Optionally install the BootstrapVue icon components plugin
// .use(IconsPlugin)
.mount('#app')
