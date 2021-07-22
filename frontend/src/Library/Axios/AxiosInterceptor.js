import _get from "lodash.get";

import axios from ".";
// import toastService from "src/util/toast";
// import { config } from "src/Config";

const axiosInterceptor = (dispatch) => {
  //request interceptors
  async function commonRequest(request) {
    // try {
    //   const token = localStorage.getItem("token") 

    //   if(token){
    //     request.headers["Authorization"] = `Token ${JSON.parse(token)}`;
    //   }

    //   // request.headers["Authorization"] = `Token ${token}`;
    // } catch (ex) {}
    return request;
  }

  function commonResponse(response) {
    //hide loader

    if (!response) {
      //show alert
      return;
    }

    // set message to toast service
    if (response.data && response.data.code === -1) {
      // toastService.show(response.data.message);
    }

    //got response success
    if (response.status === 400) {
      // TODO: Add handling for bad request
    }
    if (response.status === 401) {
      // TODO: Add handling for unauthorized request
    }

    //got response success
    if (response.data.status !== 1) {
      // TODO: Add handling for invalid response
    }
  }

  

  

  

  //response interceptors
  axios.interceptors.response.use(
    (response) => {
      if (!response.data) {
        return response;
      }
      
      commonResponse(response);

      //show toast

      // Do something with response data
      return _get(response, "data", {});
    },
    (error) => {
      console.log("Api Error", error);
      //hide loader
      commonResponse(error.response);

      // Do something with response error
      return Promise.reject(error);
    }
  );
};

export default axiosInterceptor;
