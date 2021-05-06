import React from 'react';
import {
  Linking,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
  View,
  Text,
} from 'react-native';
import {Surface} from 'react-native-paper';
import {Button} from '../../components';
import {styles} from './styles';

const {
  containerStyle,
  cardContainerStyle,
  buttonContainerStyle,
  titleTextStyle,
  priceTextStyle,
} = styles;

const Pricing = ({navigation}) => {
  const onPressManageSubscription = () => {
    const URL = 'https://onlinemenu.today/';

    Linking.canOpenURL(URL).then(supported => {
      if (supported) {
        Linking.openURL(URL);
      }
    });
  };

  const PricingCard = ({title, price, active}) => {
    return (
      <TouchableHighlight underlayColor="transparent">
        <Surface style={cardContainerStyle}>
          <View>
            <Text style={titleTextStyle}>{title}</Text>
            <Text style={priceTextStyle}>{price}</Text>
          </View>

          <Button label="SELECT PLAN" />
        </Surface>
      </TouchableHighlight>
    );
  };

  return (
    <SafeAreaView style={containerStyle}>
      <ScrollView
        style={containerStyle}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <PricingCard title="Free" price="$0 / month" active />
        <PricingCard title="Starter" price="$0.99 / month" />
        <PricingCard title="Pro" price="$4.99 / month" />
      </ScrollView>
      {/*<View style={buttonContainerStyle}>
        <Button
          label="MANAGE SUBSCRIPTION"
          onPress={onPressManageSubscription}
        />
     </View>*/}
    </SafeAreaView>
  );
};

export default Pricing;
