import { all } from "redux-saga/effects";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";

// axios interceptor
import axiosInterceptor from "../Library/Axios/AxiosInterceptor";



// actions

// Reducer
import { EcommerceReducer } from "./Ecommerce";

// sagas
import { EcommerceSaga } from "./Ecommerce";
// import { AuthReducer } from "./Ecommerce";

// root reducer
export const rootReducer = combineReducers({
  ecommerce: EcommerceReducer,
});

// root saga
export function* rootSaga() {
  yield all([
    EcommerceSaga()
  ]);
}

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

/* eslint-disable */
const composeEnhancers =
  typeof window === 'object' &&
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
  // other store enhancers if any
);
/* eslint-enable */
const store = createStore(
  rootReducer,
  enhancer
);


sagaMiddleware.run(rootSaga);

//register axios interceptor
axiosInterceptor(store.dispatch);

// TODO: dispatcher to store data from async storage to store
// store.dispatch({ type: CPAuthActionTypes.CP_INITIAL_DATA_REQUEST });

export default store;
