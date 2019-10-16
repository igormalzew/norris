import axios from "axios";
import { JOKES_API_URL } from "../.env";

const entity = "jokes";

class JokesService {
  getRandomJoke() {
    return new Promise((resolve, reject) => {
      return axios
        .get(`${JOKES_API_URL}${entity}/random`)
        .then(response => resolve(response.data))
        .catch(error => {
          let message = error.response.data
            ? error.response.data.error
            : error.response.statusText;
          reject(message);
        });
    });
  }
}

export default new JokesService();
