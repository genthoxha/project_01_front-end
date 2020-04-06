import {GET_VEHICLE} from "../constants/constants";

const initialState = {
    count: 0
};

const vehicleReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_VEHICLE:
            return {
                ...state,
                count:action.payload
            };
        default:
            return state;
    }
}
export default vehicleReducer;
