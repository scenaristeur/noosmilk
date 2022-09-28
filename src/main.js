
// import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// import { MdButton, MdInput /*MdContent, MdTabs*/ } from 'vue-material/dist/components'
// import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'
//
// Vue.use(MdButton)
// Vue.use(MdInput)
// Vue.use(MdTabs)

// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
//
// // Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import /** as bootstrap from*/ 'bootstrap'

// Import our custom CSS
// import './scss/styles.scss'
//
// // Import all of Bootstrap's JS
// // import * as bootstrap from 'bootstrap'
// import "bootstrap/dist/js/bootstrap.bundle.min.js"


createApp(App)
.use(store)
.use(router)
// // Make BootstrapVue available throughout your project
// .use(BootstrapVue)
// // Optionally install the BootstrapVue icon components plugin
// .use(IconsPlugin)
.mount('#app')
