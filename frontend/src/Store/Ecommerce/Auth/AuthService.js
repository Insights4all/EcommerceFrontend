import axios from "axios";

const UserLogin = (payload) => {
  console.log("payload", payload);
  return axios
    .post(`http://localhost:8080/newlogin`, payload)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

const UserRegister = (payload) => {
  console.log("payloadREGISTER", payload);
  return axios.post(`http://localhost:8080/newregister`, payload);
};

const ShopLogin = (payload) => {
  console.log("payload", payload);
  return axios
    .post(`http://localhost:8080/shoplogin`, payload)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

const ShopRegister = (payload) => {
  console.log("payloadREGISTER", payload);
  return axios.post(`http://localhost:8080/shopregister`, payload);
};

export const AuthService = {
  UserLogin,
  UserRegister,
  ShopLogin,
  ShopRegister,
};
