import {COUNT_VEHICLE} from "./vehicleType";

const initialState = {
    count: 1
};

const vehicleReducer = (state = initialState, action) =>{
    switch (action.type) {
        case COUNT_VEHICLE: return{
            ...state,
            count: state.count
        }
        default: return state
    }
};

export default vehicleReducer;