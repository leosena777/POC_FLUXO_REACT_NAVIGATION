import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {NavigationStackProp} from 'react-navigation-stack';
import {Button} from '../../component';

export interface PatrimonyProps {
  navigation: NavigationStackProp;
}

export default function(props: PatrimonyProps): React.ReactElement {
  const {navigation} = props;
  const {container, title} = styles;
  return (
    <View style={container}>
      <Text style={title}>Patrimony</Text>
      <Button
        title="go to connectivity"
        onPress={() => navigation.navigate('Connectivity')}
      />
      <Button
        title="Create Patrimony"
        onPress={() => navigation.navigate('PatrimonyCreate')}
      />
    </View>
  );
}
