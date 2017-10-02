import React from 'react';
import { View } from 'react-native';
import { Box } from '../Box';

import styles from './styles';

const BoxContainer = () => (
  <View style={styles.boxContainer}>
    <Box />
    <Box />
    <Box />
  </View>
);

export default BoxContainer;
