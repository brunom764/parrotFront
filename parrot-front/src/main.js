import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory} from 'vue-router'
import { routes } from './routes/routes.js'
import vue3GoogleLogin from 'vue3-google-login'

// Vuetify config 
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

// router config
const router = createRouter({
  history: createWebHistory(),
  routes,
})

// google auth config
const gauthOption = {
  clientId: '701416611898-sltur4tbr755rr1dn4k3tddvmdgsvvtr.apps.googleusercontent.com',
}

// App config


const app = createApp(App)
// global colors
app.config.globalProperties.$primary = "#a3d95b"
app.config.globalProperties.$secundary = "#1f0310"
app.config.globalProperties.$auxiliary = "#f6f0bc"

app.config.productionTip = false
app.use(vuetify)
app.use(router)
app.use(vue3GoogleLogin, gauthOption)
app.mount('#app')


