export const AuthActionTypes = {
    //Customer list
    USER_LOGIN_REQUEST: "USER_LOGIN_REQUEST", //cp customer list request and ....
    USER_LOGIN_FAILED: "USER_LOGIN_FAILED",
    USER_LOGIN_SUCCESS: "USER_LOGIN_SUCCESS",


       

}

const UserLogin = (payload) => {   
    return { type: AuthActionTypes.USER_LOGIN_REQUEST, payload };
}



export const AuthAction = { 
    UserLogin,
}