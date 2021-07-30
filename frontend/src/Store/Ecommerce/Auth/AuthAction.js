export const AuthActionTypes = {
    //Customer list
    USER_LOGIN_REQUEST: "USER_LOGIN_REQUEST", 
    USER_LOGIN_FAILED: "USER_LOGIN_FAILED",
    USER_LOGIN_SUCCESS: "USER_LOGIN_SUCCESS",

    //User  Register
    USER_REGISTER_REQUEST: "USER_REGISTER_REQUEST", 
    USER_REGISTER_FAILED: "USER_REGISTER_FAILED",
    USER_REGISTER_SUCCESS: "USER_REGISTER_SUCCESS",                    
       

}

const UserLogin = (payload) => {   
    return { type: AuthActionTypes.USER_LOGIN_REQUEST, payload };
}

const UserRegister = (payload) => {   
    return { type: AuthActionTypes.USER_REGISTER_REQUEST, payload };
}



export const AuthAction = { 
    UserLogin,
    UserRegister
}