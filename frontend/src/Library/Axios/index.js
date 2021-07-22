import * as coreAxios from "axios";
// import { config } from "src/constant";


const axios = coreAxios.default.create({
//   baseURL: config.baseURL,
  baseURL: "http://localhost:4000",

});

export default axios;
