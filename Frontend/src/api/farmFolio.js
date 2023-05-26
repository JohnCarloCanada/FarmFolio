import axios from "axios";

export default axios.create({
  baseURL: "https://farmfolio.onrender.com/api/crops",
});
