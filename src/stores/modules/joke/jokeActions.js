import JokesService from "@/services/jokes.service";

export default {
  getRandomJoke({ commit }) {
    return JokesService.getRandomJoke()
      .then(joke => commit("SET_CURRENT_JOKE", joke))
      .catch(error =>

        // TODO
        commit(
          "toast/NEW",
          { type: "error", message: error.message },
          { root: true }
        )
      );
  }
};
