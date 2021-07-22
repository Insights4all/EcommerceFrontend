import { CustomerActionTypes } from "./CustomerAction";


const initialState = {
    product_data: {
        isLoading: false,
        isLoadingFailed: false,
        isInitialCalled: false,
        data: []
    },
    form_data : {
        isLoading: false,
        isLoadingFailed: false,
        isInitialCalled: false,
        data : []
    }

}

export const CustomerReducer = (state = initialState, action) => {
    switch (action.type) {
        case CustomerActionTypes.GET_ALL_PRODUCTS_REQUEST :
            return {
                ...state,
                product_data:{
                    ...state.product_data,
                    isLoading: true,
                    isInitialCalled: true
                }
            };
        
        case CustomerActionTypes.GET_ALL_PRODUCTS_REQUEST_SUCCESS:
            console.log("redededed", action)
            return {
                ...state,
                product_data:{
                    ...state.product_data,
                    isLoading: false,
                    isLoadingFailed: false,
                    data: action.payload
                }
            };
        
        // eslint-disable-next-line no-lone-blocks
        case CustomerActionTypes.GET_ALL_PRODUCTS_REQUEST_FAILED: {
            return {
                ...state,
                product_data:{
                    ...state.product_data,
                    isLoading: false,
                    isLoadingFailed: true,
                }
            };
        };

        case CustomerActionTypes.SAVE_FORM_DATA_REQUEST  :
            return {
                ...state,
                form_data:{
                    ...state.form_data,
                    isLoading: true,
                    isInitialCalled: true
                }
            };
            case CustomerActionTypes.SAVE_FORM_DATA_SUCCESS  :
            return {
                ...state,
                form_data:{
                    ...state.form_data,
                    isLoading: false,
                    isLoadingFailed: false,
                    data: action.payload
                }
            };
        
        default:
            return state;
    }
}