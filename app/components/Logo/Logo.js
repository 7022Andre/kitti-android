import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles.js';

const Logo = () => (
  <View style={styles.container}>
    <Image source={require('./img/logo.jpg')} />
    <Text>Kitti - The Kids Activity Fun Timer</Text>
  </View>
);

export default Logo;
