import { call, put, takeLatest } from "redux-saga/effects";
import {  AuthActionTypes } from "./AuthAction";
import { AuthService } from "./AuthService";



 function* UserLogin(action) {
     const { response, error } = yield call(AuthService.UserLogin, action.payload );
    console.log("response", response)
//     try {
//         const { response, error } = yield call(AuthService.UserLogin, action.payload );
//         console.log("dsafa", response,"asdfasdf," ,response.data, response.status)

//         if ([1, 200,201].includes(response.status)) {
//             localStorage.setItem("token", response.data.accessToken)
//             // const payload = yield call(AuthParser.GetAllProducts, res);
//             console.log("loginSuccess", response)
//             // const Res = res.response
//             yield put({ type: AuthActionTypes.USER_LOGIN_SUCCESS ,response});

//         }  else {
//             console.log("failed,400,login",response)
//             // const Res = response.response
//             yield put({ type: AuthActionTypes.USER_LOGIN_FAILED, response });
//         }
//     } catch (error) {
//         console.log(`Action ${action.type} failed with ${error}`);
        
//     }
// }
if (response){
    localStorage.setItem("token", response.data.accessToken)
  yield put({ type: AuthActionTypes.USER_LOGIN_SUCCESS ,response});}
else
yield put({ type: AuthActionTypes.USER_LOGIN_FAILED, error });
}



function* UserRegister(action) {
    try {
        const res = yield call(AuthService.UserRegister, action.payload );
        console.log("dsafa", res)

        if ([1, 200,201].includes(res.status)) {
            localStorage.setItem("token", res.data.accessToken)
            // const payload = yield call(AuthParser.GetAllProducts, res);
            yield put({ type: AuthActionTypes.USER_REGISTER_SUCCESS , res});

        } else {
            console.log("success")

            yield put({ type: AuthActionTypes.USER_REGISTER_FAILED });

        }
    } catch (error) {
        console.log(`Action ${action.type} failed with ${error}`);
    }
}



export function* AuthSaga() {
    yield takeLatest(AuthActionTypes.USER_LOGIN_REQUEST  , UserLogin);
    yield takeLatest(AuthActionTypes.USER_REGISTER_REQUEST  , UserRegister);

}

