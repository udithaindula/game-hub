import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "012e55dc428544b889b24d1a458cc1c6",
  },
});
