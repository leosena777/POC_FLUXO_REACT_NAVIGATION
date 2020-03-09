import React, {useEffect} from 'react';
import {View, Text, BackHandler} from 'react-native';
import styles from './styles';
import {NavigationStackProp} from 'react-navigation-stack';
import {Button} from '../../component';

export interface CustomerProps {
  navigation: NavigationStackProp;
}

export default function(props: CustomerProps): React.ReactElement {
  const {navigation} = props;
  const {container, title} = styles;

  const backButtonHandler = (): boolean => {
    navigation.navigate('Patrimony');
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backButtonHandler);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backButtonHandler);
    };
  }, []);

  return (
    <View style={container}>
      <Text style={title}>Patrimony</Text>
      <Button
        title="Create"
        onPress={() => navigation.navigate('PatrimonyCreateSuccess')}
      />
    </View>
  );
}
