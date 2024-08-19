import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub, faReact, faJs, faSass } from "@fortawesome/free-brands-svg-icons";

library.add(faLocationDot, faEnvelope, faLinkedinIn, faGithub, faReact, faJs, faSass)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
