import React from 'react';
import {ScrollView, View} from 'react-native';
import {PricingCard} from 'react-native-elements';
import {styles} from './styles';

const {containerStyle, cardStyle} = styles;

const Pricing = () => {
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
