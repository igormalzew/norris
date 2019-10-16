import Vue from "vue";
import AppLayout from "@/layout";
import store from "@/stores/index";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  store,
  render: h => h(AppLayout),
}).$mount('#app')