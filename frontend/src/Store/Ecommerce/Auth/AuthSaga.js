import { call, put, takeLatest } from "redux-saga/effects";
import { AuthAction, AuthActionTypes } from "./AuthAction";
import { AuthParser } from "./AuthParser";
import { AuthService } from "./AuthService";



 function* UserLogin(action) {
    try {
        const res = yield call(AuthService.UserLogin );

        if ([1, 200].includes(res.code)) {
            // const payload = yield call(AuthParser.GetAllProducts, res);
            yield put({ type: AuthActionTypes.USER_LOGIN_SUCCESS , res});

        } else {
            yield put({ type: AuthActionTypes.USER_LOGIN_FAILED });

        }
    } catch (error) {
        console.log(`Action ${action.type} failed with ${error}`);
    }
}



export function* AuthSaga() {
    yield takeLatest(AuthActionTypes.USER_LOGIN_SUCCESS  , UserLogin);
}