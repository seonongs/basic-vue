import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mitt from 'mitt';
import iconSet from 'quasar/icon-set/fontawesome-v5'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

const emitter = mitt();
const app = createApp(App).use(Quasar, quasarUserOptions).use(Quasar, quasarUserOptions)
app.config.globalProperties.emitter = emitter

app.use(router, Quasar, {iconSet: iconSet}).mount('#app')
