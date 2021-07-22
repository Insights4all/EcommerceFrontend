import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

// Ecommerce reducers

import { AuthReducer } from "./Auth/AuthReducer";
import { CustomerReducer } from "./Customer/CustomerReducer";


// Ecommerce saga
import { CustomerSaga } from "./Customer/CustomerSaga";
import { AuthSaga } from "./Auth/AuthSaga";


export const EcommerceReducer = combineReducers({
    auth: AuthReducer,
    customer:CustomerReducer
})

export function* EcommerceSaga() {
    yield all([
        AuthSaga(),
        CustomerSaga()
    ]);
}