import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory} from 'vue-router'
import { routes } from './routes/routes.js'
import vue3GoogleLogin from 'vue3-google-login'
import vuetify from './plugins/vuetify'
import store from './store'

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

app.config.productionTip = false
app.use(vuetify)
app.use(router)
app.use(vue3GoogleLogin, gauthOption)
app.use(store)
app.mount('#app')

