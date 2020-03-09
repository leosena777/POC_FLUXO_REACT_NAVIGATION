import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {NavigationStackProp} from 'react-navigation-stack';
import {Button} from '../../component';

export interface HomeProps {
  navigation: NavigationStackProp;
}

export default function(props: HomeProps): React.ReactElement {
  const {navigation} = props;
  const {container, title} = styles;
  return (
    <View style={container}>
      <Text style={title}>Home</Text>
      <Button
        title="go to customer"
        onPress={() => navigation.navigate('Customer')}
      />
    </View>
  );
}
