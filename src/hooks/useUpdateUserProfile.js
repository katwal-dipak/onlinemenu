import {useState} from 'react';
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import {FIRESTORE_COLLECTION} from '../constants';

const useUpdateUserProfile = () => {
  const {firebaseAuthUserObj} = useSelector(state => state.user);
  const [loading, setLoading] = useState();
  const [success, setSuccess] = useState();

  const {uid} = firebaseAuthUserObj || {};

  const onUpdateUserDoc = async data => {
    setLoading(true);

    try {
      const userDocRef = FIRESTORE_COLLECTION.USERS.doc(uid);

      const doc = await userDocRef.get();

      const combinedData = {
        ...data,
        updatedAt: firestore.FieldValue.serverTimestamp(),
      };

      if (doc.exists) {
        await userDocRef.update(combinedData);
        setSuccess(true);
      } else {
        /**
         * https://firebase.google.com/docs/firestore/manage-data/add-data#set_a_document
         * If you're not sure whether the document exists,
         * pass the option to merge the new data with any existing document to avoid overwriting entire documents.
         */

        await userDocRef.set(
          {...combinedData, id: uid},
          {merge: true}, //this will prevent from accidental overwrite
        );

        setSuccess(true);
      }
    } catch (error) {
      setLoading(false);
    }

    setLoading(false);
  };

  return {loading, success, onUpdateUserDoc};
};

export default useUpdateUserProfile;

/**
 * const MENUDATA = [
  {
    title: 'SMOOTHIES',
    data: [
      {
        price: '$5.50',
        active: true,
        description:
          'Strawberry Juice, Pineapple Juice, Bananas, Strawberries, Yogurt',
        title: 'STRAWBERRY BANANA',
      },
      {
        price: '$7.25',
        active: true,
        description:
          'Apple Juice, Strawberry Juice, Blueberries, Bananas, Orange Sherbet',
        title: 'BLUEBERRY DREAM',
      },
      {
        price: '$4.50',
        active: true,
        description: 'Apple Juice, Peaches, Bananas, Orange Sherbet, Yogurt',
        title: 'PEACH BEACH',
      },
      {
        price: '$5.00',
        active: true,
        description: 'Apple Juice, Raspberries, Bananas, Raspberry Sherbet',
        title: 'RASPBERRY HARMONY',
      },
      {
        price: '$5.50',
        active: true,
        description:
          'Cranberry Juice, Blueberries, Strawberries, Bananas, Raspberry Sherbet, Yogurt',
        title: 'CRANBERRY FIX',
      },
      {
        price: '$4.50',
        active: true,
        description:
          'Papaya Juice, Pineapple Juice, Strawberries, Bananas, Orange Sherbet, Pineapple Sorbet',
        title: 'TROPICAL BLAST',
      },
      {
        price: '$6.00',
        active: true,
        description:
          'Fresh Squeezed Orange Juice, Cranberry Juice, Strawberries, Blueberries, Raspberries, Raspberry Sherbet, Yogurt',
        title: 'CITRUS BERRY',
      },
    ],
    active: true,
  },
  {
    title: 'BOWLS',
    data: [
      {
        price: '$8.50',
        active: true,
        description:
          'Organic Acai, Fresh Banana And Granola (Add Peanut Butter Or Blueberries For $.50)',
        title: 'THE “ORIGINAL” ACAI BOWL',
      },
      {
        price: '$8.00',
        active: true,
        description:
          'Our Famous Pb&g Wrap Served In A Bowl! Peanut Butter, Fresh Banana, Granola, Honey, Low-fat Vanilla Yogurt',
        title: 'PB&G BOWL',
      },
      {
        price: '$8.50',
        active: true,
        description:
          'Dragonfruit, Raspberries, Mangos, Almond Milk, Strawberry Juice',
        title: 'DRAGONFRUIT BOWL',
      },
      {
        price: '$8.50',
        active: true,
        description:
          'Hass Avocado, Mangos, Bananas, Pineapple Sorbet, Honey, Soy Milk',
        title: 'AVOCADO BOWL',
      },
    ],
    active: true,
  },
  {
    title: 'WRAPS & SALADS',
    data: [
      {
        price: '$6.00',
        active: true,
        description:
          'Tender Chicken Breast, Cucumber, Shredded Carrots, Romaine Lettuce, And Sesame Ginger Dressing',
        title: 'ASIAN CHICKEN WRAP',
      },
      {
        price: '$5.00',
        active: true,
        description:
          'Romaine Lettuce, Shredded Carrots, Cucumbers, Tomatoes, Choice Of Cheese And Dressing',
        title: 'VEGGIE WRAP',
      },
      {
        price: '$8.50',
        active: true,
        description:
          'Sliced Smoked Turkey Breast, Hass Avocado, Fat-free Mayonnaise, Tomato, And Romaine Lettuce',
        title: 'AVOCADO TURKEY WRAP',
      },
      {
        price: '$4.50',
        active: true,
        description:
          'Romaine Lettuce, Tomato, Shredded Carrots, Cucumber, Choice Of Cheese And Dressing',
        title: 'GARDEN SALAD',
      },
    ],
    active: true,
  },
  {
    title: 'SHOTS',
    data: [
      {
        price: '$4.00',
        active: true,
        description:
          'A mineral-rich shot packed with detoxifying benefits, enhancing overall well-being. A daily serving of vegetables in just 1oz!',
        title: 'WHEATGRASS SHOTS',
      },
      {
        price: '$4.00',
        active: true,
        description:
          'Freshly-juiced Ginger And Lemon In A 2 Oz. Blast Of Immune-boosting Properties. Reduces Inflammation While Increasing Energy And Focus. Choose A Cayenne Or Turmeric Topper For An Extra Boost!',
        title: 'GINGER SHOTS',
      },
    ],
    active: true,
  },
  {
    title: 'JUICES',
    data: [
      {
        price: '$3.50',
        active: true,
        description:
          'Our Simple Blend Of Freshly Juiced Apples & Lemon.  (Add Kale Or Ginger For $.50)',
        title: 'PULP LEMONADE',
      },
    ],
    active: true,
  },
];
 */
