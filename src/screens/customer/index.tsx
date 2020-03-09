import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {NavigationStackProp} from 'react-navigation-stack';
import {Button} from '../../component';

export interface CustomerProps {
  navigation: NavigationStackProp;
}

export default function(props: CustomerProps): React.ReactElement {
  const {navigation} = props;
  const {container, title} = styles;
  return (
    <View style={container}>
      <Text style={title}>Customer</Text>
      <Button
        title="go to patrimony"
        onPress={() => navigation.navigate('Patrimony')}
      />
    </View>
  );
}
