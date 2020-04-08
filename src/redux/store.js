import {applyMiddleware, createStore} from "redux";
import vehicleReducer from "./vehicle/vehicleReducer";
import thunk from "redux-thunk";

const store = createStore(vehicleReducer);
applyMiddleware(thunk);

export default store