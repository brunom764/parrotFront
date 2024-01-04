import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/routes.js'
import vuetify from './plugins/vuetify'
import store from './store'
import './plugins/firebase'
import '@mdi/font/css/materialdesignicons.css'

// App config
const app = createApp(App)

app.config.productionTip = false
app.use(vuetify)
app.use(router)
app.use(store)
app.mount('#app')


