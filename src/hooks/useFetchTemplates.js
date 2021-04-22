import {useState, useEffect} from 'react';

import {FIRESTORE_PAGINATION_SIZE, FIRESTORE_COLLECTION} from '../constants';

const useFetchTemplates = () => {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [paginating, setPaginating] = useState();
  const [error, setError] = useState(false);
  const [lastVisible, setLastVisible] = useState();

  useEffect(() => {
    async function fetchDataFromServer() {
      setLoading(true);
      await fetchData();
      setLoading(false);
    }

    fetchDataFromServer();
  }, []);

  const fetchData = async () => {
    let query = FIRESTORE_COLLECTION.TEMPLATES
      //  .where('active', '==', true) //Only fetch active products
      // .where('isGroupParent', '==', true) //Only fetch parent product, don't show variants in listing
      .limit(FIRESTORE_PAGINATION_SIZE);

    if (lastVisible) {
      query = query.startAfter(lastVisible);
    }

    try {
      await query.get().then(querySnapshot => {
        const templatesArray = [];

        querySnapshot.forEach(doc => {
          templatesArray.push(doc.data());
        });

        const lastVisibleDoc =
          querySnapshot.docs[querySnapshot.docs.length - 1];

        if (lastVisible) {
          setTemplates([...templates, ...templatesArray]);
        } else {
          setTemplates(templatesArray);
        }

        setLastVisible(lastVisibleDoc);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await setLastVisible();
    await fetchData();
    setRefreshing(false);
  };

  const onRetry = async () => {
    setError(false);
    setLoading(true);
    await fetchData();
    setLoading(false);
  };

  const onEndReached = async () => {
    if (!paginating && lastVisible) {
      setPaginating(true);
      await fetchData();
      setPaginating(false);
    }
  };

  return {
    templates,
    loading,
    refreshing,
    paginating,
    error,
    onRefresh,
    onRetry,
    onEndReached,
  };
};

export default useFetchTemplates;
