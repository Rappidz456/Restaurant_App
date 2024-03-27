import * as ACTION_TYPE from '../../contants/Types'
import { info } from '../models';

export default (state = info, action) => {
  const {type, payload} = action
  switch (type) {
    case ACTION_TYPE.SET_DATA:
      return {
        ...state,
        userData: payload,
      }
    default:
    return state;
  }
};
