import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './button.styles';

interface ButtonProps {
  title: string;
  onPress: () => {};
}

export default function(props: ButtonProps) {
  const {box, title} = styles;
  return (
    <TouchableOpacity style={box} onPress={props.onPress}>
      <Text style={title}>{props.title}</Text>
    </TouchableOpacity>
  );
}
