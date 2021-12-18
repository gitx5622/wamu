import {GET_PRODUCTS, GET_PRODUCTS_ERROR, GET_PRODUCTS_SUCCESS} from "../dispatchTypes";

export const initialOrdersState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: '',
    orders: [],
}

export const productReducers = (
    state = initialOrdersState,
    action
) => {
    switch (action.type) {
        case GET_PRODUCTS: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case GET_PRODUCTS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                orders: action.orders,
            };
        }
        case GET_PRODUCTS_ERROR: {
            return {
                ...state,
                isError: true,
                isSuccess: false,
                isLoading: false,
                errorMessage: action.errorMessage,
            };
        }
        default:
            return state
    }

};