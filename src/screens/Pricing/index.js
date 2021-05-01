import React from 'react';
import {Linking, SafeAreaView, ScrollView, View} from 'react-native';
import {PricingCard} from 'react-native-elements';
import {Button} from '../../components';
import {styles} from './styles';

const {containerStyle, buttonContainerStyle} = styles;

const Pricing = ({navigation}) => {
  const onPressManageSubscription = () => {
    const URL = 'https://onlinemenu.today/';

    Linking.canOpenURL(URL).then(supported => {
      if (supported) {
        Linking.openURL(URL);
      }
    });
  };

  return (
    <SafeAreaView style={containerStyle}>
      <ScrollView
        style={containerStyle}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <PricingCard
          color="#53AEDD"
          title="Free"
          price="$0"
          info={['1 Week', 'All Templates']}
          button={{title: 'GET STARTED'}}
          containerStyle={{borderColor: '#53AEDD'}}
          // onButtonPress={onPressManageSubscription}
        />

        <PricingCard
          color="#B595E7"
          title="Starter"
          price="$0.99"
          info={['Per Month', 'Basic Templates']}
          button={{title: 'SELECT PLAN'}}
          containerStyle={{borderColor: '#B595E7'}}
          onButtonPress={onPressManageSubscription}
        />

        <PricingCard
          color="#E7AC44"
          title="Pro"
          price="$4.99"
          info={['Per Month', 'Premium Templates']}
          button={{title: 'SELECT PLAN'}}
          containerStyle={{borderColor: '#E7AC44'}}
          onButtonPress={onPressManageSubscription}
        />
      </ScrollView>
      <View style={buttonContainerStyle}>
        <Button
          label="MANAGE SUBSCRIPTION"
          onPress={onPressManageSubscription}
        />
      </View>
    </SafeAreaView>
  );
};

export default Pricing;
