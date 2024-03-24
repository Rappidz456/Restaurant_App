import {SET_DATA} from '../../contants/Types';
import info from '../models/info';
const reducer = (state = info, action) => {
  const {type, payload} = action
  switch (type) {
    case SET_DATA:
      return {
        ...state,
        userData: payload,
      }
    default:
    return state;
  }
};

export default reducer;
