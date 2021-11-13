import { combineReducers } from 'redux';
import { ordersReducers } from "./ordersReducer";


const rootReducer = combineReducers({
    orderState: ordersReducers,
});

export default rootReducer;
