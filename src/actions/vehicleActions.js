import GET_VEHICLE from  './constants'



export function recieveVehicle(vehicle) {
    return {
        type: GET_VEHICLE,
        payload: vehicle
    }
}