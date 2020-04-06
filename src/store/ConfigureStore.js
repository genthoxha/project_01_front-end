import { createStore, combineReducers } from 'redux';
import vehicleReducer from '../reducers/VehicleReducer';



const rootReducer = combineReducers(
    { count: vehicleReducer }
);

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;