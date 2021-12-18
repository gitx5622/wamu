import axiosConfig from '../../config/axios';
import { GET_PRODUCTS_ERROR, GET_PRODUCTS_SUCCESS, GET_PRODUCTS} from '../dispatchTypes';


export const getProducts = async (dispatch) => {
    dispatch({
        type: GET_PRODUCTS,
    });
    try {
        return await axiosConfig
            .get('/products')
            .then(response => {
                dispatch({
                    type: GET_PRODUCTS_SUCCESS,
                    products: response.data,
                });
                return response;
            });
    } catch (error) {
        dispatch({
            type: GET_PRODUCTS_ERROR,
            errorMessage: error.response.data.message,
        });

        return error.response;
    }
};
