import { Dimensions, StyleSheet } from 'react-native';

const imageWidth = Dimensions.get('window').width / 2;

export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: imageWidth,
    height: imageWidth,
  },
  textHeader: {
    color: 'white',
    fontWeight: '500',
    fontSize: 40,
    marginBottom: 20,
    fontFamily: 'sans-serif-thin',
  },
  textSubtitle: {
    color: 'white',
    fontWeight: '400',
    fontSize: 25,
    marginTop: 20,
    fontFamily: 'sans-serif-thin',
    fontStyle: 'italic',
  },
});
