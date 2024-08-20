import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faLocationDot, faEnvelope, faUser, faBriefcase, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub, faReact, faJs, faSass, faCss3Alt, faHtml5, faPhp, faVuejs } from "@fortawesome/free-brands-svg-icons";

library.add(
  faLocationDot,
  faEnvelope,
  faLinkedinIn,
  faGithub,
  faReact,
  faJs,
  faSass,
  faHtml5,
  faPhp,
  faUser,
  faBriefcase,
  faArrowRight,
  faCss3Alt,
  faVuejs
)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
