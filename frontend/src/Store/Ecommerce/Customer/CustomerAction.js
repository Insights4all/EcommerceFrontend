export const CustomerActionTypes = {
    //Customer list
    GET_ALL_PRODUCTS_REQUEST: "GET_ALL_PRODUCTS_REQUEST", //cp customer list request and ....
    GET_ALL_PRODUCTS_REQUEST_FAILED: "GET_ALL_PRODUCTS_REQUEST_FAILED",
    GET_ALL_PRODUCTS_REQUEST_SUCCESS: "GET_ALL_PRODUCTS_REQUEST_SUCCESS",

    //Save Form Data
    SAVE_FORM_DATA_REQUEST:"SAVE_FORM_DATA_REQUEST",
    SAVE_FORM_DATA_SUCCESS:"SAVE_FORM_DATA_SUCCESS",

    //Submit Shopkeeper Data
    SUBMIT_SHOPKEEPER_DATA_REQUEST:"SUBMIT_SHOPKEEPER_DATA_REQUEST",
    SUBMIT_SHOPKEEPER_DATA_SUCCESS:"SUBMIT_SHOPKEEPER_DATA_SUCCESS",
    SUBMIT_SHOPKEEPER_DATA_FAILED:"SUBMIT_SHOPKEEPER_DATA_FAILED",

    //add to cart
    ADD_TO_CART_REQUEST:"ADD_TO_CART_REQUEST",
    ADD_TO_CART_SUCCESS:"ADD_TO_CART_SUCCESS",

    //add to cart
    ADD_TO_CART_API_REQUEST:"ADD_TO_CART_API_REQUEST",
    ADD_TO_CART__API_SUCCESS:"ADD_TO_CART__API_SUCCESS",
    ADD_TO_CART__API_FAILED:"ADD_TO_CART__API_FAILED",





  
}

const GetAllProducts = (payload) => {   
    return { type: CustomerActionTypes.GET_ALL_PRODUCTS_REQUEST, payload };
}

const SaveFormData = (payload) => {   
    return { type: CustomerActionTypes.SAVE_FORM_DATA_REQUEST, payload };
}

const ShopkeeperData = (payload) => {   
    return { type: CustomerActionTypes.SUBMIT_SHOPKEEPER_DATA_REQUEST, payload };
}

const AddToCart = (payload) => {   
    return { type: CustomerActionTypes.ADD_TO_CART_REQUEST, payload };
}

const AddToCartApi = (payload) => {   
    return { type: CustomerActionTypes.ADD_TO_CART_API_REQUEST, payload };
}




export const CustomerAction = { 
    GetAllProducts,
    SaveFormData,
    ShopkeeperData,
    AddToCart,
    AddToCartApi
}