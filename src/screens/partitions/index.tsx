import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {NavigationStackProp} from 'react-navigation-stack';

export interface PartitionProps {
  navigation: NavigationStackProp;
}

export default function(props: PartitionProps): React.ReactElement {
  const {navigation} = props;
  const {container, title} = styles;
  return (
    <View style={container}>
      <Text style={title}>Partition</Text>      
    </View>
  );
}
