import { call, put, takeLatest } from "redux-saga/effects";
import {  CustomerActionTypes } from "./CustomerAction";
import { CustomerService } from "./CustomerService";


 function* GetAllProducts(action) {
    try {
        const res = yield call(CustomerService.GetAllProducts );


        if ([1, 200].includes(res.status)) {

            const payload = res.data;
            yield put({ type: CustomerActionTypes.GET_ALL_PRODUCTS_REQUEST_SUCCESS, payload});
        } else {

            yield put({ type: CustomerActionTypes.GET_ALL_PRODUCTS_REQUEST_FAILED});

        }
    } catch (error) {
        console.log(`Action ${action.type} failed with ${error}`);
    }
}

function* SubmitShopkeeperData(action) {
    console.log("action.payload",)
    try {
        const res = yield call(CustomerService.SubmitShopkeeperData, action.payload);
        
        if ([1, 200].includes(res.status)) {
                console.log("saga yes")
            // const payload = yield call(CPCustomerParser.CPCustomerPersonalInfo, res);
            yield put({ type: CustomerActionTypes.SUBMIT_SHOPKEEPER_DATA_SUCCESS, payload:action.payload });
        } else {
            console.log("saga no", res)
            yield put({ type: CustomerActionTypes.SUBMIT_SHOPKEEPER_DATA_FAILED });
        }
    } catch (error) {
        console.log(`Action ${action.type} failed with ${error}`);
    }
}


function* SaveFormData(action) {
    try {
     yield put({ type: CustomerActionTypes.SAVE_FORM_DATA_SUCCESS , payload:action.payload});

    } catch (error) {
        console.log(`Action ${action.type} failed with ${error}`);
    }
}

function* AddToCart(action) {
    yield put({ type: CustomerActionTypes.ADD_TO_CART_SUCCESS , payload:action.payload});

    try {
        const res = yield call(CustomerService.AddToCartApi, action.payload);
        if ([1, 200,201].includes(res.status)) {
            console.log("saga yes")
        // const payload = yield call(CPCustomerParser.CPCustomerPersonalInfo, res);
        yield put({ type: CustomerActionTypes.ADD_TO_CART__API_SUCCESS, payload:action.payload });
    } else {
        console.log("saga no", res)
        yield put({ type: CustomerActionTypes.ADD_TO_CART__API_FAILED });
    }

    } catch (error) {
        console.log(`Action ${action.type} failed with ${error}`);
    }
}

export function* CustomerSaga() {
    yield takeLatest(CustomerActionTypes.GET_ALL_PRODUCTS_REQUEST , GetAllProducts);
    yield takeLatest(CustomerActionTypes.SAVE_FORM_DATA_REQUEST , SaveFormData);
    yield takeLatest(CustomerActionTypes.SUBMIT_SHOPKEEPER_DATA_REQUEST , SubmitShopkeeperData);
    yield takeLatest(CustomerActionTypes.ADD_TO_CART_REQUEST , AddToCart);

}