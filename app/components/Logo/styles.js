import { Dimensions, StyleSheet } from 'react-native';

const imageSize = Dimensions.get('window').width / 6;

export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: imageSize,
    height: imageSize,
  },
  textHeader: {
    color: 'white',
    fontWeight: '500',
    fontSize: 30,
    marginBottom: 15,
    fontFamily: 'sans-serif-thin',
  },
  textSubtitle: {
    color: 'white',
    fontWeight: '400',
    fontSize: 20,
    marginTop: 15,
    fontFamily: 'sans-serif-thin',
    fontStyle: 'italic',
  },
});
