import { AuthAction, AuthActionTypes } from "./AuthAction";



const initialState = {
    login_Data: {
        isLoading: false,
        isLoadingFailed: false,
        isInitialCalled: false,
        data: []
    },

}

export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case AuthActionTypes.USER_LOGIN_REQUEST :
            return {
                ...state,
                login_Data:{
                    ...state.login_Data,
                    isLoading: true,
                    isInitialCalled: true
                }
            };
        
        case AuthActionTypes.USER_LOGIN_SUCCESS :
            return {
                ...state,
                login_Data:{
                    ...state.login_Data,
                    isLoading: false,
                    isLoadingFailed: false,
                    data: action.payload
                }
            };
        
        // eslint-disable-next-line no-lone-blocks
        case AuthActionTypes.USER_LOGIN_FAILED : {
            return {
                ...state,
                login_Data:{
                    ...state.login_Data,
                    isLoading: false,
                    isLoadingFailed: true,
                }
            };
        };
        
        default:
            return state;
    }
}