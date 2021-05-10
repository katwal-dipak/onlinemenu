import {SET_MENU, RESET_MENU} from '../actions/menu';

const initialState = {
  menu: null,
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case SET_MENU:
      return {
        ...state,
        menu: payload,
      };

    case RESET_MENU:
      return {
        ...state,
        ...initialState,
      };

    default:
      return state;
  }
};
