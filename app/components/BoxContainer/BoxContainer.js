import React from 'react';
import { View } from 'react-native';
import { Box } from '../Box';

import styles from './styles';

export default (props) => (
  <View style={styles.boxContainer}>
    <Box navigate={props.navigate}/>
    <Box />
    <Box />
  </View>
);
