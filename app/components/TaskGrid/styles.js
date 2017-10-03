import { Dimensions, StyleSheet } from 'react-native';

const imageSize = Dimensions.get('window').width / 10;

export default StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    width: '100%',
    height: '100%',
    margin: 5,
    justifyContent: 'center',
    alignContent: 'center',
  },
  gridImageContainer: {
    margin: 1,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'white',
  },
  gridImage: {
    width: imageSize,
    height: imageSize,
  },
  gridImageSelected: {
    borderWidth: 3,
    borderColor: '#AC4A83',
  },
  caption: {
    fontFamily: 'sans-serif-thin',
  },
});
