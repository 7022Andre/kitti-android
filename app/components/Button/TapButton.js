import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

import styles from './styles';

const TapButton = (props) => (
  <View style={styles.container}>
    <Button
      raised
      large
      title={props.title}
      color="#AC4A83"
      backgroundColor={props.backgroundColor}
      onPress={props.onPress}
    />
  </View>
);

TapButton.propTypes = {
  title: PropTypes.string,
  backgroundColor: PropTypes.string,
  onPress: PropTypes.func,
};

export default TapButton;
