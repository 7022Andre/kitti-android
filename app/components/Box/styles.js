import { Dimensions, StyleSheet } from 'react-native';

const imageSize = Dimensions.get('window').width / 10;

export default StyleSheet.create({
  box: {
    width: imageSize,
    height: imageSize,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'lightgray',
  },
});
