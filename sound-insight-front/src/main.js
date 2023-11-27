import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory} from 'vue-router'
import { routes } from './routes/routes.js'

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

// App config
const app = createApp(App)
app.use(vuetify)
app.use(router)
app.mount('#app')

