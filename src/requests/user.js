import { BASE_URL } from "../config";

export default {
  current() {
    return fetch(`${BASE_URL}/users/current`, {
      credentials: "include"
    }).then(response => response.json());
  }
};
