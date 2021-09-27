import Vue from 'vue'
import Buefy from 'buefy'
//import 'buefy/dist/buefy.css'
// Styles
import '@/scss/main.scss';
//import { library } from '@fortawesome/fontawesome-svg-core';
//import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';
// internal icons
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faJs, faVuejs } from "@fortawesome/free-brands-svg-icons";
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

library.add(fas, faJs, faVuejs);
Vue.component('vue-fontawesome', FontAwesomeIcon);




Vue.config.productionTip = false
Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas',
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')