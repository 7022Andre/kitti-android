import React, {Component} from 'react';
import { View, TouchableHighlight } from 'react-native';

import styles from './styles';

export default (props) => (
  <TouchableHighlight style={styles.box} onPress={() => props.navigate('SetGoal')}>
    <View style={styles.box} />
  </TouchableHighlight>
);
