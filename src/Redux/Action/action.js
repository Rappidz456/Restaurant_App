import { SET_DATA } from "../../contants/Types";

const action = payload => ({
    type: SET_DATA,
    payload: payload
})

export default action