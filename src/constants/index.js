import firestore from '@react-native-firebase/firestore';
import {Dimensions} from 'react-native';

export const DEVICE = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

export const FIRESTORE_PAGINATION_SIZE = 15;

export const FIRESTORE_COLLECTION = {
  MERCHANTS: firestore().collection('merchants'),
  TEMPLATES: firestore().collection('themes'),
  USERS: firestore().collection('users'),
};
