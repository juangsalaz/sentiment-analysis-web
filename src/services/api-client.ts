import axios from "axios";

export default axios.create({
  baseURL: "https://sentiment-analysis-api-flax.vercel.app/api"
});
