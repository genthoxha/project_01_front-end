import {
  FETCH_VEHICLES_SUCCESS,
  FETCH_VEHICLES_FAIL,
  FETCH_VEHICLES_PENDING,

  CREATE_VEHICLE_PENDING,
  CREATE_VEHICLE_SUCCESS,
  CREATE_VEHICLE_FAIL,

  DELETE_VEHICLE_SUCCESS,
  DELETE_VEHICLE_FAIL,
  DELETE_VEHICLE_PENDING, EDIT_VEHICLE_PENDING, EDIT_VEHICLE_SUCCESS, EDIT_VEHICLE_FAIL
} from "../constants";

const initialState = {
  pending: false,
  data: null,
  error: null,
  type: "empty",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_VEHICLES_PENDING || CREATE_VEHICLE_PENDING || DELETE_VEHICLE_PENDING || EDIT_VEHICLE_PENDING:
      return {
        ...state,
        pending: true,
        type: action.type,
      };
    case FETCH_VEHICLES_SUCCESS || CREATE_VEHICLE_SUCCESS || DELETE_VEHICLE_SUCCESS || EDIT_VEHICLE_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.payload,
        type: action.type,
      };
    case FETCH_VEHICLES_FAIL || CREATE_VEHICLE_FAIL || DELETE_VEHICLE_FAIL || EDIT_VEHICLE_FAIL:
      return {
        ...state,
       error: action.payload, type: action.type,
      };
    default:
      return state;
  }
}
/// krijoj qeto redcucers per kejt edhe te thirri apet