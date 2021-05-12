export const SET_PREVIOUS_PROFILE_DATA = 'SET_PREVIOUS_PROFILE_DATA';
export const SET_NAME = 'SET_NAME';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_ADDRESS = 'SET_ADDRESS';
export const SET_PHONE1 = 'SET_PHONE1';
export const SET_PHONE2 = 'SET_PHONE2';
export const SET_FACEBOOK_URL = 'SET_FACEBOOK_URL';
export const SET_INSTAGRAM_URL = 'SET_INSTAGRAM_URL';
export const SET_TWITTER_URL = 'SET_TWITTER_URL';
export const SET_YOUTUBE_URL = 'SET_YOUTUBE_URL';
export const SET_THEME = 'SET_THEME';
export const RESET_PROFILE_DATA = 'RESET_PROFILE_DATA';

export const setPreviousProfileData = payload => ({
  type: SET_PREVIOUS_PROFILE_DATA,
  payload,
});

export const setName = payload => ({
  type: SET_NAME,
  payload,
});

export const setEmail = payload => ({
  type: SET_EMAIL,
  payload,
});

export const setAddress = payload => ({
  type: SET_ADDRESS,
  payload,
});

export const setPhone1 = payload => ({
  type: SET_PHONE1,
  payload,
});

export const setPhone2 = payload => ({
  type: SET_PHONE2,
  payload,
});

export const setFacebookURL = payload => ({
  type: SET_FACEBOOK_URL,
  payload,
});

export const setInstagramURL = payload => ({
  type: SET_INSTAGRAM_URL,
  payload,
});

export const setTwitterURL = payload => ({
  type: SET_TWITTER_URL,
  payload,
});

export const setYoutubeURL = payload => ({
  type: SET_YOUTUBE_URL,
  payload,
});

export const setTheme = payload => ({
  type: SET_THEME,
  payload,
});

export const resetProfileData = () => ({
  type: RESET_PROFILE_DATA,
});
