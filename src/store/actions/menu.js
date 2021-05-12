export const SET_MENU = 'SET_MENU';
export const SET_SELECTED_SECTION_INDEX = 'SET_SELECTED_SECTION_INDEX';
export const SET_SELECTED_MENU_ITEM_INDEX = 'SET_SELECTED_MENU_ITEM_INDEX';
export const RESET_MENU = 'SET_MENU';

export const setMenu = payload => ({
  type: SET_MENU,
  payload,
});

export const setSelectedMenuSectionIndex = payload => ({
  type: SET_SELECTED_SECTION_INDEX,
  payload,
});

export const setSelectedMenuItemIndex = payload => ({
  type: SET_SELECTED_MENU_ITEM_INDEX,
  payload,
});

export const resetMenu = payload => ({
  type: RESET_MENU,
  payload,
});
