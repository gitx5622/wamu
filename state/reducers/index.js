import { combineReducers } from 'redux';
import {productReducers} from "./productReducer";


const rootReducer = combineReducers({
    productState: productReducers,
});

export default rootReducer;
