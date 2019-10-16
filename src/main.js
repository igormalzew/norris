import Vue from "vue";
import AppLayout from "@/layout";
import store from "@/stores/index";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  components: { AppLayout },
  template: "<AppLayout />"
});
