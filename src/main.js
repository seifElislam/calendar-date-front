import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import CountryLogo from './components/CountryLogo'

library.add(fas)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).component('CountryLogo', CountryLogo).use(router).mount('#app')
