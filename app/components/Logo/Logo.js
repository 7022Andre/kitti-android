import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

export default () => (
  <View style={styles.container}>
    <Text style={styles.textHeader}>K I T T I</Text>
    <Image resizeMode="contain" style={styles.image} source={require('./img/logo.jpg')} />
    <Text style={styles.textSubtitle}>The kids activity fun timer</Text>
    <Text style={styles.textSubtitle}>that helps your child understand and visualize time.</Text>
  </View>
);
