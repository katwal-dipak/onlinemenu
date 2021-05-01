import React, {useLayoutEffect} from 'react';
import {ScrollView, View, TouchableOpacity, Text, Linking} from 'react-native';
import {PricingCard} from 'react-native-elements';
import {styles} from './styles';

const {containerStyle, cardStyle, titleTextStyle} = styles;

const Pricing = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={onPressManageSubscription}>
          <Text style={titleTextStyle}>MANAGE</Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  const onPressManageSubscription = () => {
    const URL = 'https://onlinemenu.today/';

    Linking.canOpenURL(URL).then(supported => {
      if (supported) {
        Linking.openURL(URL);
      }
    });
  };

  return (
    <ScrollView
      style={containerStyle}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <View style={cardStyle}>
        <PricingCard
          color="#53AEDD"
          title="Free"
          price="$0"
          info={['1 Week', 'All Templates']}
          button={{title: 'GET STARTED'}}
          containerStyle={{borderColor: '#53AEDD'}}
        />
      </View>

      <View style={cardStyle}>
        <PricingCard
          color="#B595E7"
          title="Starter"
          price="$0.99"
          info={['Per Month', 'Basic Templates']}
          button={{title: 'SELECT PLAN'}}
          containerStyle={{borderColor: '#B595E7'}}
        />
      </View>

      <View style={cardStyle}>
        <PricingCard
          color="#E7AC44"
          title="Pro"
          price="$4.99"
          info={['Per Month', 'Premium Templates']}
          button={{title: 'SELECT PLAN'}}
          containerStyle={{borderColor: '#E7AC44'}}
        />
      </View>
    </ScrollView>
  );
};

export default Pricing;
