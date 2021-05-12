import {
  SET_MENU,
  SET_SELECTED_SECTION_INDEX,
  SET_SELECTED_MENU_ITEM_INDEX,
  RESET_MENU,
} from '../actions/menu';

const initialState = {
  menu: null,
  selectedMenuSectionIndex: null,
  selectedMenuItemIndex: null,
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case SET_MENU:
      return {
        ...state,
        menu: payload,
      };

    case SET_SELECTED_SECTION_INDEX:
      return {
        ...state,
        selectedMenuSectionIndex: payload,
      };

    case SET_SELECTED_MENU_ITEM_INDEX:
      return {
        ...state,
        selectedMenuItemIndex: payload,
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
