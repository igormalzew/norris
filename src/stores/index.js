import Vue from "vue";
import Vuex from "vuex";
import joke from "./modules/joke";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    joke
  }
});
