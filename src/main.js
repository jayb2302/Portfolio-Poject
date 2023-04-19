import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import './assets/main.css'


const app = createApp(App)

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { far } from '@fortawesome/free-regular-svg-icons'


/* add icons to the library */
library.add(fas, fab, far);
app.component('font-awesome-icon', FontAwesomeIcon)


app.use(router)

app.mount('#app')

