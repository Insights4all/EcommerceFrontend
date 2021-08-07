export const AuthActionTypes = {
  //Customer list
  USER_LOGIN_REQUEST: "USER_LOGIN_REQUEST",
  USER_LOGIN_FAILED: "USER_LOGIN_FAILED",
  USER_LOGIN_SUCCESS: "USER_LOGIN_SUCCESS",

  //User  Register
  USER_REGISTER_REQUEST: "USER_REGISTER_REQUEST",
  USER_REGISTER_FAILED: "USER_REGISTER_FAILED",
  USER_REGISTER_SUCCESS: "USER_REGISTER_SUCCESS",
  //Shop Login
  SHOP_LOGIN_REQUEST: "SHOP_LOGIN_REQUEST",
  SHOP_LOGIN_FAILED: "SHOP_LOGIN_FAILED",
  SHOP_LOGIN_SUCCESS: "SHOP_LOGIN_SUCCESS",

  //Shop Register
  SHOP_REGISTER_REQUEST: "SHOP_REGISTER_REQUEST",
  SHOP_REGISTER_FAILED: "SHOP_REGISTER_FAILED",
  SHOP_REGISTER_SUCCESS: "SHOP_REGISTER_SUCCESS",
};

const UserLogin = (payload) => {
  return { type: AuthActionTypes.USER_LOGIN_REQUEST, payload };
};

const UserRegister = (payload) => {
  return { type: AuthActionTypes.USER_REGISTER_REQUEST, payload };
};
const ShopLogin = (payload) => {
  return { type: AuthActionTypes.SHOP_LOGIN_REQUEST, payload };
};

const ShopRegister = (payload) => {
  return { type: AuthActionTypes.SHOP_REGISTER_REQUEST, payload };
};

export const AuthAction = {
  UserLogin,
  UserRegister,
  ShopLogin,
  ShopRegister,
};
