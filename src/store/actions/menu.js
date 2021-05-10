export const SET_MENU = 'SET_MENU';
export const RESET_MENU = 'SET_MENU';

export const setMenu = payload => ({
  type: SET_MENU,
  payload,
});

export const resetMenu = payload => ({
  type: RESET_MENU,
  payload,
});
