import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2108f5fdcffe4ff8ae89b5ff89837ad2",
  },
});
