import {
  SET_PREVIOUS_PROFILE_DATA,
  SET_NAME,
  SET_EMAIL,
  SET_ADDRESS,
  SET_PHONE1,
  SET_PHONE2,
  SET_FACEBOOK_URL,
  SET_INSTAGRAM_URL,
  SET_TWITTER_URL,
  SET_YOUTUBE_URL,
  RESET_PROFILE_DATA,
} from '../actions/profile';

const initialState = {
  previousData: null,
  name: null,
  email: null,
  address: null,
  phone1: null,
  phone2: null,
  facebookURL: null,
  instagramURL: null,
  twitterURL: null,
  youtubeURL: null,
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case SET_PREVIOUS_PROFILE_DATA:
      const {
        name,
        email,
        address,
        phone1,
        phone2,
        facebookURL,
        instagramURL,
        twitterURL,
        youtubeURL,
      } = payload || {};

      return {
        ...state,
        previousData: payload,
        name,
        email,
        address,
        phone1,
        phone2,
        facebookURL,
        instagramURL,
        twitterURL,
        youtubeURL,
      };

    case SET_NAME:
      return {
        ...state,
        name: payload,
      };

    case SET_EMAIL:
      return {
        ...state,
        email: payload,
      };

    case SET_ADDRESS:
      return {
        ...state,
        address: payload,
      };

    case SET_PHONE1:
      return {
        ...state,
        phone1: payload,
      };

    case SET_PHONE2:
      return {
        ...state,
        phone2: payload,
      };

    case SET_FACEBOOK_URL:
      return {
        ...state,
        facebookURL: payload,
      };

    case SET_INSTAGRAM_URL:
      return {
        ...state,
        instagramURL: payload,
      };

    case SET_TWITTER_URL:
      return {
        ...state,
        twitterURL: payload,
      };

    case SET_YOUTUBE_URL:
      return {
        ...state,
        youtubeURL: payload,
      };

    case RESET_PROFILE_DATA:
      return {
        ...state,
        ...initialState,
      };

    default:
      return state;
  }
};
