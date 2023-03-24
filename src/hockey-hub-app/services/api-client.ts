import axios from "axios";

export default axios.create({
  baseURL: "https://statsapi.web.nhl.com",
  params: { "Content-Type": "application/json" },
});
