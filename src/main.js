import Vue from 'vue';
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.css";

import { router } from "./router";
Vue.config.productionTip = false


new Vue({
  el: '#app',
  render: h => h(App),
  router
});
