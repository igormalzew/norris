import state from "./jokeState";
import mutations from "./jokeMutations";
import getters from "./jokeGetters";
import actions from "./jokeActions";

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
};
