import { AuthActionTypes } from "./AuthAction";

const initialState = {
  customer_login_Data: {
    isLoading: false,
    isLoadingFailed: false,
    isInitialCalled: false,
    data: {},
    errorMessage: "",
    error: "",
  },
  customer_register_Data: {
    isLoading: false,
    isLoadingFailed: false,
    isInitialCalled: false,
    data: {},
    errorMessage: "",
    error: "",
  },
  shop_login_Data: {
    isLoading: false,
    isLoadingFailed: false,
    isInitialCalled: false,
    data: {},
    errorMessage: "",
    error: "",
  },
  shop_register_Data: {
    isLoading: false,
    isLoadingFailed: false,
    isInitialCalled: false,
    data: {},
    errorMessage: "",
    error: "",
  },
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionTypes.USER_LOGIN_REQUEST:
      return {
        ...state,
        customer_login_Data: {
          ...state.customer_login_Data,
          isLoading: true,
          isInitialCalled: true,
          data: {},
        },
      };

    case AuthActionTypes.USER_LOGIN_SUCCESS:
      console.log("sucessoNLogin", action);
      return {
        ...state,
        customer_login_Data: {
          ...state.customer_login_Data,
          isLoading: false,
          isLoadingFailed: false,
          data: action.response.data,
          errorMessage: "",
        },
      };

    // eslint-disable-next-line no-lone-blocks
    case AuthActionTypes.USER_LOGIN_FAILED: {
      console.log("FailedNLogin", action);

      return {
        ...state,
        customer_login_Data: {
          ...state.customer_login_Data,
          isLoading: false,
          isLoadingFailed: true,
          errorMessage: "Error",
          error: action,
          data: {},
        },
      };
    }
    case AuthActionTypes.USER_REGISTER_REQUEST:
      return {
        ...state,
        customer_register_Data: {
          ...state.customer_register_Data,
          isLoading: true,
          isInitialCalled: true,
        },
      };

    case AuthActionTypes.USER_REGISTER_SUCCESS:
      console.log("sucessoNRegister", action.res);
      return {
        ...state,
        customer_register_Data: {
          ...state.customer_register_Data,
          isLoading: false,
          isLoadingFailed: false,
          data: action.res,
        },
      };

    // eslint-disable-next-line no-lone-blocks
    case AuthActionTypes.USER_REGISTER_FAILED: {
      return {
        ...state,
        customer_register_Data: {
          ...state.customer_register_Data,
          isLoading: false,
          isLoadingFailed: true,
          data: action.res,
          errorMessage: "error",
        },
      };
    }

    case AuthActionTypes.SHOP_LOGIN_REQUEST:
      return {
        ...state,
        shop_login_Data: {
          ...state.shop_login_Data,
          isLoading: true,
          isInitialCalled: true,
          data: {},
        },
      };

    case AuthActionTypes.SHOP_LOGIN_SUCCESS:
      console.log("sucessoNLogin", action);
      return {
        ...state,
        shop_login_Data: {
          ...state.shop_login_Data,
          isLoading: false,
          isLoadingFailed: false,
          data: action.response.data,
          errorMessage: "",
        },
      };

    // eslint-disable-next-line no-lone-blocks
    case AuthActionTypes.SHOP_LOGIN_FAILED: {
      console.log("FailedNLogin", action);

      return {
        ...state,
        shop_login_Data: {
          ...state.shop_login_Data,
          isLoading: false,
          isLoadingFailed: true,
          errorMessage: "Error",
          error: action,
          data: {},
        },
      };
    }
    case AuthActionTypes.SHOP_REGISTER_REQUEST:
      return {
        ...state,
        shop_register_Data: {
          ...state.shop_register_Data,
          isLoading: true,
          isInitialCalled: true,
        },
      };

    case AuthActionTypes.SHOP_REGISTER_SUCCESS:
      console.log("sucessoNRegister", action.res);
      return {
        ...state,
        shop_register_Data: {
          ...state.shop_register_Data,
          isLoading: false,
          isLoadingFailed: false,
          data: action.res,
        },
      };

    // eslint-disable-next-line no-lone-blocks
    case AuthActionTypes.SHOP_REGISTER_FAILED: {
      return {
        ...state,
        shop_register_Data: {
          ...state.shop_register_Data,
          isLoading: false,
          isLoadingFailed: true,
          data: action.res,
          errorMessage: "error",
        },
      };
    }

    default:
      return state;
  }
};
