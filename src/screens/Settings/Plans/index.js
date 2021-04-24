import React from 'react';
import {ScrollView, View} from 'react-native';
import {PricingCard} from 'react-native-elements';
import {styles} from './styles';

const {cardStyle} = styles;

const Plans = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
          info={['Per Month', 'Basic Templates']}
          button={{title: 'SELECT PLAN'}}
          containerStyle={{borderColor: '#E7AC44'}}
        />
      </View>

      <View style={cardStyle}>
        <PricingCard
          color="#02B44C"
          title="Elite"
          price="$9.99"
          info={['Per Month', 'Full Access']}
          button={{title: 'SELECT PLAN'}}
          containerStyle={{borderColor: '#02B44C'}}
        />
      </View>
    </ScrollView>
  );
};

Plans.propTypes = {};

export default Plans;
