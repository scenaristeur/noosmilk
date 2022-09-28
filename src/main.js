
// import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import BootstrapVue3 from 'bootstrap-vue-3'

// Optional, since every component import their Bootstrap functionality
// the following line is not necessary
// import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

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
// import 'bootstrap/dist/css/bootstrap.css'
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
.use(BootstrapVue3)
// // Make BootstrapVue available throughout your project
// .use(BootstrapVue)
// // Optionally install the BootstrapVue icon components plugin
// .use(IconsPlugin)
.mount('#app')
