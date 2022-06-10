import axios from "axios";
import {baseUrl} from "./config";

export const api = {
  getCharacterList() {
    return axios({
      method: "get",
      url: baseUrl,
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      },
    }).catch(error => error);
  },
};